function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    // Check credentials
    if (username === "CC103" && password === "s24hp2") {
        loginMessage.textContent = "Welcome to BSIT 1B Grading System!";
        document.querySelector(".grades-input").style.display = "block"; // Show grade inputs
        loginMessage.style.color = "green";
    } else {
        loginMessage.textContent = "Notice: Wrong Password";
        loginMessage.style.color = "red";
    }
}

function calculateGWA() {
    const cc101 = parseFloat(document.getElementById("cc101").value);
    const cc102 = parseFloat(document.getElementById("cc102").value);
    const cc103 = parseFloat(document.getElementById("cc103").value);
    const nstp = parseFloat(document.getElementById("nstp").value);
    const ge101 = parseFloat(document.getElementById("ge101").value);
    const ge102 = parseFloat(document.getElementById("ge102").value);
    const ge103 = parseFloat(document.getElementById("ge103").value);
    const pe01 = parseFloat(document.getElementById("pe01").value);

    const GWA = (cc101 + cc102 + cc103 + nstp + ge101 + ge102 + ge103 + pe01) / 8;
    let resultText = "";

    if (GWA >= 100) {
        resultText = GWA + " is an invalid grade";
    } else if (GWA >= 98) {
        resultText = GWA + " with highest honors/president's lister";
    } else if (GWA >= 95) {
        resultText = GWA + " with high honors/dean's lister";
    } else if (GWA >= 90) {
        resultText = GWA + " with honors/dean's lister";
    } else if (GWA >= 75) {
        resultText = GWA + " you passed";
    } else if (GWA >= 70) {
        resultText = GWA + " conditional";
    } else {
        resultText = GWA + " you failed/dropped out";
    }

    document.getElementById("gwa-result").textContent = resultText;
    document.querySelector(".result").style.display = "block"; // Show result
}
