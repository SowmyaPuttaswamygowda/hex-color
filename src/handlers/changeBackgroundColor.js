
// Function to change background color
import {getRandomColor} from "../utils/getRandomColor.js" 
import { dom } from "../DOM/dom.js";



export function changeBackgroundColor() {
    const randomColor = getRandomColor();
    // Set the background color of the body
    dom.body.style.backgroundColor = randomColor;

    // Set the text content of the hex-color label to the generated color code
    dom.hexclr.textContent = 'Hex-Color: ' + randomColor;
     
}