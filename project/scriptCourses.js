const boxes = document.querySelectorAll('.courses')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(courses => {
        const boxTop = courses.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            courses.classList.add('show')
        } else {
            courses.classList.remove('show')
        }
    })
}


const cartIcon = document.querySelector('.cartLogo');
const cart = document.querySelector('.shoppingCart');
const closeCart = document.querySelector('.closeCart');


cartIcon.onclick = () => {
	cart.classList.add("active");
};

closeCart.onclick = () => {
	cart.classList.remove("active");
};

if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}
else{
	ready();
}


function ready(){
	var removeCartButtons = document.getElementsByClassName('removeCart');
	for(var i = 0; i < removeCartButtons.length; i++){
		var button = removeCartButtons[i];
		button.addEventListener('click', removeCartItem);
	}
	
	var quantityValue = document.getElementsByClassName('cartQty');
	for(var i = 0; i < quantityValue.length; i++){
		var input = quantityValue[i];
		input.addEventListener('change', quantityChange);
	}
	
	var addToCart = document.getElementsByClassName('course');
	for(var i = 0; i < addToCart.length; i++){
		var button = addToCart[i];
		button.addEventListener('click', addedToCart);
	}
	
	document.getElementsByClassName('btn')[0].addEventListener('click', buttonClicked);
}

function buttonClicked(){
	var inCart = document.getElementsByClassName('inCart')[0];
	if(inCart.hasChildNodes()){
		alert('Your order has been placed! Thank you for shopping!');
		while(inCart.hasChildNodes()){
			inCart.removeChild(inCart.firstChild);
		}
	}
	else{
		alert('Your cart is empty!');
	}
	updateTotal();
}

function removeCartItem(event){
	var removeBtn = event.target
	removeBtn.parentElement.remove();
	updateTotal();
}

function addedToCart(event){
	var btn = event.target;
	var courses = btn.parentElement.parentElement;
	var courses2 = btn.parentElement.parentElement.parentElement.parentElement;
	
	if(courses.parentElement.classList.contains('courses')){
		var title = courses.getElementsByClassName('courseName')[0].innerText;
		var price = courses.getElementsByClassName('price')[0].innerText;
		var img = courses.getElementsByClassName('courseImg')[0].src;
	}
	else{
		var title = courses2.getElementsByClassName('courseName')[0].innerText;
		var price = courses2.getElementsByClassName('price')[0].innerText;
		var img = courses2.getElementsByClassName('courseImg')[0].src;
	}
	
	addCourse(title, price, img);
	updateTotal();
}

function addCourse(title, price, img){
	var cart = document.createElement('div');
	cart.classList.add('cartContainer');
	var cartCourses = document.getElementsByClassName('inCart')[0];
	var cartCourseName = cartCourses.getElementsByClassName('cartCourse');
	
	for(var i = 0; i < cartCourseName.length; i++){
		if(cartCourseName[i].innerText == title){
			alert("Course already added!");
			return;
		}
	}
	
	var cartContainer = `
					<img src="${img}" class="cartImg">
					<div class="cartDetails">
						<div class="cartCourse">${title}</div>
						<div class="cartPrice">${price}</div>
						<input type="number" value="1" class="cartQty">
					</div>
					
					<img src="garbage.png" class="removeCart">`;
					
	cart.innerHTML = cartContainer;
	cartCourses.append(cart);
	cart.getElementsByClassName('removeCart')[0].addEventListener('click', removeCartItem);
	cart.getElementsByClassName('cartQty')[0].addEventListener('change', quantityChange);
	
}

function quantityChange(event){
	var input = event.target;
	if(isNaN(input.value) || input.value <= 0){
		input.value = 1;
	}
	updateTotal();
}

function updateTotal(){
	var inside = document.getElementsByClassName('inCart')[0];
	var cartContainer = inside.getElementsByClassName('cartContainer');
	var total = 0;
	
	for(var i = 0; i < cartContainer.length; i++){
		var container = cartContainer[i];
		var price = container.getElementsByClassName('cartPrice')[0];
		var quantity = container.getElementsByClassName('cartQty')[0];
		var finalPrice = parseFloat(price.innerText.replace("$", ""));
		var totalQty = quantity.value;
		total = total + finalPrice * totalQty;
	}
		document.getElementsByClassName('totalPrice')[0].innerText = "$" + total;
}



function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}