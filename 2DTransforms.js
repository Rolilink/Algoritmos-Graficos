function traslate(points,dx,dy){
	array=points;
	for(i=0;i<array.length;i++){
		array[i].x += dx;
		array[i].y += dy;
	}
	return array
}

function traslatepoint(point,dx,dy){
	point.x += dx;
	point.y += dy;
	return point
}

function rotate(points,degree){
	array=points;
	radians = degree * (Math.PI/180);
	cos=Math.cos(radians);
	sen=Math.sin(radians);
	for(i=0;i<array.length;i++){
		array[i].x = Math.round(((points[i].x)*cos) - (points[i].y*sen));
		array[i].y = Math.round(((points[i].x)*sen) + (points[i].y*cos));
	}
	return array

}

function rotatepoint(rpoint,degree){
	pointr=new point(0,0);  
	radians = degree * (Math.PI/180);
	cos=Math.cos(radians);
	sen=Math.sin(radians);
	pointr.x = Math.round(((rpoint.x)*cos) - (rpoint.y*sen));
	pointr.y = Math.round(((rpoint.x)*sen) + (rpoint.y*cos));
	return pointr

}

function scalepoint(rpoint,fixpoint,sx,sy){
	pointr=new point(0,0); 
	pointr.x = Math.round((rpoint.x*sx)+((1-sx)*fixpoint.x));
	pointr.y = Math.round((rpoint.y*sy)+((1-sy)*fixpoint.y));
	return pointr

}

function reflexpoint(rpoint,value){
	pointr=new point(0,0); 
	if (value == "Origen") {
		pointr=rotatepoint(rpoint,180);
	};
	if (value == "Horizontal") {
		pointr.x = 0-rpoint.x;
		pointr.y = rpoint.y;
	};
	if (value == "Vertical") {
		pointr.x = rpoint.x;
		pointr.y = 0-rpoint.y;
	};
	return pointr

}

