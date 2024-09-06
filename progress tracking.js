// Placeholder data for weight tracking
let weightLogs = [];
let exerciseLogs = [];

// Event listener for logging weight
document.getElementById('weight-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const date = new Date().toLocaleDateString();

    weightLogs.push({ date, weight });
    updateChart();
    
    document.getElementById('weight').value = ''; // Clear input
});

// Event listener for logging exercise
document.getElementById('exercise-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const exercise = document.getElementById('exercise').value;
    const reps = parseInt(document.getElementById('reps').value);
    const weightLifted = parseFloat(document.getElementById('weight-lifted').value);

    exerciseLogs.push({ exercise, reps, weightLifted });

    analyzePerformance(exercise, reps, weightLifted);
    
    document.getElementById('exercise').value = '';
    document.getElementById('reps').value = '';
    document.getElementById('weight-lifted').value = '';
});

// Analyze performance based on exercise logs
function analyzePerformance(exercise, reps, weightLifted) {
    let message = `You logged ${reps} reps of ${exercise} at ${weightLifted}kg.`;
    
    // Basic AI logic: Encouragement based on performance
    if (reps > 12) {
        message += " That's a high rep count! Consider increasing the weight.";
    } else if (weightLifted > 100) {
        message += " Impressive weight! You're lifting heavy!";
    } else {
        message += " Keep pushing to improve!";
    }
    
    alert(message);
}

// Progress Visualization (Chart.js)
let ctx = document.getElementById('progressChart').getContext('2d');
let progressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Date labels for x-axis
        datasets: [{
            label: 'Weight Progress (kg)',
            data: [],
            borderColor: '#8b5cf6',
            fill: false,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

function updateChart() {
    const dates = weightLogs.map(log => log.date);
    const weights = weightLogs.map(log => log.weight);

    progressChart

}