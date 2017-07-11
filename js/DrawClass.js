function DrawClass (id, width, height){

	this.id = id;
	this.width =  width;
	this.height =  height;

	//this.pos = new Vector(100,100);

}

DrawClass.prototype.initCanvas = function(){
	var blankCanvas = '<canvas id="%data_id%" width="%data_w%" height="%data_h%">.</canvas>';
    formattedBlankCanvas = blankCanvas.replace("%data_id%",this.id);
    formattedBlankCanvas = formattedBlankCanvas.replace("%data_w%",this.width);
    formattedBlankCanvas = formattedBlankCanvas.replace("%data_h%",this.height);
    $("#main").append(formattedBlankCanvas);
}

DrawClass.prototype.getCContext = function(){
    var c = document.querySelector("#"+this.id);
    var ctx = c.getContext("2d");
    return ctx;
}   

DrawClass.prototype.getCanvas = function(){
    var canvas = document.getElementById(this.id);
    //var c = document.querySelector("#"+this.id);
    //var ctx = c.getContext("2d");
    return canvas;
}     

DrawClass.prototype.createTxt = function(text){
    
    var ctx = this.getCContext();
	ctx.font = "80px Arial";
	ctx.fillStyle = "black";
	this.pos = Math.polarToCartesian(this.p);
	ctx.fillText(text,this.pos.x,this.pos.y);
} 

DrawClass.prototype.createCircle = function(text){
    
    var ctx = this.getCContext();
	ctx.font = "80px Arial";
	ctx.fillStyle = "black";
	this.pos = Math.polarToCartesian(this.p);
	console.log("pos: " + this.pop.toString);
	ctx.fillText(text,this.pos.x,this.pos.y);
} 

DrawClass.prototype.rotateCircle = function(){

		    var ctx = this.getCContext();

    	this.p.t = this.p.t - .8;

  ctx.clearRect(0, 0, 800, 600);

    	var i = Math.polarToCartesian(this.p);
    	this.pos.x = i.x;
    	this.pos.y = i.y;
    		ctx.fillText(this.text,this.pos.x,this.pos.y);

   		this.pos.toString();

} 

function ShapeObj(canvas){

	this.pos = new Vector(300,300);
	this.text = "Mario";
    this.ctx = canvas.getCContext();
    this.canvas = document.getElementById("q");
	this.p = { r:50, t:45 };
	this.ctx.font = "80px Arial";
	this.r = .1;
	this.cr = 20;
	//this.pos = Math.polarToCartesian(this.p);
	//console.log("pos: " + this.pop.toString);
	this.ctx.fillText(this.text,this.pos.x,this.pos.y);	
}

ShapeObj.prototype.rotateCircle = function(num){

    this.p.t = this.p.t + num + .5;
    //console.log(this.p.t);
    //if(Math.fixAngle(this.p.t) > 350){
    	this.p.r += num/1000;
    	this.cr += num/10

    //}
  	//this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	var i = Math.polarToCartesian(this.p);
	//this.ctx.fillText(this.text,i.x+this.pos.x,i.y+this.pos.y);

    var circle = new Path2D();
    circle.moveTo(this.pos.x, this.pos.y);
    circle.arc(i.x+this.pos.x, i.y+this.pos.y, this.cr, 0, 2 * Math.PI);
    this.ctx.fillStyle = colors[getRandomArbitraryRound(0,colors.length)];
    //this.ctx.fillStyle = "black";
    this.ctx.fill(circle);

	//this.pos.toString();
}


var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

function getRandomArbitraryRound(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
