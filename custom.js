
function validatedigits(control){
	regex=/^[-+]?\d+$/;
	return (regex.test(control.val()) && !control.val()=="")
}

function validateall(){
	x1= $("#x1");
	x2= $("#x2");
	y1= $("#y1");
	y2= $("#y2");
	if(validatedigits(x1) && validatedigits(x2) && validatedigits(y1) && validatedigits(y2)){
		$("#submitbutton").removeClass("disabled");
		$("#submitbutton").removeAttr("disabled","disabled");
	}else{
		$("#submitbutton").addClass("disabled");
		$("#submitbutton").attr("disabled","disabled");
	}
}

function validateallbresenham(){
	x1= $("#x1");
	x2= $("#x2");
	y1= $("#y1");
	y2= $("#y2");
	if(validatedigits(x1) && validatedigits(x2) && validatedigits(y1) && validatedigits(y2) /*&& (x2.val() - x1.val()) != 0*/){
		$("#submitbutton").removeClass("disabled");
		$("#submitbutton").removeAttr("disabled","disabled");
	}else{
		$("#submitbutton").addClass("disabled");
		$("#submitbutton").attr("disabled","disabled");
	}
}

function validateallmedio(){
	x1= $("#x1");
	y1= $("#y1");
	radio= $("#radio");
	if(validatedigits(x1) && validatedigits(y1) && validatedigits(radio) && radio.val()>0){
		$("#submitbutton").removeClass("disabled");
		$("#submitbutton").removeAttr("disabled","disabled");
	}else{
		$("#submitbutton").addClass("disabled");
		$("#submitbutton").attr("disabled","disabled");
	}
}

function validateallmedioe(){
	x1= $("#x1");
	y1= $("#y1");
	radiox= $("#radiox");
	radioy= $("#radioy");
	if(validatedigits(x1) && validatedigits(y1) && validatedigits(radiox) && validatedigits(radioy) && radiox.val()>0 && radioy.val()>0){
		$("#submitbutton").removeClass("disabled");
		$("#submitbutton").removeAttr("disabled","disabled");
	}else{
		$("#submitbutton").addClass("disabled");
		$("#submitbutton").attr("disabled","disabled");
	}
}

function validatetras(){
	x1= $("#x1");
	y1= $("#x1");
	if(validatedigits(x1) && validatedigits(y1)){
		$("#submitbutton").removeClass("disabled");
		$("#submitbutton").removeAttr("disabled","disabled");
	}else{
		$("#submitbutton").addClass("disabled");
		$("#submitbutton").attr("disabled","disabled");
	}
}
