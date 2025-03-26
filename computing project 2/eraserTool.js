// this file contains the eraserTool which is used to remove drawings on the canvas
function eraserTool(){
	//set an icon and a name for the object
	this.icon = "assets/eraser.png";
	this.name = "eraser";
    this.strokeWeight = 1; 

    this.draw = function(){
      
        if(mouseIsPressed){

            if (previousMouseX == -1){
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            else{
                stroke(255);
                strokeWeight(this.strokeWeight); 
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        else{
            previousMouseX = -1;
            previousMouseY = -1;
        }
        this.changeStrokeWeight = function (newWeight) {
            this.strokeWeight = newWeight;
         
        };

    }

}