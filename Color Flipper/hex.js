const hex = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "K",
  "R",
];

const colorElm = document.querySelector(".color");
const btnElm = document.getElementById("btn");

// Add Default Local Storage Class on Body
document.body.style.backgroundColor =
  localStorage.getItem("getColors") || "#f1f5f8";
colorElm.textContent = localStorage.getItem("getColors") || "#F1f5f8";
colorElm.style.color = localStorage.getItem("getColors");

btnElm.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  colorElm.textContent = hexColor;
  colorElm.style.color = hexColor;
  document.body.style.backgroundColor = hexColor;
  // Add Data To Local Storage
  localStorage.setItem("getColors", hexColor);
});

const getRandomNumber = () => Math.floor(Math.random() * hex.length);
