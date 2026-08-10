// Return "Invalid"
// যদি Input Object না হয়
// অথবা name, age অথবা course property না থাকে

function studentIntroduction (students) {
    if (typeof students !== "object" || Array.isArray(students) || students === null) {
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
console.log(studentIntroduction("student"));
console.log(studentIntroduction({}));
console.log(studentIntroduction({name:"Rafi",age:18,course:"JavaScript"}));