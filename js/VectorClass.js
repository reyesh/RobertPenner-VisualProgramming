function Vector (x, y){
  this.x = x;
  this.y = y;
}

Vector.prototype.toString = function(){
  var rx = Math.round(this.x * 1000) / 1000;
  var ry = Math.round(this.y * 1000) / 1000;
  console.log( "[" + rx + ", " + ry + "]" );
}

Vector.prototype.plus = function(v){
  this.x += v.x;
  this.y += v.y;
}

Vector.prototype.reset = function(x, y) {
  this.constructor(x, y);
}

Vector.prototype.getLength = function() {
  return Math.sqrt(this.x*this.x + this.y*this.y);
}

Vector.prototype.plusNew = function(v){
  return new this.constructor(this.x + v.x, this.y + v.y);
}