class Traveller {
  constructor(x, y) {
    console.log("Hey Wassup!!!");
    
    this.step = 6;
    this.x = x;
    this.y = y;
    this.color = random(["red","rgb(232,75,102)","pink","rgb(160,92,160)","magenta","purple"]);
    
    
    strokeWeight(6);
    this.walk(10);
  }
  
  walk() {
    stroke(this.color);
    let variationX = random([-1, 1]);
    let variationY = random([-1, 1]);
        
    this.x += this.step * variationX;
    this.y += this.step * variationY;
    
    point(this.x, this.y);
  }  
  
}