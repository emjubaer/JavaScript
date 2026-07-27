// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Returns: a string
 
function checkTemperature(temp) {
  if (temp > 30) {
    return "Hot";
  }

  if (temp < 15) {
    return "Cold";
  }

  return "Normal";
}
 
console.log(checkTemperature(35)); // Expected: "Hot"
console.log(checkTemperature(10)); // Expected: "Cold"
console.log(checkTemperature(20)); // Expected: "Normal"
