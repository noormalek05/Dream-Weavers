// Function to display workout plans
function showPlan(level) {
    const workoutDisplay = document.getElementById('workout-display');
    if (level === 'beginner') {
        workoutDisplay.innerHTML = `
            <h3>Beginner Gym Workout Plan</h3>
            <ul>
                <li>Warm-up: 10 minutes light cardio</li>
                <li>Deadlifts: 3 sets of 10 reps</li>
                <li>Pull-ups: 3 sets of 8-10 reps</li>
                <li>Lat Pulldown: 3 sets of 12 reps</li>
                <li>Seated Row: 3 sets of 10 reps</li>
                <li>Back Extensions: 3 sets of 15 reps</li>
                <li>Cool-down: Stretching for 5-10 minutes</li>
            </ul>
        `;
    } else if (level === 'advanced') {
        workoutDisplay.innerHTML = `
            <h3>Advanced Gym Workout Plan</h3>
            <ul>
                <li>Warm-up: 10 minutes moderate cardio</li>
                <li>Deadlifts: 5 sets of 5 reps (heavy)</li>
                <li>Weighted Pull-ups: 4 sets of 6-8 reps</li>
                <li>Barbell Rows: 4 sets of 8-10 reps</li>
                <li>Single-arm Dumbbell Row: 4 sets of 8 reps per arm</li>
                <li>Face Pulls: 3 sets of 12 reps</li>
                <li>Back Extensions: 4 sets of 12-15 reps</li>
                <li>Cool-down: Foam rolling and stretching for 10 minutes</li>
            </ul>
        `;
    }
}
