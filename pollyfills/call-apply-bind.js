const obj = {
    a :10,
    b:20
}

function tester(a,b){
    console.log(`${this.a} : ${this.b} :: ${a} : ${b}`)
}

// Bind

// const bindExecuter = tester.bind(obj,1,2)
// bindExecuter()

// pollyfill

Function.prototype.myBind = function(scope,...args){
    scope._this = this
    return function(){
        scope._this(...args)
    }
}

const bindPollyExecuter = tester.myBind(obj,1,2)
bindPollyExecuter()

// Call

// tester.call(obj,1,2)

// pollyfill

Function.prototype.myCall = function(scope,...args){
    scope._this = this
    return scope._this(...args)
}

tester.myCall(obj,1,2)




// Apply

// tester.apply(obj,[1,2])

// pollyfill

Function.prototype.myApply = function(scope,args){
    scope._this = this
    return scope._this(...args)
}

tester.myApply(obj,[1,2])


