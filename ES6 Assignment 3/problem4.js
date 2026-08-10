
let bonusScore = scores => {
    if (!Array.isArray(scores) || scores.length === 0) return "Invalid";

    for (let score of scores) {
        if (typeof score !== "number") return "Invalid";
    }

    // let total1 = 0;
    // for (let sc of scores){
    //     total1 += (sc+10);
    // }  

    let updatedScore = scores.map(num => num + 10);
    let total = updatedScore.reduce((acc, current) => {
        return acc += current;
    }, 0);

    // let total = scores.reduce((acc, current)=>{
    //   return acc += (current+10);
    // }, 0);
    return total;
}   


console.log(bonusScore([10, 20]));
console.log(bonusScore([80, 65, 90, 75]));
console.log(bonusScore([]));
console.log(bonusScore(10, "3.2", 0));
console.log(bonusScore("Score"));
console.log(typeof []);
