let attempts = 0;
let userPassword = "";
let realPassword = "abc";

function authenticateUser() {
    while (attempts < 3) {
        userPassword = prompt(`Please enter the password. You have ${3 - attempts} attempt${attempts===2 ? "" :"s"} remaining.`);
        if (checkPasswords(realPassword, userPassword)) {
            return true;
        } else {
            attempts++;
        }
    }
    return false;
}

function checkPasswords(real, input) {
    return real === input;
}

function tellSecrets(isLoggedIn) {
    if (isLoggedIn) {
        alert("Secret Stuff");
    } else {
        alert("Not telling!");
    }
}

let userAuthenticated = authenticateUser();
tellSecrets(userAuthenticated);