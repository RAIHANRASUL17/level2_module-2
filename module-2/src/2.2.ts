{
    // 
// Interface
// example1
interface User2 {
    name: string;
    age: number
}

const user2 : User2 = {
    name: "raihan",
    age: 30
};

// example2 
type User1 = {
    name: string;
    age: number
}

type UserWithRole1 = User1 & {role: string}

interface UserWithRole2 extends User2 { role: string}
// 1.for type
// const user1 : UserWithRole1 = {
//     name: "raihan",
//     age: 32,
//     role: "manager"
// }

// 2.for interface
const user1 : UserWithRole2 = {
    name: "raihan",
    age: 32,
    role: "manager"
}

// example3
// js-->object, array-->object, function-->object
//array
type Roll1 = number[]

interface Roll2 {
[index: number] : number
}

// const rollNumber : Roll1 = [1, 2, 3, 4]
const rollNumber : Roll2 = [1, 2, 3, 4]

// function
type Add1 = (num1: number, num2: number) => number;
interface Add2 {
   (num1: number, num2: number) : number
};
// const add: Add1 = (num1, num2) => num1 + num2;
const add: Add2 = (num1, num2) => num1 + num2;
 




    // 
}