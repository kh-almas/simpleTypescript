"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // set "target": "ES6" in tsconfig file
    // get json placeholder image
    // const getTodo = () => {
    //     fetch(
    //         'https://jsonplaceholder.typicode.com/todos/1'
    //     )
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }
    // const getTodo = async () => {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //
    //         const data = await response.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error.message);
    //     }
    // };
    //
    // getTodo();
    //simulate
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = "this is test";
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to load data');
            }
        });
    };
    // call promise
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const findData = yield createPromise();
        console.log(findData);
    });
    showData();
}
