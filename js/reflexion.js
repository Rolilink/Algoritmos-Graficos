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
		reflexbtn=$("#reflexbutton");
		xinp=$("#x");
		yinp=$("#y");
		select=$("#reflexselect");
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

		drawbtn.click(function(){
			initializecanvas(context);
			object = new square(parseInt(size.val()),new point(parseInt(xinp.val()),parseInt(yinp.val())));
			object.calculatelines();
			object.calculatecenter();
			object.draw(context);
			$("#dibujar").hide();
			$("#reflection").show();
			return false;
		});

		reflexbtn.click(function(){
			object.point1 = reflexpoint(object.point1,select.val());
			object.point2 = reflexpoint(object.point2,select.val());
			object.point3 = reflexpoint(object.point3,select.val());
			object.point4 = reflexpoint(object.point4,select.val());
			object.calculatelines();
			object.calculatecenter();
			object.draw(context);
			$("#dibujar").show();
			$("#reflection").hide();
			return false;
		});
	});