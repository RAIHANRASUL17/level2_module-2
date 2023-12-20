{
    //generics only Array
    type GenericArray<T> = Array<T>

    // const rollNumber : number[] = [3, 6, 8];
    const rollNumber: GenericArray<number> = [3, 6, 8];

    // const mentors : string[] = ['mr.x', 'mr.y', 'mr.z']
    const mentors: GenericArray<string> = ['mr.x', 'mr.y', 'mr.z']

    // const boolArray : boolean[] = [true, false]
    const boolArray: GenericArray<boolean> = [true, false]

    //generics only ArrayOfObject
    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "mezba",
            age: 30
        },
        {
            name: "jankar",
            age: 59
        }
    ]

    // Generic Tuple
    type GenericTuple<X, Y> = [X, Y]

    const manush: GenericTuple<string, string> = ['mr.x', 'mr.y']

    const userWithID: GenericTuple<number, { name: string, mail: string }> = [123, { name: "mezba", mail: "a@bgmail.com" }]




    // 
}