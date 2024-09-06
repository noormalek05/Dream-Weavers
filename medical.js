const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// AI logic to generate a diet plan based on condition and goal
const generateDietPlan = (condition, goal) => {
    let dietPlan = '';

    if (goal === 'weightLoss') {
        dietPlan = `For weight loss with ${condition}, a balanced diet rich in fiber, lean proteins, and healthy fats is crucial. Focus on whole grains, vegetables, and avoid refined sugars and processed foods.`;
    } else if (goal === 'weightGain') {
        dietPlan = `To gain weight with ${condition}, focus on calorie-dense, nutrient-rich foods like nuts, seeds, avocados, lean meats, and dairy. Make sure to eat frequent meals and include protein-rich snacks.`;
    } else if (goal === 'nutrientIntake') {
        dietPlan = `For complete nutrient intake with ${condition}, ensure a diverse diet that includes fruits, vegetables, lean proteins, whole grains, and healthy fats. You may consider supplements based on specific nutrient deficiencies.`;
    }

    return dietPlan;
};

// API route to generate the diet plan
app.post('/generate-diet', (req, res) => {
    const { condition, goal } = req.body;

    // Generate the diet plan based on condition and goal
    const dietPlan = generateDietPlan(condition, goal);
    res.json({ dietPlan });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
