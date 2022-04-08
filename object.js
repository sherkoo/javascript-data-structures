const obj = { 
  firstName: "Carl",
  lastName: "Sagan",
  age: 45,
  hobbies: ['skining', 'tennis'],
  talk() {
    return "Hello, my name is " + this.firstName + " I'm " + this.age + " years old.";
  }
}

console.log(obj.firstName);
console.log(obj.age);
console.log(obj);
console.log(obj.talk());