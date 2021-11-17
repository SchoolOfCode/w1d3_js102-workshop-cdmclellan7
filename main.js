let attempts = 0;
let password = "";

function authenticateUser() {
    while (attempts < 3) {
        password = prompt(`Please enter the password. You have ${3 - attempts} attempt${attempts===2 ? "" :"s"} remaining.`);
        if (password === "abc") {
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