function sumNumber (numbers){

    // console.log(numbers)
    let sum = 0;
    for(let number of numbers){
        console.log(number)
        sum = sum + number
    }
    return sum
}

const number = [10, 33, 44, 77];
const output = sumNumber(number)
console.log (output)