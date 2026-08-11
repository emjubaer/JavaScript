// Task 8: applyBonusPoints(users, bonus) — Pass by Reference vs Value 
// Return a NEW array of users with points increased by bonus, 
// without mutating the original array or its objects.
// Input: users = [{ name: "Rafi", points: 20 }], bonus = 5 
// Output: [{ name: "Rafi", points: 25 }]
//  (original array's object must still have points: 20)

function applyBonusPoints(users, bonus=0) {
    let newArray = users.map(user => ({
        ...user, 
        points: user.points + bonus
    }));

    return newArray;
}

let bonus = 5;
let users = [{name: "Rafi", points: 20},
    { name: "Jubaer", points: 60},
    { name: "Rahim", points: 10}
]
console.log(applyBonusPoints(users));