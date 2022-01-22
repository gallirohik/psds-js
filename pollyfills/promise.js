const PENDING = 1;
const FULLFILLED = 2;
const ERROR = 3;

/*
const response = new Promise(executor)

executor :: // doing async task
response.then((value) =>{
    /
    do something.....
    /
})

*/

const customPromise = function (executor) {
  let status = PENDING;
  let result = null;
  const callbacks = [];
  const errors = [];

  const resolve = (value) => {
    if (status !== PENDING) return;
    status = FULLFILLED;
    result = value;
    callbacks.forEach((cb) => cb(result));
  };
  const reject = (error) => {
    if (status !== PENDING) return;
    status = ERROR;
    result = error;
    errors.forEach((ecb) => ecb(result));
  };
  this.then = function (cb) {
    if (status === FULLFILLED) return cb(result);
    callbacks.push(cb);
  };
  executor(resolve, reject);
};

const asyncTask = (resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
};

const response = new customPromise(asyncTask);
response.then((v) => {
  console.log("[custom Promise :: Log 1]", v);
});
response.then((v) => {
  console.log("[custom Promise :: Log 2]", v);
});

response.then((v) => {
  console.log("[custom Promise :: Log 3]", v);
});

setTimeout(() => {
  response.then((v) => {
    console.log("[custom Promise :: Log 4]", v);
  });
}, 3000);

const res = new Promise(asyncTask);
res.then((v) => console.log("[Promise :: Log 5]", v));

const asyncAwait = async () => {
  const res = new Promise(asyncTask);
  const resText = await res;
  console.log("[Async Await]", resText);
};
asyncAwait();
