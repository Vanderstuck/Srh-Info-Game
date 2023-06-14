const unparsedInventory = localStorage.getItem("inventory");

const inventory = JSON.parse(unparsedInventory);

function init() {
  var gameItems = document.getElementsByClassName("item");
  var closeOverlay = document.getElementById("closeOverlay");
  for (var i = 0; i < gameItems.length; i++) {
    gameItems[i].addEventListener("click", handler);
    gameItems[i].innerHTML = items[i].name;
  }
  closeOverlay.addEventListener("click", function () {
    removeOverlay();
  });
  initInventory();
}

function addOverlay(clickedId) {
  console.log(items[clickedId].name);
  var overlay = document.getElementById("overlay");
  var overlayText = document.getElementById("overlayText");
  var item = document.getElementById(clickedId);
  overlayText.innerHTML = items[clickedId].name;
  overlay.style.display = "block";
}

function removeOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function handler() {
  addOverlay(this.id);
}

function initInventory() {
    for (var i = 0; i < inventory.length; i++) {
        console.log(inventory[i]);
        if (inventory[i]) {
            index = i.toString();
            var item = document.getElementById(index);
            item.classList.add('found');
        }
    }
}

window.onload = init;
