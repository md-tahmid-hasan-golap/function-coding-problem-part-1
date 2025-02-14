function inchToFeet(inch){
    const feet = inch / 12;
    const feetint = parseInt(feet)
    // console.log(feet)

    const inchRemaning = inch % 12
    console.log(feetint, "Feet ", inchRemaning, "inch ")
}
const output = inchToFeet(75);
console.log(output)

function mileToKilomitar(mile){
    const kilo = mile * 1.60934;
    return kilo

}

const result = mileToKilomitar(kilo)
console.log(result)