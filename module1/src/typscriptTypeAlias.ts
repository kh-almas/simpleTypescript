{
    type Person = {
        name: string,
        email?: string,
        phone?: string,
        status: boolean,
    }

    const person1: Person = {
        name: 'abc',
        phone: '01600000000',
        status: true,
    }

    const person2: Person = {
        name: 'cde',
        email: 'cde@gmail.com',
        status: true,
    }

    type Add = (num1: number, num2:number) => number;
    const add: Add = (num1, num2) => num1 + num2;
}