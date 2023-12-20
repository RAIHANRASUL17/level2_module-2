{
    //Constrains---> force

    // example1
    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = "Next Level Wev Development"
        return {
            ...student,
            course
        }
    };

    const student3 = addCourseToStudent({
        id: 333,
        name: "Mr. 3",
        email: "3@gmail.com",
        emni: "emni"
    })

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devtype: string;
    }>({
        id: 222,
        name: 'raihan',
        email: 'x@gmail.com',
        devtype: "NLW"
    })

    console.log(student1)

    const student2 = addCourseToStudent({
        id: 333,
        name: 'Mr.y',
        email: 'Y@gmail.com',
        hasWatch: "Apple"
    })
    console.log(student2)



    // 
}