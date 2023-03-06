// In this assignment, you will be creating a a constructor function named
// "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", 
// which says 
// "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Move the "Speak" method outside of the constructor function and into 
// the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results


function Person(attributes) {
    this.name = attributes.name
    this.age = attributes.age
    this.hobby = attributes.hobby
    
}

Person.prototype.speak = function(){
    return " Hello, My name is  " + this.name + 
    "  and I'm  " +  this.age  +  " years old. I love  " + this.hobby
}


var me = new Person ({
    name: 'xabiib', 
    age: 26, 
    hobby: 'reading'
})

console.log(me.speak());


var bro = new Person ({
    name: 'Xassan', 
    age: 22, 
    hobby: 'football'
})

console.log(bro.speak());






