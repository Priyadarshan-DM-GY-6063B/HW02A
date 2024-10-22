function setup() {
  createCanvas(600, 600);
  background(235); // Light beige background to mimic the image
  
  noFill();
  stroke(0); // Black stroke for the outer border

  // Outer square border
  rect(100, 100, 400, 400);

  noStroke();
  
  // Function to draw a diamond
  function drawDiamond(x, y, w, h, angle, color) {
    fill(color);
    push();
    translate(x, y);
    rotate(radians(angle));
    beginShape();
    vertex(-w / 2, 0);
    vertex(0, -h / 2);
    vertex(w / 2, 0);
    vertex(0, h / 2);
    endShape(CLOSE);
    pop();
  }

  // Coordinates, size, and angles of diamonds (manually measured from your image)
  let diamonds = [
    { x: 180, y: 180, w: 40, h: 20, angle: -45, color: 'black' },
    { x: 250, y: 140, w: 40, h: 20, angle: 45, color: 'black' },
    { x: 320, y: 180, w: 40, h: 20, angle: -45, color: 'black' },
    { x: 390, y: 140, w: 40, h: 20, angle: 45, color: 'black' },
    
    { x: 180, y: 250, w: 40, h: 20, angle: 45, color: 'black' },
    { x: 320, y: 240, w: 40, h: 20, angle: 0, color: 'orange' }, // Center orange diamond
    { x: 390, y: 250, w: 40, h: 20, angle: -45, color: 'black' },
    
    { x: 140, y: 320, w: 40, h: 20, angle: 45, color: 'black' },
    { x: 250, y: 320, w: 40, h: 20, angle: -45, color: 'black' },
    { x: 320, y: 350, w: 40, h: 20, angle: 45, color: 'black' },
    { x: 400, y: 320, w: 40, h: 20, angle: -45, color: 'black' }
  ];

  // Loop through and draw all the diamonds
  for (let d of diamonds) {
    drawDiamond(d.x, d.y, d.w, d.h, d.angle, d.color);
  }
}
