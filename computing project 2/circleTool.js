// this file contains the circleTool which is used to draw circles on the canvas

function circleTool() {
    this.icon = "assets/circle.png";
    this.name = "circle";
    this.strokeWeight = 1; 
    let current = null;
  
    this.draw = function() {
      if (mouseIsPressed) {
        strokeWeight(this.strokeWeight); 
        if (current === null) {
          current = {
            x: mouseX,
            y: mouseY
          };
        } else {
          updatePixels();
          noFill();
          ellipse(current.x, current.y, mouseX - current.x, mouseY - current.y);
        }
      } else {
        if (current !== null) {
          resetCurrentPosition();
          loadPixels();
        }
      }

      // the changeStrokeWeight method 
      this.changeStrokeWeight = function (newWeight) {
        this.strokeWeight = newWeight;
    }
  }
  
  // to reset current position on canvas
    let resetCurrentPosition = function() {
     current = null;
    }
  
    resetCurrentPosition();
  }
  