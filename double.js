function doubleString(string){
    // console.log(string)
    let nodouble = [];
    for (let friend of string){
        // console.log(friend)
        if(nodouble.includes(friend) === false){
            nodouble.push(friend)
            
        }
    }
    return nodouble

}

const friends = ['golap', 'basar', 'golap', 'imrul', 'basar'];
const result = doubleString(friends)
console.log(result)