// this file contains the rectangleTool which is used to draw rectangles on screen
function rectangleTool() {
  this.icon = "assets/rectangle.png";
  this.name = "rectangleTool";
  this.strokeWeight = 1;

  let current = null;

  this.draw = function () {
    if (mouseIsPressed) {
      if (current.x === -1 && current.y === -1) {
        current.x = mouseX;
        current.y = mouseY;
      } else {
        strokeWeight(this.strokeWeight);
        updatePixels();
        noFill();
        rect(current.x, current.y, mouseX - current.x, mouseY - current.y);
      }
    } else {
      if (current.x !== -1) {
        resetCurrentPosition();
        loadPixels();
      }
    }

    // the changeStrokeWeight method for the rectangleTool
    this.changeStrokeWeight = function (newWeight) {
      this.strokeWeight = newWeight;
    };
  };

  //reset position functio 
  let resetCurrentPosition = function () {
    current = {
      x: -1,
      y: -1,
    };
  };
  resetCurrentPosition();
}
