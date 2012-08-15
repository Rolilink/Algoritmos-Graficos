function DrawManager(){
	var point1 = null
	var point2 = null
	var height = null
	var width = null
	var center = null
	var canvas = null
	var saveddata = null
	this.setpoint1 = function(rpoint){
		point1 = rpoint
	}
	this.setpoint2 = function (rpoint){
		point2 = rpoint
	}
	this.setcontext = function(rcanvas){
		canvas = rcanvas
		context = canvas.getContext("2d")
	}
	var calculatedifference = function (){
		var x1 = point1.x
		var x2 = point2.x
		var y1 = point1.y
		var y2 = point2.y

		if(x2>=x1){
			width=x2-x1
		}else{
			width=x1-x2
		}
		if(y2>=y1){
			height=y2-y1
		}else{
			height=y1-y2
		}
	}

	this.savecanvas = function(){
		saveddata=context.getImageData(0,0,parseInt(canvas.getAttribute("width")),parseInt(canvas.getAttribute("height")));
	}

	this.restorecanvas = function(){
		context.putImageData(saveddata,0,0)
	}


	this.draw = function(shape){
		if(shape=="linea"){
			var puntos = dda(point1,point2)
			draw(puntos,context)
		}
		if(shape=="circulo"){
			calculatedifference()
			if(height == width){
				var puntos = puntomedio(height , point1)
				draw(puntos,context)
			}else{
				var puntos = puntomedioe(width,height,point1)
				draw(puntos,context)
			}
		}
	}

}