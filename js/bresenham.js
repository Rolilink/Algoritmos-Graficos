function point(xr,yr){
	this.x=xr;
	this.y=yr;
}

function bresenham(point1,point2){
	var dx=point2.x-point1.x;
	var dy=point2.y-point1.y;
	var eacum=0;
		var x=point1.x;
		var y=point1.y;
		var points=[];
	if(dx!=0){
		if(point1.x>point2.x){
			points=bresenham(point2,point1);
			return points;
		}
		

		do{
			points.push(new point(x,y));
			x++;
			eacum=eacum + (2*dy);
			if (eacum>dx) {
				y++;
				eacum-=2*dx;
			}

		}while(x<point2.x);
		points.push(new point(x,y));
		return points;
	}else if(dy!=0){
		if(point1.y>point2.y){
			points=bresenham(point2,point1);
			return points;
		}
		

		do{
			points.push(new point(x,y));
			y++;
			eacum=eacum + (2*dx);
			if (eacum>dy) {
				x++;
				eacum-=2*dy;
			}

		}while(y<point2.y);
		points.push(new point(x,y));
		return points;
	}
}