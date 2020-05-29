// Select size input
document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
  });

function componentToHex(c) {
    // convert the received string to integer then in hexadecimal
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
// take the rgb value in text format
function rgbToHex(rgb) {
    //check if the rgb value is not empty
    while(rgb != ""){
        // remove "rgbC"
        rgb = rgb.replace("rgb(","");
        //remove ")"
        rgb = rgb.replace(")","");
        //convert into array
        rgb = rgb.split(",");
        return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
    }
    return "";
}

function makeGrid(height, width) {

    // Your code goes here!
    const canvas = document.getElementById('pixelCanvas');
    // clears existing table if any
    canvas.innerHTML = '';
    // loop for rows
    for (let n = 0; n < height; n++){
        let row = canvas.insertRow(n);
        // loop for individual cells
        for (let m = 0; m < width; m++){
            let cell = row.insertCell(m);
            //label individual cell
            cell.id = "cell[" + n + "," + m +"]";

            // Add click event to the entire table
            cell.addEventListener('click',function changeColor(event){
                //gets the id of the clicked cell
                const cellColor = document.getElementById(event.target.id);
                //gets the color value form the colorPicker
                const colorPicker = document.getElementById('colorPicker').value;
                //check if cell color is not null
                if (cellColor.style.backgroundColor){
                    // comparision in hexadecimal value
                    if(rgbToHex(cellColor.style.backgroundColor) != colorPicker){
                        cellColor.style.backgroundColor = colorPicker;
                    } else{
                        cellColor.style.backgroundColor  ="";
                    }
                } else {
                    cellColor.style.backgroundColor = colorPicker;
                }
            });
        }
    }
}
