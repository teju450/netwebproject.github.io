 function validate()
{ 
    
	error=document.getElementById('disp_error');
	uname=document.getElementById('name_error');
	
	email=document.getElementById('email_error');
	subject=document.getElementById('sub_error');
	texta=document.getElementById('text_error');
	username=uname.value;
	email=email.value;
	subject=subject.value;
	textarea=texta.value;
	if(username == '' || email == ''||subject == ''||textarea == '')
	{
		//alert("please enter all details");
		error.innerHTML="please enter all details";
		error.style.color='red';
		return false;
	}
	alert("hello");
}



