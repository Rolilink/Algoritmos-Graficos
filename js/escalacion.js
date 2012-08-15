var canvas;
	var context;
	var width;
	var height;
	var data;
	var points=[];
	var table;
	var object;
	$(document).ready(function(){
		table= $("#tablebody");
		drawbtn=$("#drawbutton");
		scalebtn=$("#scalebutton");
		xinp=$("#x");
		yinp=$("#y");
		scalesx=$("#scalesx");
		scalesy=$("#scalesy");
		size=$("#size");
		canvas=document.getElementById("canvas");
		context=canvas.getContext("2d");
		width=parseInt(canvas.getAttribute("width"));
		height=parseInt(canvas.getAttribute("height"));
		initializecanvas(context);
		drawbtn.click(function(){
			object = new square(parseInt(size.val()),new point(parseInt(xinp.val()),parseInt(yinp.val())));
			object.calculatelines();
			object.calculatecenter();
			object.draw(context);
			$("#dibujar").hide();
			$("#scalation").show();
			return false;
		});

		scalebtn.click(function(){
			initializecanvas(context);
			object.point1 = scalepoint(object.point1,object.center,parseInt(scalesx.val()),parseInt(scalesy.val()));
			object.point2 = scalepoint(object.point2,object.center,parseInt(scalesx.val()),parseInt(scalesy.val()));
			object.point3 = scalepoint(object.point3,object.center,parseInt(scalesx.val()),parseInt(scalesy.val()));
			object.point4 = scalepoint(object.point4,object.center,parseInt(scalesx.val()),parseInt(scalesy.val()));
			object.calculatelines();
			object.calculatecenter();
			object.draw(context);
			return false;
		});
	});