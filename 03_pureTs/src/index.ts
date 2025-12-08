// console.log('------Hello Typescript -----')

// console.log('Hey JS')

//Classes in TS

class User{
    name:string
    private email:string //access specifiers can only be used in TS
    public city:string=""
    constructor(name:string,email:string,public id:number){
        this.name=name
        this.email=email
        this.id=id
    }

    get getID():string{
        return `abc${this.email}` //getter in TS
    }
    set getID(id:number){ //setter for the declared getter setter has no return type so dont define it as void
        if(id<3){
            this.id=id
        }
        else{
            throw new Error("there is an error in Id");
            
        }
    }
}

const obj=new User('Dhanush','abc@gmail.com',123)