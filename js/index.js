const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "good morning traveler.";
} else if (time < 20) {
  greeting = "good day traveler.";
} else {
  greeting = "good evening traveler.";
}
document.getElementById("demo").innerHTML = greeting;