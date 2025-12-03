"use strict";
// console.log('------Hello Typescript -----')
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('Hey JS')
//Classes in TS
class User {
    name;
    email;
    city = "";
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
const obj = new User('Dhanush', 'abc@gmail.com');
//# sourceMappingURL=index.js.map