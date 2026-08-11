
function countHashtags (caption) {
    if (typeof caption !== "string") return "Invalid";
    let splitCaption = caption.split(" ");
    // return splitCaption;
    let hashChecks = splitCaption.filter(item => item.startsWith("#"));
    // return hashChecks;
    let countHashWord = hashChecks.length;
    let longestTag = (hashChecks.reduce((big, current) => {
        return current.length > big.length ? current : big;
    }, "")).replace("#", "");
    return { hashtagCount: countHashWord, longestTag: longestTag };
}

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("#a #ai #ml data science"));
console.log(countHashtags({}));
console.log(countHashtags({name: "Jubaer"}));
console.log(countHashtags("Jubaer"));
console.log(countHashtags([]));
console.log(countHashtags([10,20,30]));
console.log(countHashtags(123));