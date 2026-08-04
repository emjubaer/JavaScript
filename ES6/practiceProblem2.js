
// Object List 

const employee = {
  id: 101,
  name: "Jubaer",
  department: "IT",
  salary: 40000
};

const product = {
  name: "Laptop",
  price: 80000
};

// Destructuring করে name এবং salary
const {name, salary} = employee;
console.log(`Your name is ${name}, Your Salary is: ${salary}`);

// Show this: Jubaer works in IT department and earns 40000 BDT.
const {department} = employee;
console.log(`${name} works in ${department} department and earns ${salary} BDT.`);

// Object.keys() দিয়ে সব Property Name Print
// Object.values() দিয়ে সব Value Print
const allKeys = Object.keys(employee);
console.log(allKeys);
const allDept = Object.values(employee);
console.log(allDept);

// copy product object add stock propery then show these objets

const copyProduct = {...product, stock:10}
console.log(product);
console.log(copyProduct);

const marks = [70,80,90];
const newMarks = [...marks,100];
console.log(Math.max(...newMarks));
console.log(Math.min(...newMarks));

const multiply = (a,b) => a*b;
const square = (num) => num*num;

console.log(multiply(2,4) ,square(5));


// Defalut Parameter
const greet = (name = "Guest") => `Welcome! ${name}`;
console.log(greet());
console.log(greet("Jubaer"));

const colors = ["Red","Green","Blue","Yellow"];
const [fColor, secColor,...othersColor] = colors;
console.log(fColor, secColor);
console.log(othersColor);
console.log(...othersColor);

// Object Destructuring 
const user = {
    id:1,
    profile:{
        name1:"John",
        email:"john@gmail.com"
    }
}

const {profile:{name1, email}} = user;
console.log(name, email);


const player = {
    name2:"Messi",
    team:"Inter Miami",
    goals:[10,20,30]
};

// Destructure
const {name2, team} = player;
console.log(name2, team);

// Spread goals copy
const goalsCopy = {...player, goals:[...player.goals]};
console.log(goalsCopy.goals);


