import {changeBackgroundColor} from "./handlers/changeBackgroundColor.js"
import {dom} from "./DOM/dom.js"

alert('init.js loaded!');

// Get the button element
//export const button = document.getElementById('clr');

// Get the hex-color label element
export const hexColorLabel = document.getElementById('hexColorLabel');


// Attach click event listener to the button
//dom.button.addEventListener('click', changeBackgroundColor);
dom.btn.addEventListener('click',changeBackgroundColor);

/* // Function to generate a random color (data file)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
} 

// Function to change background color
function changeBackgroundColor() {
    const randomColor = getRandomColor();
    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
    // Set the text content of the hex-color label to the generated color code
    hexColorLabel.textContent = 'Hex-Color: ' + randomColor;
} */

