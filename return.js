// return this function

function addNumber (number){
    const num = number;
    return num;
}
const output = addNumber(20)

console.log(output)

function add (num1, num2){
    const total = num1 + num2;
    return total

}
const output2 = add(10, 20)
console.log(output2)
const output3 = add(100, 300)
console.log(output3)

function name (string){
    // const myName = string
    // console.log(myName)
    if(string % 2 === 0){
        return true
    }
    else{
        return false
    }
}
const names = name("golap")
console.log(names)