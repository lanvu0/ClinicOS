const themeToggler = document.querySelector(".theme-toggler");

// Change theme (dark/light mode)
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
})

// Set today's date
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

var options = { weekday: 'long', day: 'numeric', month: 'long' };
var day = now.getDate();
var formattedDate = `${now.toLocaleString('en-US', options).replace(day, day + getOrdinalSuffix(day))}`;

document.getElementById("date-value").innerHTML = formattedDate;