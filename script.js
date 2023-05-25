
// Check if dark mode preference is already set
// var isDarkMode = localStorage.getItem('darkMode');
// if (isDarkMode === 'true') {
//     document.body.classList.add('dark-mode');
// }

// // Function to toggle dark mode
// function toggleDarkMode() {
//     var body = document.body;
//     body.classList.toggle('dark-mode');

//     // Store the dark mode preference
//     var isDarkMode = body.classList.contains('dark-mode');
//     localStorage.setItem('darkMode', isDarkMode);
// }

// // Add event listener to the dark mode toggle button
// var darkModeToggle = document.getElementById('dark-mode-toggle');
// darkModeToggle.addEventListener('click', toggleDarkMode);

// var isDarkMode = localStorage.getItem('darkMode');
//   var darkModeToggle = document.getElementById('dark-mode-toggle');

//   if (isDarkMode === 'true') {
//     document.body.classList.add('dark-mode');
//     darkModeToggle.checked = true;
//     darkModeToggle.textContent = 'Light Mode';
//   }

//   // Function to toggle dark mode
//   function toggleDarkMode() {
//     var body = document.body;
//     body.classList.toggle('dark-mode');

//     // Update checkbox state and text based on dark mode
//     var isDarkMode = body.classList.contains('dark-mode');
//     darkModeToggle.checked = isDarkMode;
//     darkModeToggle.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';

//     // Store the dark mode preference
//     localStorage.setItem('darkMode', isDarkMode);
//   }

var isDarkMode = localStorage.getItem('darkMode');
var darkModeToggle = document.getElementById('dark-mode-toggle');
var darkModeLabel = document.getElementById('dark-mode-label');

if (isDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
    darkModeLabel.textContent = 'Light Mode';
}

  // Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    // Update checkbox state and text based on dark mode
    var isDarkMode = body.classList.contains('dark-mode');
    darkModeToggle.checked = isDarkMode;
    darkModeLabel.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

    // Store the dark mode preference
    localStorage.setItem('darkMode', isDarkMode);
}