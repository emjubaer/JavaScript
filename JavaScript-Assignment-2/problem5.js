/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */

// Problem 5 — Debugging Challenge: API Response Time Monitor
function averageResponseTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }

    for (const time of times) {
        if (typeof time !== "number") {
            return "Invalid"
        }
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        total += times[i];
    }

    return total / times.length;
}

console.log(averageResponseTime([]));
console.log(averageResponseTime("60"));
console.log(averageResponseTime([120, "200", 150]));
console.log(averageResponseTime([120, 200, 150, 130]));