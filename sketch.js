function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800, WEBGL)
}

function draw() {
  // put drawing code here
  background(0)
  //rotateX(frameCount * 0.01)
  //rotateY(frameCount * 0.01)
  //rotateZ(frameCount * 0.01)
  camera(mouseX, mouseY, (height/2) / tan(PI/6), width/2, height/2, 0, 0, 1, 0)
  translate(width/2, height/2, -100)
  //stroke(255)
  //noFill()
  box(150)
}
