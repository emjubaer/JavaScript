const student = {
  name: "John",
  age: 20,
  course: "JavaScript",
  marks: [80, 90, 85]
};

// task-1 object destructuring show name and course
const { name, course } = student;
console.log(name);
console.log(course);

//task-2 Add new marks and show

// alternative way
// const {marks} = student;
// const newMarks = [...marks, 95];
const newMarks = [...student.marks, 95];
console.log(newMarks);


// task-3 Create an arrow function called averageMarks
//  that returns the average of an array of numbers.

const averageMarks = (marks) => {
    let total = 0;
    for (let mark of marks){
        total += mark;
    }

    let average = total / marks.length;
    return average;
}
const avg = averageMarks(newMarks);
console.log(avg);

// Task-4 Use a template literal to print:
// John is studying JavaScript and scored an average of 87.5

console.log(`${name} is studying ${course} and scored an average of ${avg}`);



// Task-5 Use Object.entries() to print every property of the student object.

const entries = Object.entries(student);

console.log(entries);

for (let [key, value] of entries ){
    console.log(key, ":", value);
}