function putPixel(imageData, x, y, color) {
    index = ((x + 200) + (140 - y) * imageData.width) * 4;
    imageData.data[index+0] = color["r"];
    imageData.data[index+1] = color["g"];
    imageData.data[index+2] = color["b"];
    imageData.data[index+3] = color["a"];
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