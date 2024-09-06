document.getElementById('nutritionForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const foodName = document.getElementById('foodName').value;
    const amount = parseFloat(document.getElementById('amount').value);
  
    // Example nutritional data (per 100 grams)
    const nutritionalData = {
      Apple: { calories: 52, fiber: 2.4, protein: 0.3 },
      Banana: { calories: 89, fiber: 2.6, protein: 1.1 },
      Chicken: { calories: 165, fiber: 0, protein: 31 },
      Broccoli: { calories: 34, fiber: 2.6, protein: 2.8 }
      // Add more food items and their nutritional values here
    };
  
    const foodData = nutritionalData[foodName];
  
    if (foodData) {
      const calories = (foodData.calories * amount / 100).toFixed(2);
      const fiber = (foodData.fiber * amount / 100).toFixed(2);
      const protein = (foodData.protein * amount / 100).toFixed(2);
  
      document.getElementById('calories').textContent = `Calories: ${calories}`;
      document.getElementById('fiber').textContent = `Fiber: ${fiber}g`;
      document.getElementById('protein').textContent = `Protein: ${protein}g`;
      
      document.getElementById('results').classList.remove('hidden');
    } else {
      alert('Food item not found. Please enter a valid food item.');
      document.getElementById('results').classList.add('hidden');
    }
  });
  