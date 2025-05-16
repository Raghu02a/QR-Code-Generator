document.getElementById('generate').addEventListener('click', function() {
    var qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ""; 
    var text = document.getElementById('text').value.trim();
    if (text === "") {
        alert("Please enter some text or URL!");
        return;
    }
    new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});
