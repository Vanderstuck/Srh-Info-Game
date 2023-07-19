document.getElementById("submit").addEventListener("click", acceptTerms);

document.getElementById("play").addEventListener("click", play);

function play() {
    if(screen.availHeight < screen.availWidth){
        window.location.href='./game.html';
    }
};

function acceptTerms() {
    if (document.getElementById("terms").checked) {
        document.getElementById("datenschutz").style.display = "none";
    }
};