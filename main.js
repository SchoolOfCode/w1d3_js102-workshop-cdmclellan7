let attempts = 0;

function authenticateUser() {
    while (attempts < 3) {
        let password = prompt("Please enter the password");
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