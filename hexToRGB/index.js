document.addEventListener("DOMContentLoaded", function () {
    let hexInput = document.getElementById("hex");
    let rgbOutput = document.getElementById("rgb");

    hexInput.addEventListener("input", updateRGB);

    updateRGB();

    function updateRGB() {
        let hex = hexInput.value;

        hex = hex.padStart(6, '0').substring(0, 6);

        let red = parseInt(hex.substring(0, 2), 16);
        let green = parseInt(hex.substring(2, 4), 16);
        let blue = parseInt(hex.substring(4, 6), 16);

        rgbOutput.textContent = red + ", " + green + ", " + blue;
    }
});