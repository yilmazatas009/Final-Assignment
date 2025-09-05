// JavaScript Animation to move the box across the screen

const box = document.getElementById('box');
let position = 0;
let direction = 1; // 1 means moving to the right, -1 means moving to the left

function animateBox() {
    position += direction * 2;  // Change the position by 2px per frame
    box.style.left = position + 'px';  // Move the box horizontally
    
    // Check if the box reached the edge of the screen (window width - box width)
    if (position > window.innerWidth - 50 || position < 0) {
        direction *= -1;  // Reverse direction if it hits the edge
    }

    requestAnimationFrame(animateBox);  // Call the function again for the next frame
}

// Start the animation
animateBox();
