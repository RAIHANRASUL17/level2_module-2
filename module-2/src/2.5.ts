{
    //Function with Generics

    // example1
    const createArray = (param: string): string[] => {
        return [param]
    };

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    // call 
    const res = createArray("k")
    console.log(res)
    const resGeneric = createArrayWithGeneric<string>("bngladessh")
    console.log(resGeneric)
    type User = {
        id: number; name: string
    }
    const resGenericObj = createArrayWithGeneric<User>({ id: 12, name: 'raihan' })
    console.log(resGenericObj)

// example-2
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2]
}

// call 
const resTuple1 = createArrayWithTuple<string, number>("Bangladesh", 123)
console.log(resTuple1)


const resTuple2 = createArrayWithTuple<string, {name: string}>( "bangladesh", { name: 'asia' })
console.log(resTuple2)

// example3
const addCourseToStudent = <T>(student: T) =>{
    const course = "Next Level Wev Development"
    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent({name: 'raihan', email: 'x@gmail.com', devtype: "NLW" })
console.log(student1)

const student2 = addCourseToStudent({name: 'Mr.y', email: 'Y@gmail.com', hasWatch: "Apple" })
console.log(student2)






    // 
}