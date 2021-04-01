// Select The Start Game Button
document.querySelector(".control-buttons span").onclick = function () {
  // Prompt Window To Ask For Name
  let yourName = prompt("whats your Name?");
  // If Name Is Empty
  if (yourName == null || yourName == "") {
    // Set Name To Unknown
    document.querySelector(".name span").innerHTML = "Unknown";
    // Set Name To Unknown In  Control Statistics // Sheck Flip Block Function
    document.querySelector(".statistics-name span").innerHTML = "Unknown";

    // Name Is Not Empty
  } else {
    // Set Name To Your Name
    document.querySelector(".name span").innerHTML = yourName;
    // Set Name To Your Name In  Control Statistics // Sheck Flip Block Function
    document.querySelector(".statistics-name span").innerHTML = yourName;
  }
  // Remove Splash Screen
  document.querySelector(".control-buttons").remove();
  // Run function
  startTimer(300);
};

// Effect Duration
let duration = 1000;
// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");
// Create Array From Gams Blocks
let blocks = Array.from(blocksContainer.children);
// Create Range Of Keys
let orderRange = [...Array(blocks.length).keys()];
shuffle(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index) => {
  // Add css Order Property
  block.style.order = orderRange[index];
  // Add Click Event
  block.addEventListener("click", function () {
    // Trigger The Flip Block Function
    flipBlock(block);
    // Trigger The sheck Flip Block Function
    sheckFlipBlock(block);
  });
});

// Flip Block Function
function flipBlock(selectedBlock) {
  // Add Class is-flipped
  selectedBlock.classList.add("is-flipped");
  // Collect All Flipped Cards
  let allFlippedBlocks = blocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("is-flipped")
  );
  // If Theres Tow Selected Blocks
  if (allFlippedBlocks.length === 2) {
    // Stop Clicking Function
    stopClicking();
    // Check Matched Block Function
    CheckMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  }
}

// sheck Flip Block Function
function sheckFlipBlock(sheck) {
  // Contains Class has-match
  sheck.classList.contains("has-match");
  //  sheck Collect All Flipped Cards
  let sheckAllFlippedBlocks = blocks.filter((sheckFlippedBlock) =>
    sheckFlippedBlock.classList.contains("has-match")
  );
  // If Theres Tow Selected Blocks
  if (sheckAllFlippedBlocks.length === blocks.length) {
    document.querySelector(".control-statistics").style.display = "block";

    setTimeout(() => {
      window.location.reload();
    }, 6000);
  }
}

// Stop Clicking Function
function stopClicking() {
  // Add class No Clicking After The Duration
  blocksContainer.classList.add("on-clicking");

  setTimeout(() => {
    // Remove class No Clicking After The Duration
    blocksContainer.classList.remove("on-clicking");
  }, duration);
}

// Check Matched Block
function CheckMatchedBlocks(firstBlock, secondBlock) {
  let triesElement = document.querySelector(".tries span");
  // Creat Tries Element Statistics In Control Statistics // sheck Flip Block Function
  let triesElementStatistics = document.querySelector(".statistics-tries span");
  if (firstBlock.dataset.icon === secondBlock.dataset.icon) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");
    //
    document.getElementById("success").play();
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    // Set Tries Element Statistics In Control Statistics // sheck Flip Block Function
    triesElementStatistics.innerHTML = parseInt(triesElement.innerHTML);
    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);
    //
    document.getElementById("fail").play();
  }
}

//  Shuffle Function
function shuffle(array) {
  // Settings Vars
  let current = array.length,
    temp,
    random;
  with (current > 0) {
    // Get Random Number
    random = Math.floor(Math.random() * current);
    // Decrease Length By One
    current--;
    // [1] Save Current Element in Stash
    temp = array[current];
    // [2] Current Element = Random Element
    array[current] = array[random];
    // [3] Random Element = Get Element From Stash
    array[random] = temp;
  }
  return array;
}
// myTimer Create
let myTimer = document.querySelector(".timer span");
let myTimerStatistics = document.querySelector(".statistics-timer span");
function setInt(set) {
  setInterval(set, 1000);
}

// Start Timer Function
function startTimer(sec) {
  let min = Math.floor(sec / 60),
    remSeconds = sec % 60;
  setInt(downTime);
  function downTime() {
    if (sec > 0) {
      sec -= 1;
      min = Math.floor(sec / 60);
      remSeconds = sec % 60;
      if (remSeconds < 10) {
        min < 10
          ? ((myTimer.textContent = `0${min}: 0${remSeconds}`),
            (myTimerStatistics.textContent = `0${min}: 0${remSeconds}`))
          : ((myTimer.textContent = `0${min}: 0${remSeconds}`),
            (myTimerStatistics.textContent = `0${min}: 0${remSeconds}`));
      } else {
        min < 10
          ? ((myTimer.textContent = `0${min}: ${remSeconds}`),
            (myTimerStatistics.textContent = `0${min}: ${remSeconds}`))
          : ((myTimer.textContent = `${min}: ${remSeconds}`),
            (myTimerStatistics.textContent = `${min}: ${remSeconds}`));
      }
    } else {
      document.querySelector(".control-buttons-over").style.display = "block";
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  }
}
