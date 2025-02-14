function evenNumber (numbers){
    
    // console.log(numbers)

    for(let number of numbers){
        // console.log(number)
        if(number % 2 === 1){
            console.log(number)
            
        }
    }

   
}
const number = [11, 44, 66, 13, 97, 55]
const num = evenNumber(number);
console.log(num);