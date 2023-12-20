{
    // 
    // Type Assertion

// example1
let anything : any

anything = "Next level wev developer";
// (anything as string).

// example2
const KgToGm = (value:string | number): string|number|undefined => {
if(typeof value === "string"){
    const convertedValue = parseFloat(value)
    return `The Converted Value: ${convertedValue}`
}
if(typeof value === "number"){
    return value
}
};
// call
const result1 =  KgToGm(100) as number
console.log({result1})
const result2 = KgToGm("100") as string
console.log({result2})

// example3
type CustomError = {
    message: string
}
try {
    
} catch (error) {
    console.log((error as CustomError).message)
}



    // 
}