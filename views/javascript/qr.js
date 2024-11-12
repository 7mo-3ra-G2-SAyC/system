const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://www.ejemplo.com",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});