export function ValidateName(name) {
const regex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;

    if (name === "") {
        showError("le champ est vide")
    }
    else if (!regex.test(name)) {
        showError("le nom est invalide")
    }
    else {
        return name;
    }
}

export function showError(message) {
const errMsg = document.querySelector("#err-msg");
   errMsg.textContent = message;
   errMsg.classList.remove("hidden");
   setTimeout(() => errMsg.classList.add("hidden"), 3000);
}