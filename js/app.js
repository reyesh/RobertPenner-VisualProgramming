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
};

Vector.prototype.reset = function (x, y) {
  this.constructor(x, y);
}

var pos = new Vector(0, 0);
var vel = new Vector(0, 0);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(100,100,8,8);

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
      
      canvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //writeMessage(canvas, message);
        //console.log(mousePos.x, mousePos.y);
        console.log(message);
      }, false);

animate();

function animate() {
    requestAnimationFrame(animate);
    draw();
}

function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "80px Arial";
    ctx.fillStyle = colors[getRandomArbitraryRound(0,colors.length)];
    ctx.fillText("Nintendo World",pos.x,pos.y);
    //ctx.fillText(words[getRandomArbitraryRound(0,6)],pos.x,pos.y);
    pos.plus(vel);
    //vel.reset (getRandomArbitrary(-1,1), getRandomArbitrary(-1,1));   
    vel.reset (mousePos.x/50, mousePos.y/50);  
        pos.plus(vel);

    //vel.reset ((-.5,.5), (-.5,.5));        
    ////vel.toString();
}

