const email = document.querySelector("#email");
const error = document.querySelector(".error");
const correct = document.querySelector(".correct");
const errorText = document.querySelector(".error-text");
const btn = document.querySelector(".submit");

let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



function check() {
    if (email.value.match(regExp)) {
        email.style.borderColor = "#27ae60";
        error.style.display = "none";
        correct.style.display = "block";
        btn.style.display = "block";
        errorText.style.display = "none";
    } else {
        email.style.borderColor = "#e74c3c";
        error.style.display = "block";
        correct.style.display = "none";
        errorText.style.display = "block";
        btn.style.display = "none";
    }
    if (email.value == "") {
        email.style.borderColor = "lightgrey";
        error.style.display = "none";
        correct.style.display = "none";
        btn.style.display = "none";
        errorText.style.display = "none";
    }
};

email.addEventListener("keyup", function () {
    check();
});