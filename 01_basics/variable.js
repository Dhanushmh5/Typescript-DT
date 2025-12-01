"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = 'Dhanush';
console.log(greetings);
// greetings=true //error due to type mismatch
// greetings.toLowercase()
//number
var userid = 2233445;
var str = userid.toLocaleString();
//boolean
var isLoggedIn = false;
console.log(isLoggedIn);
//Type Inference
var num = 234.45; //--> TS is smart enough to infer type in such cases avoid colon
num.toFixed();
