"use strict";
{
    // This is scope. it solves redeclare
    // variable problem. we cannot redeclare
    // variable that is declare in other file
    // using typescript without using this scope.
    // ... for spread operator
    const num1 = [6, 2, 8];
    const num2 = [7, 3, 9];
    num1.push(...num2);
    const num3 = [...num1, 12];
    const obj1 = {
        abc: 'abc',
        efg: 'efg',
    };
    const obj2 = {
        abcd: 'abcd',
        efgh: 'efgh',
    };
    const obj3 = Object.assign(Object.assign({}, obj1), obj2);
    // Rest operator.
    // Rest operator give a array.
    const allFriend = (...friends) => {
        friends.forEach((singleFriend) => console.log(`Hi ${singleFriend}`));
    };
    allFriend('abc', 'def', 'ghi');
}
