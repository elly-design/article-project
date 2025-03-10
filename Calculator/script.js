document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");

    function appendValue(value) {
        if (display.value === "Error") {
            clearDisplay();
        }
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculateResult() {
        try {
            display.value = eval(display.value) || "";
        } catch (error) {
            display.value = "Error";
        }
    }

    window.appendValue = appendValue;
    window.clearDisplay = clearDisplay;
    window.calculateResult = calculateResult;
});
