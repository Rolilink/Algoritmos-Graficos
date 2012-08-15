function inbounds(x,y){
	return(x>=-200 && x<=200 && y<=140 && y>=-140);
}

function putPixel(imageData, x, y, color) {
	if(inbounds(x,y)){
    index = ((x + 200) + (140 - y) * imageData.width) * 4;
    imageData.data[index+0] = color["r"];
    imageData.data[index+1] = color["g"];
    imageData.data[index+2] = color["b"];
    imageData.data[index+3] = color["a"];
    }
}

function draw(points,context){
	Data=context.getImageData(0,0,width,height);
		i=0;
		color=[];
		color["r"]=255;
		color["g"]=255;
		color["b"]=255;
		color["a"]=1000;
		while(i<points.length){
			putPixel(Data,points[i].x,points[i].y,color);
			i++;	
		};
		context.putImageData(Data,0,0);
}

function initializecanvas(context){
	context.fillStyle = "rgb(0,0,0)";  
	context.fillRect (0, 0, 400, 280);
	point1= new point(0,-140);
		point2= new point(0, 140);
		line1 = dda(point1,point2);
		Data=context.getImageData(0,0,width,height);
		i=0;
		color=[];
		color["r"]=0;
		color["g"]=255;
		color["b"]=0;
		color["a"]=1000;
		while(i<line1.length){
			putPixel(Data,line1[i].x,line1[i].y,color);
			i++;	
		};
		point1= new point(-200,0);
		point2= new point(200,0);
		line2 = dda(point1,point2);
		context.putImageData(Data,0,0);
		Data=context.getImageData(0,0,width,height);
		i=0;
		while(i<line2.length){
			putPixel(Data,line2[i].x,line2[i].y,color);
			i++;	
		};
		context.putImageData(Data,0,0);
}

