/* Find and fix every bug. Do not change the function name. */
// Input Array না হলে "Invalid" 
// Empty Array হলে "Invalid" 
// কোনো Object-এ name বা score না থাকলে "Invalid" 
// score Number না হলে "Invalid" 

function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) return "Invalid";

    for (let std of students) {
        if (typeof std !== "object" || std === null) return "Invalid";
        if (!("name" in std) ||
            !("score" in std) ||
            typeof std.score !== "number"
        ) return "Invalid";
    }

    let qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(currentStudent => {
        return currentStudent.name.toUpperCase();
    });
    return names.slice(0, 3);
}

console.log(generateLeaderboard([]));
console.log(generateLeaderboard([
    { name: "Rafi", score: 90 },
]));
console.log(generateLeaderboard([{ name: "Rafi", score: 90 },
{ name: "Sadia", score: 65 },
{ name: "Zehad", score: 88 },
{ name: "Foysal", score: 79 },
{ name: "Karim", score: 85 },
{ name: "Nafis", score: 75 }]));

console.log(generateLeaderboard([10]));
console.log(generateLeaderboard([{},{name:"Jubaer", score: 69}]));
console.log(generateLeaderboard(10));
console.log(generateLeaderboard("osthir"));
