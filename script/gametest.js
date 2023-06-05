function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      //window.location.replace("ergebnis.html");
      timer = duration;
    }
  }, 1000);
}

function init() {
  var gameItems = document.getElementsByClassName("game-image");
  var overlay = document.getElementById("overlay");
  var closeOverlay = document.getElementById("closeOverlay");
  for (var i = 0; i < gameItems.length; i++) {
      gameItems[i].addEventListener("click", function () {
        addOverlay();
      });
  }
  closeOverlay.addEventListener("click", function () {
    removeOverlay();
  });
}

function addOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}

function removeOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

//window.onload = function () {
//  var fiveMinutes = 5 * 60,
//    display = document.querySelector("#timer");
//  startTimer(fiveMinutes, display);
//};

window.onload = init;


