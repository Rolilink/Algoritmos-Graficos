function MouseManager(){
	var clicked = false
	var mousepos=null
	var drawmanager = null
	var canvas = null
	var out = false
	var shape = "linea"
	this.setshape = function(rshape){
		shape = rshape
	}
	var getMousePos=function(evt){
    	var obj = this.canvas;
    	var top = 0;
    	var left = 0;
    	while (obj && obj.tagName != 'BODY') {
        	top += obj.offsetTop;
        	left += obj.offsetLeft;
        	obj = obj.offsetParent;
    	}
    	var mouseX = evt.clientX - left + window.pageXOffset - 222;
    	var mouseY = -1*(evt.clientY - top + window.pageYOffset -162);
    	console.log("x: " + mouseX + "y: " + mouseY)
    	return new point(mouseX,mouseY);
	}

	this.setcanvas = function(rcanvas){
		canvas = rcanvas;
	}

	this.setdrawmanager=function(){
		drawmanager = new DrawManager()
		drawmanager.setcontext(canvas) 
	}

	this.setlisteners = function(){
		if(onclick!=null){
			canvas.addEventListener("mousedown",onclick,false);
		}
		if(mousemove!=null){
			canvas.addEventListener("mousemove",mousemove,false);
		}
		if(outclick!=null){
			canvas.addEventListener("mouseup",outclick,false);
		}
	}
	var onclick = function(evt){
		clicked = true
		var point1 = getMousePos(evt)
		drawmanager.setpoint1(point1)
		drawmanager.savecanvas()
	}
	var mousemove = function(evt){
		if(clicked){
		drawmanager.restorecanvas()
		var point2 = getMousePos(evt)
		var out = drawmanager.setpoint2(point2)
		if(out){
			alert("Posicion fuera del canvas se cancelara el dibujo de la forma")
			clicked = false
			return
		}
		drawmanager.draw(shape)

		}
	}
	var outclick = function(evt){
		if(!out){
		 clicked=false
		 var point2 = getMousePos(evt)
		 drawmanager.setpoint2(point2)
		 drawmanager.draw(shape)
		}
	}
}