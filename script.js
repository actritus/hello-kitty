
const popup = document.getElementById("popup");
const congratulationsBox = document.getElementById("congrats");

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    const bmi = weight / (height * height);
    document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)}`;

    // Set the pointer position based on BMI value
    const pointer = document.getElementById("bmi-pointer");
    let position = "10%"; // Default to underweight position

    // Determine position based on BMI value
    if (bmi >= 18.5 && bmi < 24.9) {
        position = "40%"; // Normal range
    } else if (bmi >= 25 && bmi < 29.9) {
        position = "70%"; // Overweight range
    } else if (bmi >= 30) {
        position = "90%"; // Obese range
    }

    // Move the pointer to the calculated position
    requestAnimationFrame(() => {
        pointer.style.left = position; // Update pointer position
    });

    // Open the popup after calculating BMI
    PopupOpen();
}

    function PopupOpen() {
        popup.style.display = "flex"; // Show the popup
    }

    function PopupClose() {
        popup.style.display = "none"; // Hide the popup
    }

    function selectOption(option) {
        
        PopupClose()

        if (option == "Yes") {
            congratulationsBox.style.display = "flex";

        }
    }

    // Function to attach event listeners to the Yes and No buttons
    function attachPopupEventListeners() {
        function yesButtonClick() {
            selectOption("Yes");
        }

        function noButtonClick() {
            selectOption("No");
        }

        document.getElementById("yesButton").onclick = yesButtonClick;
        document.getElementById("noButton").onclick = noButtonClick;
    }

// Call the function to set up event listeners
attachPopupEventListeners();

        function cancelCongratulations() {
            congratulationsBox.style.display = "none";
        }

        // Function to start the exercise animation
    function startRunning() {
        const container = document.getElementById("running");
        
        // Remove and re-add the class to restart the animation each time
        container.classList.remove("play-animation");
        void container.offsetWidth; // Trigger reflow to restart the animation
        container.classList.add("play-animation");
    }

document.getElementById("calculate").onclick = calculateBMI;
document.getElementById("exercise").onclick = startRunning;
document.getElementById("returntomain").onclick = cancelCongratulations;