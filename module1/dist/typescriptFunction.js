"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(3, 5);
const newAdd = (num1, num2) => num1 + num2;
newAdd(3, 8);
// A function in a object is called method
// A function in a object is must be a normal function
const userBalance = {
    name: 'Almas',
    balance: 0,
    addAmount(newBalance) {
        return `users new balance is ${this.balance + newBalance}`;
    }
};
const arr = [9, 3, 7];
const newArray = arr.map((element) => element * element);
