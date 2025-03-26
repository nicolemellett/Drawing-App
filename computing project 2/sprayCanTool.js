// this file contains the SprayCanTool class which is used to draw on a canvas using a spray can effect.
function SprayCanTool() {
  //set an icon and a name for the object
  this.name = "sprayCan";
  this.icon = "assets/sprayCan.png";

  //set the number of points and the spread of the spray
  this.points = 13;
  this.spread = 10;
  this.strokeWeight = 1;

  //set the draw method for the spray can
  this.draw = function () {
    if (mouseIsPressed) {
      for (var i = 0; i < this.points; i++) {
        point(
          random(mouseX - this.spread, mouseX + this.spread),
          random(mouseY - this.spread, mouseY + this.spread)
        );
        strokeWeight(this.strokeWeight);
      }
    }
    
    // the changeStrokeWeight method 
    this.changeStrokeWeight = function (newStroke) {
      this.strokeWeight = newStroke;
    };
  };
}
