// menuToggle.js
document.getElementById('menu-toggler').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var toggler = document.getElementById('menu-toggler');

    // Check if the click was outside the menu and the toggler
    if (!menu.contains(event.target) && !toggler.contains(event.target)) {
        menu.classList.remove('active'); // Close the menu
    }
});