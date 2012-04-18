function point(xr,yr){
	this.x=xr;
	this.y=yr;
}

function puntomedio(r,point1){
	x=0;
	p=1-r;
	y=r;
	array=[];
	truex=0;
	truey=0;
	do{
		xneg=(x)*(-1);
		yneg=(y)*(-1);
		//xy
		array.push(new point(x,y));
		array.push(new point(y,x));
		//--
		array.push(new point(xneg,yneg));
		array.push(new point(yneg,xneg));
		//+-
		array.push(new point(x,yneg));
		array.push(new point(yneg,x));
		//-+
		array.push(new point(xneg,y));
		array.push(new point(y,xneg));
		x++;
		if(p<0){
			p=p+(2*x)+1;
		}else{
			y--;
			p=p+(2*(x-y)) + 1;
		}
	}while(x<=y);
	for(i=0;i<array.length;i++){
		array[i].x += point1.x;
		array[i].y += point1.y;
	}
	return array;
}