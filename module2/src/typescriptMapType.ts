{
    const numArray :number[] = [1, 2, 3];
    // const strArray :string[] = ['1', '2', '3'];

    const convertArrType :string[] = numArray.map((number) => number.toString())

    console.log(convertArrType);

    type areaNumber = {
        height: number;
        width: number;
        check: undefined;
    }

    type Height = areaNumber["check"]; // look up type

    // type areaString= {
    //     height: string;
    //     width: string;
    // }

    type areaString = {
        [key in keyof areaNumber] : string;
    }


    // dynamic look up type

    type AreaST<T> = {
        [key in keyof T] :T[key]
    }

    const checkAreaST :AreaST<{height: string; width:number}> = {
        height: "100",
        width: 40,
    }
}