document.getElementById('dietForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const condition = document.getElementById('condition').value;
    const goal = document.getElementById('goal').value;

    // Fetch the diet plan from the backend
    fetch('http://localhost:3000/generate-diet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ condition, goal }),
    })
    .then(response => response.json())
    .then(data => {
        const dietPlan = data.dietPlan;
        const outputDiv = document.getElementById('dietPlanOutput');
        outputDiv.innerHTML = `<h2>Generated Diet Plan</h2><p>${dietPlan}</p>`;
        outputDiv.style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});
