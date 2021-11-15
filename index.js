// US UK
const priceUs = 5.66
const pricePound = 3.49

const bigMacIndex = (priceUs/pricePound).toFixed(2)
console.log("Big Mac Index : " + bigMacIndex)

const differencePound = ((Math.abs( 1.34 - bigMacIndex)/bigMacIndex)*100).toFixed(1)
console.log("The British pound is " + differencePound +"% undervalued against the US dollar.")


// US Switzerland
const priceSwitzerland = 6.50

const bigMacIndexSwitzerland = (priceUs/priceSwitzerland).toFixed(2)
console.log("Big Mac Index: " + bigMacIndexSwitzerland)

const differenceSwitzerland = ((Math.abs(1.08 - bigMacIndexSwitzerland)/bigMacIndexSwitzerland)*100).toFixed(1)
console.log("The Swiss franc is " + differenceSwitzerland +"% overvalued against the US dollar.")


// US Sweden
const priceSweden = 54.00

const bigMacIndexSweden = (priceUs/priceSweden).toFixed(2)
console.log("Big Mac Index: " + bigMacIndexSweden)

const differenceSweden = ((Math.abs(0.11 - bigMacIndexSweden)/bigMacIndexSweden)*100).toFixed(1)
console.log("The Swedish krona is " + differenceSweden +"% overvalued against the US dollar.")


// US India
const priceIndia = 190 // rupees

const bigMacIndexIndia = (priceUs/priceIndia).toFixed(2)
console.log("Big Mac Index : " + bigMacIndexIndia)

const differenceIndia = ((Math.abs(0.013 - bigMacIndexIndia)/bigMacIndexIndia)*100).toFixed(1)
console.log("The Indian rupee is " + differenceIndia +"% undervalued against the US dollar.")

// US Turkey

const priceTurkey = 19.99 //lira

const bigMacIndexTurkey = (priceUs/priceTurkey).toFixed(2)
console.log("Big Mac Index : " + bigMacIndexTurkey)

const differenceTurkey = ((Math.abs(0.099 - bigMacIndexTurkey)/bigMacIndexTurkey)*100).toFixed(1)
console.log("TheTurkish lira is " + differenceTurkey +"% undervalued against the US dollar.")