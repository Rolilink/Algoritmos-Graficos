function point(xr,yr){
	this.x=xr;
	this.y=yr;
}

function dda(point1,point2){
	dx=point2.x - point1.x;
	dy=point2.y - point1.y;

	if (Math.abs(dx)>=Math.abs(dy)) {
		cambio = Math.abs(dx);
	}
	else{
		cambio = Math.abs(dy);
	}
	incrementoenx=dx/cambio;
	incrementoeny=dy/cambio;
	array=[];
	m=dy/dx
	x=point1.x;
	y=point1.y;
	for(i=0;i<=cambio;i++){
			array.push(new point(Math.round(x),Math.round(y)));
			x+=incrementoenx;
			y+=incrementoeny;
		}
	return array;
}