
let filterActiveUsers = users => {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }
    for (let user of users){
        if (!("isActive" in user)) return "Invalid";
    }
    let activeUser = users.filter(x => x.isActive == true)
    return activeUser;
}
const students = [
    { name: "John", isActive: true },
    { name: "Jane", isActive: false },
    { name: "Mike", isActive: true }
];

console.log(filterActiveUsers(students));