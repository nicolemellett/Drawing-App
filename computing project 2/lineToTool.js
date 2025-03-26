// this file contains the LineToTool function which is used to draw a line from one point to another on the canvas.

function LineToTool(){
	//set an icon and a name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	
	//set the position of the line to the current mouse position when the tool/mouse is clicked
	this.draw = function(){
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//loads the current value of each pixel on the canvas into the pixels array.
				loadPixels();
			}
			else{
				//updates the canvas with the RGBA values in the pixels array.
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
