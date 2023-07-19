document.getElementById("submit").addEventListener("click", acceptTerms);

function acceptTerms() {
    if (document.getElementById("terms").checked) {
        document.getElementById("datenschutz").style.display = "none";
    }
};