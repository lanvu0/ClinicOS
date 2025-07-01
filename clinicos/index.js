// ====== THEME PERSISTENCE LOGIC ======

const themeToggler = document.querySelector(".theme-toggler");

// Function to set the theme and save the preference
const setTheme = (theme) => {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme-variables');
        themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
        themeToggler.querySelector('span:nth-child(2)').classList.add('active');
    } else {
        document.body.classList.remove('dark-theme-variables');
        themeToggler.querySelector('span:nth-child(1)').classList.add('active');
        themeToggler.querySelector('span:nth-child(2)').classList.remove('active');
    }
    // Save the preference to localStorage
    localStorage.setItem('theme', theme);
};

// Event listener for the theme toggler
themeToggler.addEventListener("click", () => {
    // Check if the dark theme is currently active
    if (document.body.classList.contains("dark-theme-variables")) {
        // If it is, switch to light theme
        setTheme('light');
    } else {
        // Otherwise, switch to dark theme
        setTheme('dark');
    }
});

// Check for a saved theme preference when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light theme if nothing is saved
    setTheme(savedTheme);
});




// Today's date

// Get today's date
var now = new Date();

// Function to add ordinal suffix
function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) {
        return 'th';
    }

    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Format today's date into readable string
var options = { weekday: 'long', day: 'numeric', month: 'long' };
var day = now.getDate();
var formattedDate = `${now.toLocaleString('en-US', options).replace(day, day + getOrdinalSuffix(day))}`;

document.getElementById("date-value").innerHTML = formattedDate;


