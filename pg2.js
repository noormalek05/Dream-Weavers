const workoutPlanBtn = document.getElementById('workoutPlanBtn');
const fitnessTrackerBtn = document.getElementById('fitnessTrackerBtn');
const workoutPlansSection = document.getElementById('workoutPlans');
const fitnessTrackerSection = document.getElementById('fitnessTracker');
const muscleButtons = document.querySelectorAll('.muscle-button');
const levelButtons = document.querySelectorAll('.level-button');
const workoutLevels = document.querySelector('.workout-levels');
const exerciseList = document.getElementById('exerciseList');
const exercisesUl = document.getElementById('exercises');
const exerciseVideoDiv = document.getElementById('exerciseVideo');

let selectedMuscle = '';
let selectedLevel = '';

// Show workout plans
workoutPlanBtn.addEventListener('click', () => {
  fitnessTrackerSection.classList.add('hidden');
  workoutPlansSection.classList.remove('hidden');
  workoutLevels.classList.add('hidden');
  exerciseList.classList.add('hidden');
  exercisesUl.innerHTML = '';
  exerciseVideoDiv.innerHTML = '';
});

// Show fitness tracker
fitnessTrackerBtn.addEventListener('click', () => {
  workoutPlansSection.classList.add('hidden');
  fitnessTrackerSection.classList.remove('hidden');
});

// Show workout levels after muscle selection
muscleButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    selectedMuscle = event.target.dataset.muscle;
    workoutLevels.classList.remove('hidden');
    exerciseList.classList.add('hidden');
  });
});

// Show exercises after selecting workout level
levelButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    selectedLevel = event.target.dataset.level;
    showExercises(selectedMuscle, selectedLevel);
  });
});

// Function to show exercises based on selected muscle group and level
function showExercises(muscle, level) {
  exerciseList.classList.remove('hidden');
  exercisesUl.innerHTML = '';
  exerciseVideoDiv.innerHTML = '';

  const exercises = getExercises(muscle, level);
  exercises.forEach(exercise => {
    const li = document.createElement('li');
    li.innerText = exercise.name;
    li.addEventListener('click', () => {
      showExerciseVideo(exercise.video);
    });
    exercisesUl.appendChild(li);
  });
}

// Function to display AI-generated exercise video
function showExerciseVideo(videoUrl) {
  exerciseVideoDiv.innerHTML = `<video controls>
                                  <source src="${videoUrl}" type="video/mp4">
                                  Your browser does not support the video tag.
                                </video>`;
}

// Sample exercise data for each muscle and level
function getExercises(muscle, level) {
  const exerciseData = {
    Abs: {
      Beginner: [
        { name: 'Crunches', video: 'path-to-ai-video/crunches.mp4' },
        { name: 'Leg Raises', video: 'path-to-ai-video/leg-raises.mp4' }
      ],
      Intermediate: [
        { name: 'Plank', video: 'path-to-ai-video/plank.mp4' },
        { name: 'Bicycle Crunches', video: 'path-to-ai-video/bicycle-crunches.mp4' }
      ],
      Advanced: [
        { name: 'Dragon Flag', video: 'path-to-ai-video/dragon-flag.mp4' },
        { name: 'Hanging Leg Raise', video: 'path-to-ai-video/hanging-leg-raise.mp4' }
      ]
    },
    Shoulders: {
      Beginner: [
        { name: 'Shoulder Press', video: 'path-to-ai-video/shoulder-press.mp4' },
        { name: 'Lateral Raises', video: 'path-to-ai-video/lateral-raises.mp4' }
      ],
      Intermediate: [
        { name: 'Arnold Press', video: 'path-to-ai-video/arnold-press.mp4' },
        { name: 'Front Raises', video: 'path-to-ai-video/front-raises.mp4' }
      ],
      Advanced: [
        { name: 'Handstand Push-ups', video: 'path-to-ai-video/handstand-pushups.mp4' },
        { name: 'Overhead Press', video: 'path-to-ai-video/overhead-press.mp4' }
      ]
    }
    // Add more muscle groups and exercises as needed
  };

  return exerciseData[muscle][level];
}
