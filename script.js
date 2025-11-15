// 1. Select All Required Elements
const input = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const generateBtn = document.getElementById("btn");

// 2. Generate the QR Code
function generateQR() {
    const userInput = input.value.trim();

    if (userInput !== "") {
        // Update the image's src using the QR Code API
        qrImage.src = 
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
            + userInput;

        // Add class to show the QR image box
        imgBox.classList.add("show-img");
    } 
    else {
        // 3. Handle Empty Input
        input.classList.add("error");

        // Remove the shake effect after 1 second
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000);
    }
}

// Trigger function on button click
generateBtn.addEventListener("click", generateQR);
