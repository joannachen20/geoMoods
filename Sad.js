function Sad(position) {
  this.velocity = createVector(random(1, 2), random(1, 2));
  this.position = position.copy();

  this.update = function() {
    var r = random(1);
    if (r < 0.5) {
      this.velocity.x = (this.velocity.x + .5);
    } else if (r > 0.5) {
      this.velocity.x - .5;
    } else if (r < 0.6) {
      this.velocity.y++;
    } else {
      this.velocity.y--;
    }
    this.position.add(this.velocity);
    this.display();
  }

  this.display = function() {
    stroke(94, 132, 200);
    strokeWeight(2);
    fill(103, 145, 194, 200);
    ellipse(this.position.x, this.position.y, 15, 15);
  }
}