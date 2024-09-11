// premative values
let name = 'John Doe';
let age = 35;
let isMarried= false;

function printUser(userName, userAge, userStatus){
    console.log(`Name: ${userName}\nAge:${userAge}\nMarried:${userStatus?"Yes":"NO"}`)
}

printUser(name, age, isMarried);
