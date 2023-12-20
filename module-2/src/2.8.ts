{
    // //Promise
    // // example1: basic promise
    // // simulate
    // const createPromise = () => {
    //     return new Promise((resolve, reject) => {
    //         const data: string = "something is here, try this"
    //         if (data) {
    //             resolve(data)
    //         } else {
    //             reject("fail to load data")
    //         }

    //     })
    // };
    // // calling create promise function
    // const showData = async () => {
    //     const data = await createPromise()
    //     console.log(data)
    // }
    // // call function showData
    // showData()


    // // example 2: promise--string
    // // simulate
    // const createPromise = (): Promise<string> => {
    //     return new Promise<string>((resolve, reject) => {
    //         const data: string = "something is here, try this"
    //         if (data) {
    //             resolve(data)
    //         } else {
    //             reject("fail to load data")
    //         }

    //     })
    // };
    // // calling create promise function
    // const showData = async (): Promise<string> => {
    //     const data: string = await createPromise()
    //     // console.log(data)
    //     return data
    // }
    // // call function showData
    // showData()


    // // example 3: promise--boolean
    // // simulate
    // const createPromise = (): Promise<boolean> => {
    //     return new Promise<boolean>((resolve, reject) => {
    //         const data: boolean = true
    //         if (data) {
    //             resolve(data)
    //         } else {
    //             reject("fail to load data")
    //         }

    //     })
    // };
    // // calling create promise function
    // const showData = async (): Promise<boolean> => {
    //     const data: boolean = await createPromise()
    //     // console.log(data)
    //     return data
    // }
    // // call function showData
    // showData()



    // //example 4: promise--object
    // // simulate
    // const createPromise = (): Promise<{ something: string }> => {
    //     return new Promise<{ something: string }>((resolve, reject) => {
    //         const data: { something: string } = { something: "something is here" }
    //         if (data) {
    //             resolve(data)
    //         } else {
    //             reject("fail to load data")
    //         }

    //     })
    // };
    // // calling create promise function
    // const showData = async (): Promise<{ something: string }> => {
    //     const data: { something: string } = await createPromise()
    //     // console.log(data)
    //     return data
    // }
    // // call function showData
    // showData()

    // //example 5: promise--object with type
    // // simulate
    // type Something = { something: string }


    // const createPromise = (): Promise<Something> => {
    //     return new Promise<Something>((resolve, reject) => {
    //         const data: Something = { something: "something is here" }
    //         if (data) {
    //             resolve(data)
    //         } else {
    //             reject("fail to load data")
    //         }

    //     })
    // };
    // // calling create promise function
    // const showData = async (): Promise<Something> => {
    //     const data: Something = await createPromise()
    //     // console.log(data)
    //     return data
    // }
    // // call function showData
    // showData()

    // //example 6: promise--From Server

    // const getTodo = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     const data = await res.json()
    //     console.log(data)
    // };

    // call function
    // getTodo()


    //example 7: promise--From Server and make type

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }


    const getTodo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        // console.log(data)
        return data
    }

    // call function
    getTodo()





    // 
}