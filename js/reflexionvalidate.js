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
