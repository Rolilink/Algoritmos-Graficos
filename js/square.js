function square(rsize,rpoint1){
	this.size=rsize;
	this.point1=rpoint1
	this.point2= new point(rpoint1.x + this.size , rpoint1.y);
	this.point3= new point(rpoint1.x , rpoint1.y + this.size);
	this.point4= new point(rpoint1.x + this.size , rpoint1.y + this.size);
	this.line1=[];
	this.line2=[];
	this.line3=[];
	this.line4=[];
	this.calculatecenter = function(){
		this.center= new point((this.point1.x + this.size/2),(this.point1.y + (this.size/2)));
		
	}

	this.recalculatefromcenter = function (){
		this.point1= new point(this.center.x - (this.size/2),this.center.y - (this.size/2));
		this.point2= new point(this.point1.x + this.size , this.point1.y);
		this.point3= new point(this.point1.x , this.point1.y + this.size);
		this.point4= new point(this.point1.x + this.size , this.point1.y + this.size);	

	}

	this.calculatelines = function(){
		console.log("Entro en el Calculatelines");
		console.log(this.point1);
		console.log(this.point2);
		console.log(this.point3);
		console.log(this.point4);	
		this.line1=dda(this.point1,this.point2);
		console.log("Paso Linea 1");
		console.log(this.point1);
		console.log(this.point2);
		console.log(this.point3);
		console.log(this.point4);
		this.line2=dda(this.point1,this.point3);
		console.log("Paso Linea 2");
		console.log(this.point1);
		console.log(this.point2);
		console.log(this.point3);
		console.log(this.point4);
		this.line3=dda(this.point2,this.point4);
		console.log("Paso Linea 3");
		console.log(this.point1);
		console.log(this.point2);
		console.log(this.point3);
		console.log(this.point4);
		this.line4=dda(this.point3,this.point4);
		console.log("Paso Linea 4");
		console.log(this.point1);
		console.log(this.point2);
		console.log(this.point3);
		console.log(this.point4);

	}

	this.draw=function(context){
		draw(this.line1,context);
		draw(this.line2,context);
		draw(this.line3,context);
		draw(this.line4,context);
	}
}