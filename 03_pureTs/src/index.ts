// console.log('------Hello Typescript -----')

// console.log('Hey JS')

//Classes in TS

class User{
    name:string
    email:string
    city:string=""
    constructor(name:string,email:string){
        this.name=name
        this.email=email
    }
}

const obj=new User('Dhanush','abc@gmail.com')