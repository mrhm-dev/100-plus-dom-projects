// Get Element
let touchMe = document.getElementById("touch-me-div");
let playBTN = document.getElementById("play-btn");
let stopDIV = document.getElementById("stop-game-div");
let stopBTN = document.getElementById("stop-btn");
let gameInfo = document.getElementById("game-info");

// Visible TouchMe Img & Close BTN
function startGame() {
  touchMe.style.display = "block";
  stopDIV.style.display = "block";
}

// PlayBTN Click event
playBTN.addEventListener("click", function () {
  gameInfo.style.left = "-100%";
  setTimeout(function () {
    startGame();
  }, 600);
});

// Generate Random Position and assign them to touchMe img
function setRandomPosition() {
  let screenHeight = window.innerHeight - 240;
  let screenWidth = window.innerWidth - 240;
  let left = Math.floor(Math.random() * screenWidth) + "px";
  let top = Math.floor(Math.random() * screenHeight) + "px";
  touchMe.style.left = left;
  touchMe.style.top = top;
}

// On Mouse Hover Or Out, execute setTandomPosition function
["mouseover", "mouseout"].forEach((ev) => {
  touchMe.addEventListener(ev, function () {
    setRandomPosition();
  });
});

// Visible GameInfo
function stopGame() {
  gameInfo.style.top = "50%";
  gameInfo.style.left = "50%";
}

// Stop Game BTN Click event
stopBTN.addEventListener("click", function () {
  touchMe.style.display = "none";
  stopDIV.style.display = "none";
  setTimeout(function () {
    stopGame();
  }, 100);
});
