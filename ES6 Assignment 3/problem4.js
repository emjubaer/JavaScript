
let bonusScore = scores => {
    if (Array.isArray(scores)){
        for (let score of scores){
            if (typeof score !== "number") return "Invalid";
        }
        // return "sothik code";
        for (let sc of scores){
            
        }

    }
 return "Invalid";
   
}
console.log(bonusScore([10, 20]));
console.log(bonusScore(10, "3.2", 0));
console.log(bonusScore("Score"));