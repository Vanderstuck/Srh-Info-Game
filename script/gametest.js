const map = document.getElementById("map1");
const coord = map.getAttribute("coords");

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
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 5 * 60,
    display = document.querySelector("#timer");
  startTimer(fiveMinutes, display);
};