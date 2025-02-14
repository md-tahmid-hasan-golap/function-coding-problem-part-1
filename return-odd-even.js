// function oddEven (numbers){
//     // console.log(numbers)
//     let array = []
//     let sum = 0;
//     for (let number of numbers){
//         // console.log(number)
//         if(number % 2 === 1){
//             console.log(number)
//             array.push(number)
            
            
//         }
//     }
// return array
// }
// const number = [10, 31, 44, 85, 97, 43, 66]
// const output = oddEven(number)
// console.log(output)

function iseven(number){
    if(number % 2 === 0){
        return true
    }
    else{
        return false
    }

}
const output = iseven(12)
console.log(output)
const output2 = iseven(13)
console.log(output2)
const output3 = iseven(14)
console.log(output3)