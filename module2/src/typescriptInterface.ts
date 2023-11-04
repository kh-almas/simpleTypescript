{
    type User = {
        name: string,
        age: number,
    }

    type rollNumber = number; // can not use in interface

    type userWithRole = User & { role :string } // extend  values type

    const userInfo :userWithRole = {
        name: 'almas',
        age: 27,
        role: 'admin'
    }

    interface user1 { // same as type
        name: string,
        age: number
    }

    interface userWithRole2 extends user1 {
        role: string,
    }

    const userInfo1 :userWithRole2 = {
        name: 'almas',
        age: 27,
        role: 'admin'
    }

    type Roll = number[];
    interface roll2 {
        [index :number] : number
    }

    const  rollNumber :roll2 = [4,7,1];

    type add1 = (num1 :number, num2:number) => number;

    interface add2 {
        (num1 :number, num2:number) : number;
    }
    const add :add2 = (num1, num2) => num1 + num2;
}