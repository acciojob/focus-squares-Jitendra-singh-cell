//your JS code here. If required.
// Select all the squares using their class
const squares = document.querySelectorAll('.square');

// Function to change colors
function changeColors(activeSquare) {
    squares.forEach(square => {
        // If the current square is not the active one, change its color
        if (square !== activeSquare) {
            square.style.backgroundColor = '#6F4E37'; // Coffee color
        }
    });
}

// Function to reset colors back to lavender
function resetColors() {
    squares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA'; // Lavender color
    });
}

// Add mouseover and mouseout events to each square
squares.forEach(square => {
    square.addEventListener('mouseover', () => changeColors(square));
    square.addEventListener('mouseout', resetColors);
});
