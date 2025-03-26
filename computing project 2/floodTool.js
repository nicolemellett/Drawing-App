// this file contains the floodTool which is used change the canvas background

function floodTool() {
  this.icon = "assets/flood.png";
  this.name = "flood";

  this.draw = function () {
     //set the position of the line to the current mouse position when the tool/mouse is clicked
    if (mouseIsPressed) {
      
      var currentColour = colourP.selectedColour;
  
      loadPixels();

      //for loop to fill screen with colour 
      for (var i = 0; i < pixels.length; i += 4) {
        pixels[i] = red(currentColour);   
        pixels[i + 1] = green(currentColour); 
        pixels[i + 2] = blue(currentColour); 
        pixels[i + 3] = alpha(currentColour); 
      }
      updatePixels();
    }
}
}
  
