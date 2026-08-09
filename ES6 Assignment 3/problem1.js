
let studentIntroduction = students => {
    if (students == null && typeof students !== "object") {
        return "Invalid";
    }
    if (!students.name || !students.age || !students.course) {
        return "Invalid";
    }
    const {name, age, course} = students;
    let message = `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
    return message;
}

let student = {name:"Rafi",age:18};
console.log(studentIntroduction(student));