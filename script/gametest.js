let inventory = new Array(30).fill(0);

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
  var gameItems = document.getElementsByClassName("item");
  var closeOverlay = document.getElementById("closeOverlay");
  for (var i = 0; i < gameItems.length; i++) {
      gameItems[i].addEventListener("click", handler);
  }
  closeOverlay.addEventListener("click", function () {
    removeOverlay();
  });
}

function addOverlay(clickedId) {
  console.log(items[clickedId].name);
  var overlay = document.getElementById("overlay");
  var overlayText = document.getElementById("overlayText");
  var item = document.getElementById(clickedId);
  overlayImage.innerHTML = "<img src=" + items[clickedId].img + ">";
  overlayText.innerHTML = items[clickedId].name;
  overlay.style.display = "block";
  inventory[clickedId] = 1;
  item.removeEventListener("click", handler);
  let jsonInventory = JSON.stringify(inventory);
  localStorage.setItem('inventory', jsonInventory);
}

function removeOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function handler() {
  addOverlay(this.id);
}

//window.onload = function () {
//  var fiveMinutes = 5 * 60,
//    display = document.querySelector("#timer");
//  startTimer(fiveMinutes, display);
//};

window.onload = init;


