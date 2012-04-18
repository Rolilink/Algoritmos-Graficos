function initializecanvas(context){
	context.fillStyle = "rgb(0,0,0)";  
	context.fillRect (0, 0, 400, 280);
	point1= new point(0,-140);
		point2= new point(0, 140);
		points = dda(point1,point2);
		Data=context.getImageData(0,0,width,height);
		i=0;
		color=[];
		color["r"]=0;
		color["g"]=255;
		color["b"]=0;
		color["a"]=1000;
		while(i<points.length){
			putPixel(Data,points[i].x,points[i].y,color);
			i++;	
		};
		point1= new point(-200,0);
		point2= new point(200,0);
		points2 = dda(point1,point2);
		context.putImageData(Data,0,0);
		Data=context.getImageData(0,0,width,height);
		i=0;
		while(i<points2.length){
			putPixel(Data,points2[i].x,points2[i].y,color);
			i++;	
		};
		context.putImageData(Data,0,0);
}

function validatedigits(control){
	regex=/^[-+]?\d+$/;
	return (regex.test(control.val()) && !control.val()=="")
}

function validateall(){
	x1= $("#x1");
	x2= $("#x2");
	y1= $("#y1");
	y2= $("#y2");
	if(validatedigits(x1) && validatedigits(x2) && validatedigits(y1) && validatedigits(y2)){
		$("#submitbutton").removeClass("disabled");
		$("#submitbutton").removeAttr("disabled","disabled");
	}else{
		$("#submitbutton").addClass("disabled");
		$("#submitbutton").attr("disabled","disabled");
	}
}

function validateallbresenham(){
	x1= $("#x1");
	x2= $("#x2");
	y1= $("#y1");
	y2= $("#y2");
	if(validatedigits(x1) && validatedigits(x2) && validatedigits(y1) && validatedigits(y2) /*&& (x2.val() - x1.val()) != 0*/){
		$("#submitbutton").removeClass("disabled");
		$("#submitbutton").removeAttr("disabled","disabled");
	}else{
		$("#submitbutton").addClass("disabled");
		$("#submitbutton").attr("disabled","disabled");
	}
}

function validateallmedio(){
	x1= $("#x1");
	y1= $("#y1");
	radio= $("#radio");
	if(validatedigits(x1) && validatedigits(y1) && validatedigits(radio) && radio.val()>0){
		$("#submitbutton").removeClass("disabled");
		$("#submitbutton").removeAttr("disabled","disabled");
	}else{
		$("#submitbutton").addClass("disabled");
		$("#submitbutton").attr("disabled","disabled");
	}
}
