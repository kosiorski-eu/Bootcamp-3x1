function Person(firstName, lastName) {
 
    if( !(this instanceof Person) ) {
        return new Person(firstName, lastName);
    }
 
    this.firstName = firstName;
    this.lastName = lastName;
 
}
 
Person.prototype.sayHello = function() {
 
    console.log("Nazywam się " + this.firstName + " " + this.lastName + "!");
 
};
 
function Programmer(firstName, lastName, lang) {
 
    lang = lang || "JavaScript";
 
    Person.call(this, firstName, lastName);
 
    this.lang = lang;
 
};
 
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
 
Programmer.prototype.work = function() {
 
    this.sayHello();
    console.log("Napisane w  " + this.lang + ".");
 
};
var jsDev = new Programmer("Konrad", "Kosiorski", "Python");
 
jsDev.work();
















