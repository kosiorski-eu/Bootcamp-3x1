class Person {

    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(){
        console.log("Nazywam się " + this.firstName + " " + this.lastName + "!");
    }
}

class Programmer extends Person {

    constructor(firstName,lastName,lang){
        super(firstName,lastName);
        this.lang = lang || "JavaScript";
    }

    work(){
        this.sayHello();
        console.log("Napisane w " + this.lang + ".");
    }
}


let jsDev = new Programmer("Konrad","Koosiortki","Python");

jsDev.work();
