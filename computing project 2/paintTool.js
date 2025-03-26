// this file contains the paintTool which is used draw on the canvas

function paintTool() {

	this.icon = "assets/paint.png";
	this.name = "paint";
	this.strokeWeight = 1;
  
	var previousMouseX = -1;
	var previousMouseY = -1;
  
	this.draw = function() {
	  if (mouseIsPressed) {
		strokeWeight(this.strokeWeight);
		if (previousMouseX == -1) {
		  previousMouseX = mouseX;
		  previousMouseY = mouseY;
		} else {
		  line(previousMouseX, previousMouseY, mouseX, mouseY);
		  previousMouseX = mouseX;
		  previousMouseY = mouseY;
		}
	  } else {
		previousMouseX = -1;
		previousMouseY = -1;
	  }
	};
  
	// the changeStrokeWeight method for paint
	this.changeStrokeWeight = function(newWeight) {
	  this.strokeWeight = newWeight;
	}
  }