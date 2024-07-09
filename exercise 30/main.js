var username = ["Ali", "Mehak", "Admin", "Ariba", "Aliyan"];
username.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging in again"));
    }
});
