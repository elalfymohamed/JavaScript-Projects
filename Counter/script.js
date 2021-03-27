// set initial value to zero
let count = 0;
// select value and buttons
const spanElm = document.getElementById("value");
const btnElm = document.querySelectorAll(".bnt");

btnElm.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("btn-increase")) {
      count++;
    } else if (styles.contains("btn-decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      spanElm.style.color = "green";
    }
    if (count === 0) {
      spanElm.style.color = "#222";
    }
    if (count < 0) {
      spanElm.style.color = "red";
    }
    spanElm.textContent = count;
  });
});
