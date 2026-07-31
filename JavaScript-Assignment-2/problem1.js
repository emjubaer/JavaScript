// Problem 1 — Match Winner
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

console.log(matchWinner(10, 20));
console.log(matchWinner(2, 1));
console.log(matchWinner(2, 2));
