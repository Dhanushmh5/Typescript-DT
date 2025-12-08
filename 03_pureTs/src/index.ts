// console.log('------Hello Typescript -----')

// console.log('Hey JS')

//Classes in TS

class User{
    protected name:string
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

class subUser extends User{
    //protected can be used in any class that inherit the base class
    changeName(){
        this.name='abcd'
        
    }
    
}

const obj=new User('Dhanush','abc@gmail.com',123)