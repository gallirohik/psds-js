/*
1 Person who has to finish the following tasks
1, 2, 3, 4, 5

Task1 can only be started after tasks 2 and 3 are finished
1 <- 2, 3
Task 4 can only be started after task 5 is over
4 <- 5
Task 2 can only be started after finishing task 3
2 <- 3

Lets design a solution for this which takes the tasks and their dependencies as input and computes atleast one order of these tasks

Possible solutions for this problem: 
5, 4, 3, 2, 1
or
5, 3, 2, 4, 1
or
3, 5, 4, 2, 1
or
many more
..
*/

const tasks = [1,2,3,4,5]

const deps = {
  1:[2,3],
  4:[5],
  2:[3]
}

const topologicalSort = () => {
  const result = []
  const tm = tasks.map((v,i) => {
    const hasDeps = Array.isArray(deps[i+1])
    if(!hasDeps)
    {
    result.push(v)
    }
    return hasDeps
  })
  let i = 0;

  while(result.length !== tasks.length){
     const dep = deps[i+1]
     if(Array.isArray(dep)){
      const status = dep.every(v => tm[v - 1])
      if(!status){
        tm[i] = false
        result.push(tasks[i])
      }
     }
     if(++i === tasks.length){
       i = 0
     }
  }
  
  return result
}

console.log(topologicalSort())
