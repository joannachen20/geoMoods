function Angry(position) {
  this.velocity = createVector(random(1, 2), random(1, 2));
  this.position = position.copy();

  this.update = function() {
    var r = random(1);
    if (r < 0.5) {
      this.velocity.y = (this.velocity.y + .5);
    }
    this.position.add(this.velocity);
    this.display();
  }

  this.display = function() {
    stroke(129, 13, 4);
    strokeWeight(2);
    fill(173, 13, 4, 200);
    rect(this.position.x, this.position.y, 15, 15);
  }
}