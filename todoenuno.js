	var canvas;
	var context;
	var width;
	var height;
	var data;
	var points=[];
	var mousemanager;

	function point(xr,yr){
	this.x=xr;
	this.y=yr;
	}

 
	$(document).ready(function(){
		canvas=document.getElementById("canvas");
		context=canvas.getContext("2d");
		width=parseInt(canvas.getAttribute("width"));
		height=parseInt(canvas.getAttribute("height"));
		initializecanvas(context);
		mousemanager = new MouseManager();
		mousemanager.setcanvas(canvas);
		mousemanager.setdrawmanager();
		mousemanager.setlisteners();
		$("#figura").change(function(){
			mousemanager.setshape($("#figura").val())
		});
	});

	