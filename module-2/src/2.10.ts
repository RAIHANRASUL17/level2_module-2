{
    //
    // example1: simple map
    const arrayOfNumbers: number[] = [1, 2, 3, 4]
    const arrayOfStrings: string[] = arrayOfNumbers.map(number => number.toString())
    // console.log(arrayOfStrings)

    // example 2: map type
    type AreaNumber = {
        height: number;
        width: number
    }
    // type AreaString = {
    //     height: string;
    //     width: string
    // }


    // type AreaString = {
    //     [key in "height" | "width"] : string
    // };

    // To use AreaNumber => "height" | "width"

    type AreaString = {
        [key in keyof AreaNumber] : string
    }

    // example 3
    type AreaNumber2 = {
        height: number;
        width: number
    }
type Height = AreaNumber2["height"] // look up type

// example 4
type AreaNumber4<T> = {
    [key in keyof T] : T[key]
}

const area4: AreaNumber4<{height: string; width: number }> = {
height: "100",
width: 50
}






    // 
}