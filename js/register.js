const elForm = document.querySelector(".hero__form");
const elinput = document.querySelector(".hero__user-password");
const Token = "01192004";

elForm.addEventListener("submit",evt => {
    evt.preventDefault();
    const elinputValue = elinput.value;
    if (Token !=elinputValue) {
        alert("szga ruxsat yo'q");
        return;
    }
    window.location.pathname = "main.html"
})