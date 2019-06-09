 function validate()
{
	uname=document.getElementsById('name_error');
	email=document.getElementById('email_error');
	subject=document.getElementById('sub_error');
	texta=document.getElementById('text_error');
	uname=uname.value;
	email=email.value;
	subject=subject.value;
	texta=texta.value;
	if(uname =='' || email ==''||subject == ''||texta == '')
	{
		alert("please enter all details");
		return false;
	}
}



