const str = 'this is some string';

// String.prototype.mySplit = function(sep = " ") {

//     const res = []
//     let resString = this
//     while(resString.length > 0){
//         const endIndex = resString.indexOf(sep)
//         console.log(endIndex)
//         if(endIndex !== -1){
//             const word = resString.slice(0,endIndex)
//             res.push(word)
//             resString = resString.slice(endIndex)
//         }else{
//             res.push(resString)
//             break
//         }
        
        
//     }
//    return res

// }

console.log(str.indexOf(" "))