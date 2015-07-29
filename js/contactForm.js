function showDialog(){
	document.getElementById("join-beta-dialog").style.display="block";
}

function hideDialog(){
	document.getElementById("join-beta-dialog").style.display="none";
}

function validateContactForm(contactForm){
	var emptyField=false,
		validEmail=true; 
	
	if (contactForm.first_name.value==null || contactForm.first_name.value==''){
  		addFieldError(contactForm.first_name, "first_name_required");
  		emptyField=true;
	}
	else {
		if (document.getElementById("first_name_required").style.display=="block"){
			removeFieldError(contactForm.first_name, "first_name_required");
		}
	}
	
	if (contactForm.last_name.value==null || contactForm.last_name.value==''){
		addFieldError(contactForm.last_name, "last_name_required");
		emptyField=true;
	}
	else {
		if (document.getElementById("last_name_required").style.display=="block"){
			removeFieldError(contactForm.last_name, "last_name_required");
		}
	}
	
	if (contactForm.email.value==null || contactForm.email.value==''){
		addFieldError(contactForm.email, "email_required");
		emptyField=true;
	}
	else {
		if (document.getElementById("email_required").style.display=="block"){
			removeFieldError(contactForm.email, "email_required");
		}
		var emailValue=contactForm.email.value;
		var atpos=emailValue.indexOf("@");
		var dotpos=emailValue.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailValue.length){
			addFieldError(contactForm.email,"email_invalid");
			validEmail=false;
		}
		else if (document.getElementById("email_invalid").style.display=="block"){
			removeFieldError(contactForm.email,"email_invalid");
		}
			
	}
	
	if (contactForm.company.value==null || contactForm.company.value==''){
		addFieldError(contactForm.company, "company_required");
		emptyField=true;
	}
	else {
		if (document.getElementById("company_required").style.display=="block"){
			removeFieldError(contactForm.company, "company_required");
		}
	}
	
	if (contactForm.city.value==null || contactForm.city.value==''){
		addFieldError(contactForm.city, "city_required");
		emptyField=true;
	}
	else {
		if (document.getElementById("city_required").style.display=="block"){
			removeFieldError(contactForm.city, "city_required");
		}
	}
	
	if (contactForm.state.value==null || contactForm.state.value==''){
		addFieldError(contactForm.state, "state_required");
		emptyField=true;
	}
	else {
		if (document.getElementById("state_required").style.display=="block"){
			removeFieldError(contactForm.state, "state_required");
		}
	}
	
	return (!emptyField && validEmail);
}

function addFieldError(inputBox, messageID){
	inputBox.className = "field-error";
	document.getElementById(messageID).style.display="block";
}
	
function removeFieldError(inputBox, messageID){	
	inputBox.className = "";
	document.getElementById(messageID).style.display="none";
}

function redirect(destination){
    window.location = destination;
}