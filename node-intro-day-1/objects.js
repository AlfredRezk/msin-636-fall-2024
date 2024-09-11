

// const user = {
//     name:'John Doe',
//     age:35, 
//     // printInfo: function(){
//     //     console.log(` Name: ${this.name} , Age: ${this.age}`);
//     // }
//     // ES6 Syntax
//     printInfo(){
//         console.log(` Name: ${this.name} , Age: ${this.age}`);
//     }
// }

// Access object properties
// console.log(user);
// console.log(user.name); //'John Doe';
// console.log(user['age']); //35
// user.printInfo();


const car = {
    make: 'Toyota', 
    model:'Corolla',
    year:1996,
    price:3999.99
}
// const make = car.make;
// const price = car.price;

const {make:carMake, price} = car

console.log(carMake);
console.log(price);