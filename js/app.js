var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";

var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

var words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];

var mousePos = {
	x: 0,
  y: 0
};

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min);
}

function getRandomArbitraryRound(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
      
canvas.addEventListener('click', function(evt) {
  accelX = 15;

  mousePos = getMousePos(canvas, evt);
  var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
  //writeMessage(canvas, message);
  //console.log(mousePos.x, mousePos.y);
  //console.log(message);
}, false);

var pos = new Vector(50, 100);
var vel = new Vector(-20, .6);
var accel = new Vector(.2, .01);

var velX = 0;
var kFrictionAccel = .8;
var accelX = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "80px Arial";
  ctx.fillStyle = colors[7];
  //ctx.fillText(words[getRandomArbitraryRound(0,6)],pos.x,pos.y);
  //pos.plus(vel);
  //vel.reset (2, 3);   
  //vel.reset (mousePos.x/50, mousePos.y/50);  
  //accel.reset(getRandomArbitrary(-3,3),getRandomArbitrary(-3,3));


  velX += accelX;
  accelX = 0;
  if (velX > 0) {
    velX = Math.max (0, velX - kFrictionAccel);
  } else if (velX < 0) {
    velX = Math.min(0, velX + kFrictionAccel);
  }
  //this._x += velX;

  //vel.plus(accel);
  //pos.plus(vel);
  ctx.fillText("Reyes",(pos.x += velX),pos.y);

  //vel.reset ((-.5,.5), (-.5,.5));        
  ////vel.toString();
}

function animate() {
    requestAnimationFrame(animate);
    draw();
}

animate();
