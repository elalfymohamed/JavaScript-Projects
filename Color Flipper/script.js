const colors = [
  "red",
  "green",
  "rgba(133,122,200)",
  "#f15025",
  "#f1f502",
  "#e35665",
  "#f1f5f8",
  " #36dfeb",
  "#000030",
];

const colorElm = document.querySelector(".color");
const btnElm = document.getElementById("btn");

// Add Default Local Storage Class on Body
document.body.style.backgroundColor =
  localStorage.getItem("getColor") || "#f1f5f8";
colorElm.textContent = localStorage.getItem("getColor") || "#f1f5f8";
colorElm.style.color = localStorage.getItem("getColor");

btnElm.addEventListener("click", () => {
  // get random number between
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorElm.textContent = colors[randomNumber];
  colorElm.style.color = colors[randomNumber];
  // Add Data To Local Storage
  localStorage.setItem("getColor", colors[randomNumber]);
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);
