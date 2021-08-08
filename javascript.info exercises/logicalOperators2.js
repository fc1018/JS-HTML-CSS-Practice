let user = prompt("Who's there?", );

if (user == "Admin") {
    let password = prompt("Password?", );

    if (password == "TheMaster") {
        alert("Welcome!");
    } else if (typeof password == "string") {
        alert("Wrong password");
    } else {
        alert("Cancelled");
    }
} else if (typeof user == "string") {
    alert("I don't know you");
} else {
    alert("Cancelled");
}