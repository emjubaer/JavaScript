
function getBatteryStatus(percentage: number): string {

    if (percentage < 0 || percentage > 100) return "Invalid"

    else if (percentage >= 0 && percentage <= 20) return "Low"
    else if (percentage > 20 && percentage <= 50) return "Medium"
    else if (percentage > 50 && percentage <= 90) return "High"

    else return "Full"

}
