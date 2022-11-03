const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});


function validateEmail(input) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(input);
}


var user = document.getElementById('user');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var cfrmPass = document.getElementById('cfrmPass');

function store(){
	if(user.value == null || user.value == "", email.value == null || email.value == "", pass.value == null || pass.value == "", cfrmPass.value == null || cfrmPass.value == ""){
		alert('Please fill out all information!');
	}
	else{
		if(pass.value == cfrmPass.value){
			if(validateEmail(email.value)===true){
				localStorage.setItem('user', user.value);
				localStorage.setItem('email', email.value);
				localStorage.setItem('pass', pass.value);
				localStorage.setItem('cfrmPass', cfrmPass.value);
			}
			else{
				alert('Please enter a valid email address.')
			}
		}
		else{
			alert('Entered passwords are not the same!');
		}
	}

}

function check(){
	
	var storedUser = localStorage.getItem('user');
	var storedEmail = localStorage.getItem('email');
	var storedPass = localStorage.getItem('pass');
	
	var enteredUser = document.getElementById('userOrEmail');
	var enteredPass = document.getElementById('userPass');
	
	if((enteredUser.value == storedUser || enteredUser.value == storedEmail) && enteredPass.value == storedPass){
		alert('You are logged in!');
		window.location.replace('courses.html');
	}
	else{
		alert('Invalid Login');
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.querySelector("#logIn");
	const signUpForm = document.querySelector("#signUp");
	
	document.querySelector("#linkSignUp").addEventListener("click", x =>{
		x.preventDefault();
		loginForm.classList.add("form-hidden");
		signUpForm.classList.remove("form-hidden");
	});
	
	document.querySelector("#linkLogIn").addEventListener("click", x =>{
		x.preventDefault();
		loginForm.classList.remove("form-hidden");
		signUpForm.classList.add("form-hidden");
	});
	
	document.getElementById("loginBtn").addEventListener("click", x=>{
		x.preventDefault();
	});
});


