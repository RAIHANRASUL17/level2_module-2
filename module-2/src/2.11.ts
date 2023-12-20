{
    // utility type

  
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }
  // pick
    type NameAge = Pick<Person, "name" | "age">

// omit 
type ContactInfo = Omit<Person, "name" | "age" >

// required
type PersonRequired = Required<Person>

// partial
type PersonPartial = Partial<Person>

// readonly
type PersonReadonly = Readonly<Person>
const person1 : PersonReadonly = {
    name: "mr.xy",
    age: 2,
    contactNo: "0179999"
}

// person1.name = "Mr.kk"





    // 
}