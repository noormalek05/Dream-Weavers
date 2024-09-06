// Simple calorie data for food items (in kcal per gram)
const foodCalorieData = {
    apple: 0.52,
    banana: 0.89,
    bread: 2.5,
    chicken: 2.39,
    rice: 1.3,
    egg: 1.55,
    "peanut butter": 5.88,
    "potato chips": 5.42,
    avocado: 1.6,
};

// Track total calories
let totalCalories = 0;

document.getElementById("calorie-tracker-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input
    const foodItem = document.getElementById("food-item").value.toLowerCase();
    const quantity = parseFloat(document.getElementById("quantity").value);

    // Check if the food item exists in our data
    if (foodCalorieData[foodItem]) {
        // Calculate calories
        const calories = foodCalorieData[foodItem] * quantity;

        // Update total calories
        totalCalories += calories;

        // Display calories
        document.getElementById("total-calories").textContent = totalCalories.toFixed(2);
        document.getElementById("calories-display").classList.remove("hidden");
    } else {
        alert("Food item not found. Please try again with a different item.");
    }

    // Clear input fields
    document.getElementById("food-item").value = "";
    document.getElementById("quantity").value = "";
});
