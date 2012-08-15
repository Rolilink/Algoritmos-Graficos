function point(xr,yr){
	this.x=xr;
	this.y=yr;
}

function puntomedioe(rx,ry,point1){
	array=[];
	 px=0;
	 py=0;
	 p=0;
	 ry2 = Math.pow(ry,2);
	 rx2 = Math.pow(rx,2);
	/* región 1 */
	 x = 0;
	 y = ry;
	 	xneg=x*-1;
	    yneg=y*-1;
	    array.push(new point(x,y));
		array.push(new point(xneg,yneg));
		array.push(new point(x,yneg));
		array.push(new point(xneg,y));
	 p = ry2-(rx2*ry)+(0.25*rx2);
	 while ((ry2*x)<(rx2*y)) { /* se cicla hasta trazar la región 1 */
	   x = x + 1;
	   if (p < 0)
	     p = p +(2*ry2*x)+ry2;
	   else {
	     y = y - 1;
	     p = p+(2*ry2*x)-(2*rx2*y)+ry2;
	   }
	    xneg=x*-1;
	    yneg=y*-1;
	    array.push(new point(x,y));
		array.push(new point(xneg,yneg));
		array.push(new point(x,yneg));
		array.push(new point(xneg,y));
	 }
	/* región 2 */
	 p = (ry2)*Math.pow((x+0.5),2)+(rx2)*Math.pow((y-1),2)-(rx2*ry2);
	 while (y > 0) { /* se cicla hasta trazar la región 2 */
	   y = y - 1;
	   if (p > 0){
	     p = p-(2*rx2*y) +rx2;;
	    }
	   else {
	     x = x + 1;
	     p = p + (2*ry2*x)-(2*rx2*y)+rx2;
	   }
	    xneg=x*-1;
	    yneg=y*-1;
	    array.push(new point(x,y));
		array.push(new point(xneg,yneg));
		array.push(new point(x,yneg));
		array.push(new point(xneg,y));
	 }
	 for(i=0;i<array.length;i++){
		array[i].x += point1.x;
		array[i].y += point1.y;
	}
	return array;
}