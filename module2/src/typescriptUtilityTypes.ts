{
    type person =  {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    // pick type
    type NameEmail = Pick<person, "age" | "email">

    // omit type (remove item)
    type contact = Omit<person, "name" | "age">

    // Required
    type req = Required<person>

    // partial (make all type optional)
    type par = Partial<person>

    // read only type
    type readOnly = Readonly<person>

    const person1 :readOnly = {
        name: 'abc',
        age: 45,
        contactNo: "0123456789"
    }

    // person1.name = "efg" // cannot change value when type is read only

    // type myObj = {
    //     a: string;
    //     b: string;
    // }

    type myObj = Record<string, string> // 1st string is key type 2nd string is value type

    const checkObj :myObj = {
        a: 'a',
        b: 'b',
        c: "c"
    }
}