{
    // when we know the variable type better then typescript, is called type assertion.

    let anything :any;

    // anything = "this is string";
    // // console.log(anything) //got the string type suggesting

    anything = 583;
    console.log(anything);

    // (anything as number). //got the number type suggesting

    const kgToGm = (value :string | number) :string | number | undefined => {
        if(typeof value  === 'string'){
            const convert =  parseFloat(value)*1000
            return `the value is ${convert}`;
        }

        if(typeof value === 'number'){
            return value * 1000;
        }
    }

    const result1 = kgToGm('1000') as string; // type assertion
    const result2 = kgToGm(1000) as number; // type assertion


    type CustomError = {
        message :string,
    }
    try{

    }catch (e){
        console.log((e as CustomError).message)
    }

}