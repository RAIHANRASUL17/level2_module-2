"use strict";
{
    // 
    // Type Assertion
    // example1
    let anything;
    anything = "Next level wev developer";
    // (anything as string).
    // example2
    const KgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value);
            return `The Converted Value: ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value;
        }
    };
    // call
    const result1 = KgToGm(100);
    console.log({ result1 });
    const result2 = KgToGm("100");
    console.log({ result2 });
    // 
}
