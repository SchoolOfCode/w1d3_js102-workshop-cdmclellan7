let attempts = 0;
let userPassword = "";
let realPassword = "abc";

function authenticateUser() {
    while (attempts < 3) {
        userPassword = prompt(`Please enter the password. You have ${3 - attempts} attempt${attempts===2 ? "" :"s"} remaining.`);
        if (userPassword === realPassword) {
            return true;
        } else {
            attempts++;
        }
    }
    return false;
}

function tellSecrets(isLoggedIn) {
    if (isLoggedIn) {
        alert("Secret Stuff");
    } else {
        alert("Not telling!");
    }
}

let user = authenticateUser();
tellSecrets(user);