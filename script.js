const input = document.getElementById("qrText");
    const imgBox = document.getElementById("imgBox");
    const qrImage = document.getElementById("qrImage");
    const loader = document.getElementById("loader");

    document.getElementById("pasteBtn").onclick = async () => {
        input.value = await navigator.clipboard.readText();
    };

    document.getElementById("copyBtn").onclick = () => {
        navigator.clipboard.writeText(input.value);
        alert("Copied!");
    };

    input.addEventListener("input", () => {
        imgBox.classList.remove("show-img");
    });

    function generateQR() {
        let value = input.value.trim();
        let size = document.getElementById("qrSize").value;
        let color = document.getElementById("qrColor").value.replace("#", "");

        if (value === "") {
            input.classList.add("error");
            setTimeout(() => input.classList.remove("error"), 800);
            return;
        }

        loader.style.display = "block";

        qrImage.src =
            `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${value}&color=${color}`;

        qrImage.onload = () => {
            loader.style.display = "none";
            imgBox.classList.add("show-img");
        };
    }

    document.getElementById("generateBtn").onclick = generateQR;

    document.getElementById("downloadBtn").onclick = () => {
        const link = document.createElement("a");
        link.href = qrImage.src;
        link.download = "qrcode.png";
        link.click();
    };

    document.getElementById("themeBtn").onclick = () => {
        document.body.classList.toggle("light");
    };