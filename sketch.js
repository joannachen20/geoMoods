var h, s, a;
var happiness = [];
var sadness = [];
var anger = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  h = 100;
  s = 100;
  a = 50;

  if (h > 0) {
    for (var i = 0; i <= h; i++) {
      var hh = new Happy(createVector(random(0, width), random(0, height)));
      happiness.push(hh);
    }
  }
  if (s > 0) {
    for (var d = 0; d <= s; d++) {
      var ss = new Sad(createVector(random(0, width), random(0, height)));
      sadness.push(ss);
    }
  }
  if (a > 0) {
    for (var w = 0; w <= a; w++) {
      var aa = new Angry(createVector(random(0, width), random(0, height)));
      anger.push(aa);
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < happiness.length; i++) {
    happiness[i].update();
  }
  for (var d = 0; d < sadness.length; d++) {
    sadness[d].update();
  }
  for (var w = 0; w < anger.length; w++) {
    anger[w].update();
  }
}