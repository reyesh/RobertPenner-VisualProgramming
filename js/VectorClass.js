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

Math.cosD = function (angle){
  return Math.cos(angle * Math.PI / 180);
}

Math.sinD = function (angle){
  return Math.sin(angle * (Math.PI / 180));
}

Math.polarToCartesian = function (p){
	var x = p.r * Math.cosD (p.t);
	var y = p.r * Math.sinD (p.t);
	return { x:x, y:y };
}

Math.fixAngle = function (angle) {
	angle %= 360;
	return (angle < 0) ? angle + 360 : angle;
}

