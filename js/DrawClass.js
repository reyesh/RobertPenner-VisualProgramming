function DrawClass (id, width, height){

	this.id = id;
	this.width =  width;
	this.height =  height;

}

DrawClass.prototype.initCanvas = function(){
	var blankCanvas = '<canvas id="%data_id%" width="%data_w%" height="%data_h%">.</canvas>';
    formattedBlankCanvas = blankCanvas.replace("%data_id%",this.id);
    formattedBlankCanvas = formattedBlankCanvas.replace("%data_w%",this.width);
    formattedBlankCanvas = formattedBlankCanvas.replace("%data_h%",this.height);
    $("#main").append(formattedBlankCanvas);
}