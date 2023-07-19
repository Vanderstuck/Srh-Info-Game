let inventory = new Array(30).fill(0);
var counter = 0;

var swiper = new Swiper(".gameSwiper", {
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: {
    nextEl: ".ui_arrow-right",
    prevEl: ".ui_arrow-left",
  },
});

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
  counter = 0;
  var counterUI = document.getElementById("counter");
  counterUI.innerHTML = counter + "/ 18";

  var fiveMinutes = 5 * 60,
  display = document.querySelector("#timer");
  startTimer(fiveMinutes, display);

  setInterval(function() {
    var itemImages = document.getElementsByClassName("st0");
    for (var i = 0; i < gameItems.length; i++) {
      itemImages[i].style.opacity = "1";
    }
    setTimeout(function() {
      for (var i = 0; i < gameItems.length; i++) {
        itemImages[i].style.opacity = "0";
      }      
    }, 1000)
  }, 5000);
}

function addOverlay(clickedId) {
  console.log(items[clickedId].name);
  var overlay = document.getElementById("overlay");
  var overlayText = document.getElementById("overlayText");
  var item = document.getElementById(clickedId);
  overlayImage.innerHTML = "<img src=" + items[clickedId].img + ">";
  overlayText.innerHTML = "<h1>" + items[clickedId].name + "</h1><p>" + items[clickedId].description + "</p>";
  overlay.style.display = "flex";
  inventory[clickedId] = 1;
  item.removeEventListener("click", handler);
  item.classList.add("found");
  let jsonInventory = JSON.stringify(inventory);
  localStorage.setItem('inventory', jsonInventory);
}

function removeOverlay() {
  counter = ++counter;
  var counterUI = document.getElementById("counter");
  counterUI.innerHTML = counter + "  / 18";
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


