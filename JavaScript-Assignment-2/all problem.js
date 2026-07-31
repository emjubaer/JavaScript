//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals == 'number' && typeof teamBGoals == 'number') {
        if (teamAGoals > teamBGoals) {
            return "Team A Won";
        }
        else if (teamBGoals > teamAGoals){
            return "Team B Won";
        }
        else return "Draw";
    }
    return "Invalid";
}


//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    if (!Array.isArray(weights)) {
        return "Invalid";
    }

    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
    }

    if (sum <= 400) {
        return true;
    }
    else return false;
}



//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    let freeToken = 500;
    if (tokensUsed > freeToken) {
        let cost = tokensUsed - freeToken;
        let totalCost = Math.floor((cost / 100)) * 5;
        return totalCost;
    }
    else return 0;
}


//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let topRestaurant = restaurants[0];
    for (let i = 1; i < restaurants.length; i++) {
        if (topRestaurant.rating <= restaurants[i].rating) {
            topRestaurant = restaurants[i];
        }
    }
    return topRestaurant.name.toUpperCase();
}


//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }

    for (const time of times ){
        if (typeof time !== "number"){
            return "Invalid"
        }
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        total += times[i];
    }

    return total / times.length;
}

