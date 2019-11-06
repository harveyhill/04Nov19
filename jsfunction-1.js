var letter = document.getElementById("myInput").value;
var text;

// If the letter is "c"
if (letter === "c") {
  text = "Spot on! Good job!";

// If the letter is "b" or "d"
} else if (letter === "b" || letter === "d") {
  text = "Close, but not close enough.";

// If the letter is anything else
} else {
  text = "Waaay off..";
}