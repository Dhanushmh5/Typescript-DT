"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33; //useof uniontype string or number values are acceptable
score = '34';
var people = { name: 'xyz', id: 224 };
//redifining
people = { username: 'abc', id: 23 };
function getDbId(id) {
    //making some API calls
    console.log("DB id is: ".concat(id));
    //you cant individually make use of any methods from eithrt datatype 
    //like to lowerCase or floor on number|string
    //union narrowing
    if (typeof id === 'number') {
        console.log('Its a number');
        id.toPrecision(5);
    }
    else {
        console.log('Its a string');
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("3"); //acceptable
//array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment; //specific words not datatype
seatAllotment = "aisle";
