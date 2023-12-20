{
    // Generic Constraint With Keyof Operator

    // example1

    type vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof vehicle;

    const person1: Owner = "bike"
    const person2: Owner2 = "car"

    // example2
    const user = {
        name: "Mr . X",
        age: 30,
        address: "ctg"
    }
    user.age // process1---->30
    user["age"] // process2---->30


    // example3
    const getPropertyValue = <X, Y extends keyof X > (obj: X, key: Y) => {
        return obj[key]
    }
    const user1 = {
        name: "Mr . X",
        age: 30,
        address: "ctg"
    }
const result1 = getPropertyValue(user1, "age")
console.log(result1)


    // 
}