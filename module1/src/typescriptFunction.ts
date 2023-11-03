function add(num1:number, num2:number):number{ // last :number is return type
    return num1 + num2;
}

add(3, 5);

const newAdd = (num1:number, num2:number):number => num1 + num2;

newAdd(3,8);

// A function in a object is called method
// A function in a object is must be a normal function

const userBalance = {
    name: 'Almas',
    balance: 0,
    addAmount(newBalance:number):string{
        return `users new balance is ${this.balance + newBalance}`;
    }
}

const arr : number[] = [9, 3, 7];
const newArray :number[] = arr.map((element :number) :number => element * element);