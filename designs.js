/**
 * @author Justin Charo <justinrcharo@gmail.com>
 */

let height;
let width;
let color;


/**
 * @summary called on pixel click event,
 * changes cell background color to selected color 
 * @param {clickEvent} event 
 */
function clickPixel(event) {
    let cell = event.target
    cell.style.backgroundColor = color;
}


/**
 * @summary on color change set color varible 
 * @param {hexColor} event 
 */
function colorChanged(c) {
    color = c;
}


/**
 * @summary adds listener to each td element in the pixal canvas 
 */
function addCellListeners() {
    const cells = document.querySelectorAll("#pixelCanvas td")
    cells.forEach((cell) => cell.addEventListener("click", clickPixel));

}
/**
 * @summary clear out table elements, set height, set width, and make grid
 * @param {submitEvent} event 
 */
function populateCells(event) {
    // prevent default action from occuring 
    event.preventDefault();
    let table = document.getElementById("pixelCanvas");
    table.innerHTML = '';
    height = document.getElementById('inputHeight').value
    width = document.getElementById('inputWidth').value
    
    makeGrid();
}
/**
 * @summary populates cells with appropriate width, height and 
 * adds listeners on all populated cells  
 */
function makeGrid() {
    let table = document.getElementById("pixelCanvas");
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            row.insertCell(j);
        }
    }
    addCellListeners()
}
// set size picker elements listener
document.getElementById('sizePicker').addEventListener('submit', populateCells);