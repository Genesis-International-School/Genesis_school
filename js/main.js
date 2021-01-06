function check(form)
{
if(form.user.value == "Genesis" && form.pass.value == "School")
{
	alert("You are being safely redirected to Homepage of Genesis International School.Click OK to continue")
return true;}
else
{
alert("Invalid password or username.")
return false;
}
}

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
