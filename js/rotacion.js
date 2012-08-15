var canvas;
	var context;
	var width;
	var height;
	var data;
	var points=[];
	var table;
	var object;
	$(document).ready(function(){
		validatedraw();
		table= $("#tablebody");
		drawbtn=$("#drawbutton");
		rotatebtn=$("#rotatebutton");
		xinp=$("#x");
		yinp=$("#y");
		angle=$("#angle");
		size=$("#size");
		canvas=document.getElementById("canvas");
		context=canvas.getContext("2d");
		width=parseInt(canvas.getAttribute("width"));
		height=parseInt(canvas.getAttribute("height"));
		initializecanvas(context);
		xinp.blur(function(){
			validatedraw();
		});
		xinp.keyup(function(){
			validatedraw();
		});
		yinp.blur(function(){
			validatedraw();
		});
		yinp.keyup(function(){
			validatedraw();
		});
		size.blur(function(){
			validatedraw();
		});
		size.keyup(function(){
			validatedraw();
		});
		angle.blur(function(){
			validaterotate();
		});
		angle.keyup(function(){
			validaterotate();
		});
		drawbtn.click(function(){
			initializecanvas(context);
			object = new square(parseInt(size.val()),new point(parseInt(xinp.val()),parseInt(yinp.val())));
			object.calculatelines();
			object.calculatecenter();
			object.draw(context);
			$("#dibujar").hide();
			$("#rotation").show();
			validaterotate();
			return false;
		});

		rotatebtn.click(function(){
			initializecanvas(context);
		//traslate in center	
			object.point1 = traslatepoint(object.point1,-object.center.x,-object.center.y);
			object.point2 = traslatepoint(object.point2,-object.center.x,-object.center.y);
			object.point3 = traslatepoint(object.point3,-object.center.x,-object.center.y);
			object.point4 = traslatepoint(object.point4,-object.center.x,-object.center.y);
		//rotate in center	
			object.point1 = rotatepoint(object.point1,parseInt(angle.val()));
			object.point2 = rotatepoint(object.point2,parseInt(angle.val()));
			object.point3 = rotatepoint(object.point3,parseInt(angle.val()));
			object.point4 = rotatepoint(object.point4,parseInt(angle.val()));
			object.point1 = traslatepoint(object.point1,object.center.x,object.center.y);
			object.point2 = traslatepoint(object.point2,object.center.x,object.center.y);
			object.point3 = traslatepoint(object.point3,object.center.x,object.center.y);
			object.point4 = traslatepoint(object.point4,object.center.x,object.center.y);
			object.calculatelines();	
			object.draw(context);
			$("#dibujar").show();
			$("#rotation").hide();
			validatedraw();
			return false;
		});
	});