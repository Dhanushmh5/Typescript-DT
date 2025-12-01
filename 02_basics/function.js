"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num1) {
    //no need to check the type
    return num1 + 2;
}
addTwo(5); //'5' also works so apply strict check in parameters
//addTwo("5")
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('abc');
//getUpper(5)-->error
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "h@h.com");
function signUpUser(name, email, isPaid) { }
signUpUser("hitesh", "hitesh@lco.dev", false);
