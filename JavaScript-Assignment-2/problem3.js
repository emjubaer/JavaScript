// PromptPal, একটি AI writing assistant app, প্রতিদিন প্রতিটি ইউজারকে ৫০০ free token দেয়। এর বেশি ব্যবহার করলে অতিরিক্ত ব্যবহারের জন্য চার্জ করা হয় — এবং app টি চায় এমন একটি function যা স্বয়ংক্রিয়ভাবে বিল হিসাব করবে।

// Billing Rules
// প্রথম ৫০০ token ফ্রি। এরপর প্রতি অতিরিক্ত ১০০ token এর জন্য ৫ টাকা চার্জ হবে।

// Input
// একটি সংখ্যা, tokensUsed — সেদিন মোট কতগুলো token ব্যবহার হয়েছে।

// Output
// মোট খরচ, টাকায়, একটি সংখ্যা হিসেবে।

// Challenge
// tokensUsed সংখ্যা না হলে, অথবা negative হলে, "Invalid" রিটার্ন করবে।


// Problem 3 — AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    let freeToken = 500;
    if (tokensUsed > freeToken) {
        let cost = tokensUsed - freeToken;
        let totalCost = Math.floor((cost / 100)) * 5
        return totalCost;
    }
    else return 0;
}

console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));
console.log(calculateAiCost(599));
