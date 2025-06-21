// Get references to the HTML elements
const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayNamePara = document.getElementById('display-name');

//Function to load the name from local storage and display it.
function loadName() {
    // Retrieve the name from local storage
    const savedName = localStorage.getItem('username');
    if (savedName) {
        // If a name is found, display it and set the input field value
        displayNamePara.textContent = `Hello, ${savedName}!`;
        usernameInput.value = savedName;
    } else {
        // If no name is found, display a default message
        displayNamePara.textContent = 'No name saved yet.';
        usernameInput.value = ''; // Clear input if no name
    }
}

// Event listener for the "Save Name" button.
// Saves the entered name to local storage and updates the display.
saveBtn.addEventListener('click', () => {
    const name = usernameInput.value.trim(); // Get input value and remove leading/trailing whitespace
    if (name) {
        // If the name is not empty, save it to local storage
        localStorage.setItem('username', name);
        loadName(); // Update the displayed name
    } else {
        // Provide feedback if the input is empty
        displayNamePara.textContent = 'Please enter a name to save.';
    }
});

//Event listener for the "Clear Name" button.
//Removes the saved name from local storage and updates the display.
clearBtn.addEventListener('click', () => {
    // Remove the 'username' item from local storage
    localStorage.removeItem('username');
    loadName(); // Update the displayed name
});

// Load the name when the page first loads
window.addEventListener('load', loadName);
