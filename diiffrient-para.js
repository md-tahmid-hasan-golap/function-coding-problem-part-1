function evenOddSizeString(str){

    const size = str.length
    if(size % 2 === 0){
        console.log("even number")
        return true
    }
  else{
    console.log("odd number")
    return false
  }
  console.log(str, size)
}
evenOddSizeString("Dhaka")
evenOddSizeString("faka")