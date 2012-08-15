function validatedigits(control){
	regex=/^[-+]?\d+$/;
	return (regex.test(control.val()) && !control.val()=="")
}

function validatedraw(){
	if(validatedigits($("#x")) && validatedigits($("#y")) && validatedigits($("#size")) && $("#size").val()>0){
		$("#drawbutton").removeClass("disabled");
		$("#drawbutton").removeAttr("disabled","disabled");
	}else{
		$("#drawbutton").addClass("disabled");
		$("#drawbutton").attr("disabled","disabled");
	}
}

function validaterotate(){
	if(validatedigits($("#angle"))){
		$("#rotatebutton").removeClass("disabled");
		$("#rotatebutton").removeAttr("disabled","disabled");
	}else{
		$("#rotatebutton").addClass("disabled");
		$("#rotatebutton").attr("disabled","disabled");
	}
}