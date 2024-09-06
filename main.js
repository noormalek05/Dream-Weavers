document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting automatically

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const feet = document.getElementById('feet').value;
    const inches = document.getElementById('inches').value;
    const weight = document.getElementById('weight').value;

    const heightInCm = convertHeightToCm(feet, inches);

    document.getElementById('form-output').textContent = 
        `Hello ${name}, you are a ${age}-year-old ${gender}, your height is ${heightInCm} cm, and you weigh ${weight} kg.`;
});

function convertHeightToCm(feet, inches) {
    const totalInches = (parseInt(feet) * 12) + parseInt(inches);
    const heightInCm = totalInches * 2.54;
    return heightInCm.toFixed(2);
}
