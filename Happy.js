function Happy(position) {
  this.position = position.copy();
  //this.x = x;
  //this.y = y;

  this.update = function() {
    if (frameCount % 5 === 0) {
      this.position.x +=2;
    } else if (frameCount % 5 == 1) {
      this.position.x -=2;
    } 
    this.display();
  }

  this.display = function() {
    stroke(219, 217, 120);
    strokeWeight(2);
    fill(245, 242, 134, 200);
    ellipse(this.position.x, this.position.y, 15, 15);
  }
}