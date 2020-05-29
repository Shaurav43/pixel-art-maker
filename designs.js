// Select size input
// sumbit click event
document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
  });

function componentToHex(component) {
    // convert the component to integer then in hexadecimal
    var hex = parseInt(component).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
// eg: rgb will be in "rgb(0,1,2)"
// this function will strip it to ["0","1","2"]
// return "#000102" hexcode color
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
        // loop for cell
        for (let m = 0; m < width; m++){
            let cell = row.insertCell(m);
            //label cell
            cell.id = "cell[" + n + "," + m +"]";
        }
    }
    // table click event
    canvas.addEventListener('click',function changeColor(event){
        //get cell id
        const cellColor = document.getElementById(event.target.id);
        //get the color value form the colorPicker
        const colorPicker = document.getElementById('colorPicker').value;
        //compare color value
        if(rgbToHex(cellColor.style.backgroundColor) != colorPicker){
            cellColor.style.backgroundColor = colorPicker;
        } else{
            //remove cell color
            cellColor.style.backgroundColor  ="";
        }
});
}
