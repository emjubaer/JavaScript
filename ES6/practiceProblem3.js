const users = [
  {
    id: 1,
    name: "John",
    age: 22,
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    name: "Alice",
    age: 25,
    skills: ["React", "Node", "MongoDB"]
  }
];

// প্রথম User-এর name Destructure করো।
const [{name}] = users;
console.log(name);

// প্রথম User-এর প্রথম Skill বের করো।
const [{skills:[fSkill]}] = users;
console.log(fSkill);

// দ্বিতীয় User-এর Skill Array Copy করো এবং "Express" Add করো।
const [, {skills}] = users;
const newSkill =  [...skills, "Express"];
console.log(skills);
console.log(newSkill);

// Arrow Function দিয়ে User-এর Age Return করো।
const [{age:fUserAge}, {age:sUserAge}] = users;
const getAge = user => user.age;
console.log(getAge(users[1]));
console.log(getAge(users[0]));

//Optional Chaining দিয়ে users[0].address?.city print koro
console.log(users[0].address?. city);

// দ্বিতীয় User-এর Object Copy করে country:"Bangladesh"
const [, secUser] = users;
const copySecUser = {...secUser, country: "Bangladesh"};
console.log(copySecUser);


console.log(Object.keys(users[0]));
console.log(Object.entries(users[0]));