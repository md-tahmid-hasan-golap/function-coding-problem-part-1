// prestice task number  -  1

function multipole(a, b, c, d){
    const gunFall = a * b * c * d;
    return gunFall;
}



const output = multipole(10, 33, 55, 87);
console.log(output)

// prestice task number  -  2

function addNumber (number){
    console.log(number)
    if(number % 2 === 0){
        const num = number * 2;
        console.log(num)
    }
  else{
   if( number % 2 === 1){
    const num1 = number / 2;
    console.log(num1)
   }
  }
}
const output2 = addNumber(21)
console.log(output2)
const output3 = addNumber(20)
console.log(output3)

// prestice task number  -  3

function sumArray (numbers){
 let sum = 0;
    for(let number of numbers){
        console.log(number)
        sum = sum + number
    }
    return sum
}

const array = [12, 44, 66, 33, 98];
const result = sumArray(array);
console.log(result)


// prestice task number  -  4

