
const popup = document.getElementById("popup");
const congratulationsBox = document.getElementById("congrats");
const unhappyBox = document.getElementById("unhappy");
const exerciseOption = document.getElementById("exercise");
const exerciseCalculations = document.getElementById("exercise-calculations");
const cancelExercise = document.getElementById("button-return")
const cancelEating = document.getElementById("button-return1")
const eatOption = document.getElementById("eat-button")
const foodCalculations = document.getElementById("food-calculations")

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    const bmi = weight / (height * height);
    document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)}`;

    // Set the pointer position based on BMI value
    const pointer = document.getElementById("bmi-pointer");
    let position = "10%"; // Default to underweight position

    // Determine position based on BMI value
    if (bmi >= 18.5 && bmi < 24.99) {
        position = "40%"; // Normal range
    } else if (bmi >= 25 && bmi < 29.99) {
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

        } if (option == "No") {
            unhappyBox.style.display = "flex";
            exerciseOption.style.display = "flex";
            eatOption.style.display = "flex";

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
        function cancelUnhappy() {
            unhappyBox.style.display = "none";
        }

        // Function to start the exercise animation
        function startRunning() {
            const container = document.getElementById("running");
            container.style.display = "flex";
            
            // Reset the position of the animation (ensures it doesn't appear in a new spot)
            container.style.left = '0'; // Or adjust this based on where you want it to start
            
            container.classList.remove("pause-exercise"); // Remove the pause class
            container.classList.add("play-animation"); // Start animation
            
            // Show the exercise calculations
            exerciseCalculations.style.display = "flex";
            cancelExercise.style.display = "flex";
            
            // Hide the eating animation
            const eatingContainer = document.getElementById("eating");
            eatingContainer.style.display = "none"; // Hide the eating animation when exercise starts
        }
        function startEating() {
            const container = document.getElementById("eating");
            container.style.display = "flex";
            
            // Reset the position of the animation (ensures it doesn't appear in a new spot)
            container.style.left = '0'; // Or adjust based on the desired position
            
            container.classList.remove("pause-eating"); // Remove the pause class
            container.classList.add("play-animation"); // Start the animation
            
            // Show the food calculations
            foodCalculations.style.display = "flex";
            cancelEating.style.display = "flex";
            
            // Hide the exercise animation
            const exerciseContainer = document.getElementById("running");
            exerciseContainer.style.display = "none"; // Hide the exercise animation when eating starts
        }

function calculateCalories() {
    const met = parseFloat(document.getElementById("MET").value);
    const weight = parseFloat(document.getElementById("current-weight").value);
    const calories = met * 3.5 * weight/200;
    document.getElementById("calories-result").innerText = `Calories per minute: ${calories.toFixed(2)}`;

}

function calculateCalories1() {
    const carbs = parseFloat(document.getElementById("carbohydrates").value);
    const fats = parseFloat(document.getElementById("fats").value);
    const protein = parseFloat(document.getElementById("protein").value);
    const calories = carbs * 4 + fats * 9 + protein * 4;
    document.getElementById("calories-result").innerText = `Amount of Calories: ${calories.toFixed(2)}`;
}

function closeExercise() {
    const result = document.getElementById("calories-result");
    result.innerText = '';  // Reset the result
    exerciseCalculations.style.display = "none";
    const container = document.getElementById("running");
    container.classList.add("pause-exercise");
    container.style.display = "none";
}

function closeEating() {
    const result = document.getElementById("calories-result");
    result.innerText = '';  // Reset the result
    foodCalculations.style.display = "none";
    const container = document.getElementById("eating");
    container.classList.add("pause-eating");
    container.style.display = "none";
}

document.getElementById("calculate").onclick = calculateBMI;
document.getElementById("exercise").onclick = startRunning;
document.getElementById("eat-button").onclick = startEating;
document.getElementById("returntomain").onclick = cancelCongratulations;
document.getElementById("returntomain1").onclick = cancelUnhappy;
document.getElementById("calculateCalories").onclick = calculateCalories;
document.getElementById("calculateCalories1").onclick = calculateCalories1;
document.getElementById("button-return").onclick = closeExercise;
document.getElementById("button-return1").onclick = closeEating;