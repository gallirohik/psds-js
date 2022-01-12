const list = [1,2,3,4,5]

const square = (el) =>{
    return el * 2
}
const squareNumbersReqularMap = () =>{
    return list.map(square)
}

console.log(squareNumbersReqularMap())

Array.prototype.myMap = function(callback){
    const newArray = []
    for(let i = 0 ; i < this.length ; i++){
        const val = callback(this[i],i,this)
        newArray.push(val)
    }
    return newArray
}

console.log(list.myMap(square))