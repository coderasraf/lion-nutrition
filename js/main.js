const bodyOverlay = document.querySelector('.overlay');
// Homepage bannar carousel js code 
$(document).ready(function(){
	$('.carousel-products').owlCarousel({
		items:4,
		margin:10,
		loop:true,
		autoplay:false,
		dots:true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		nav:true,
		autoplayTimeout: 2000,
  		smartSpeed: 500,
		responsiveClass:true,
	 	responsive: {
	    0: {
	      items: 2
	    },

	    600: {
	      items: 3
	    },

	    1024: {
	      items: 4
	    },

	    1366: {
	      items: 4
	    }
	  }		
		})

// Bottom quote carosuel slider js code
	$('.quote-carousel-inner').owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		nav:false,
		dots:true,
		smartSpeed:1000,
		margin:40,
		autoplayTimeout:1000
	})
})
// Fixed nav & bottom to top button js code 
const fixedNav = document.querySelector('.fixed-header');
const topLink = document.querySelector('.top-link');
window.addEventListener('DOMContentLoaded', function(){
	window.addEventListener('scroll', function(){
		const pageOffset =  window.pageYOffset;
		if (pageOffset > 200) {
			fixedNav.classList.add('fixed-nav');
		}else{
			fixedNav.classList.remove('fixed-nav');
		}

		if (pageOffset > 400) {
			topLink.classList.add('top-active');
		}else{
			topLink.classList.remove('top-active');
		}
	})
})

// Mobile menu js code 
const bar = document.querySelector('.bars-hide');
const hideMenu = document.querySelector('.middle-menu-area');
const closeBtn = document.querySelector('.close-btn');
const overlayBg = document.querySelector('.overlay-bg');
window.addEventListener('DOMContentLoaded', function(){
	bar.addEventListener('click', function(){
		hideMenu.classList.toggle('actie-hide-menu');
		overlayBg.classList.toggle('active');
	})
	closeBtn.addEventListener('click', function(){
		hideMenu.classList.remove('actie-hide-menu');
		overlayBg.classList.remove('active');
	});
	overlayBg.addEventListener('click', function(){
		hideMenu.classList.remove('actie-hide-menu');
		this.classList.remove('active');
	})
})

// Wishlist js code
const wishlistBtns = document.querySelectorAll('.love-icon');
const wishlistAlert = document.querySelector('.wishlist-alert');
wishlistBtns.forEach((btn)=>{
	btn.addEventListener('click', ()=>{
		wishlistAlert.classList.add('active')
		setTimeout(() => {
			wishlistAlert.classList.remove('active')
		}, 1000);
	})
})
// Add to cart js code 
const addCartBtns = document.querySelectorAll('.car-inner-bottom .btns')
const cartBox = document.querySelector('.cart-box-wrapper')
const cartBtn = document.querySelector('.right-menu li:nth-child(3) a')
addCartBtns.forEach((btn)=>{
	btn.addEventListener('click', (e)=>{
		e.preventDefault()
		cartBox.classList.add('active')
		cartBox.style.marginTop = fixedNav.offsetHeight + 'px'
		cartBox.style.top = 0
		bodyOverlay.classList.add('active')
	})
})
cartBtn.addEventListener('click', ()=>{
	cartBox.classList.toggle('active')
	cartBox.style.marginTop = fixedNav.offsetHeight + 'px'
	cartBox.style.top = 0
	bodyOverlay.classList.toggle('active')
})

// Signup form js code 
const form = document.querySelector('.form');
const username =  document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const small = document.querySelector('.small');
const formWrapper = document.querySelector('.form-wrapper')
const openAccount = document.querySelector('.right-menu li:nth-child(2) a')
const closeForm = document.querySelector('.close-form');
const loginBtn = document.querySelector('#login-button')
// showing and hiding form 
openAccount.addEventListener('click', ()=>{
	formWrapper.classList.toggle('active')
	bodyOverlay.classList.toggle('active')
	formWrapper.style.marginTop = (fixedNav.offsetHeight - 50) + 'px'
})
closeForm.addEventListener('click', ()=>{
	formWrapper.classList.remove('active')
	bodyOverlay.classList.remove('active')
})
bodyOverlay.addEventListener('click', ()=>{
	formWrapper.classList.remove('active')
	bodyOverlay.classList.remove('active')
	cartBox.classList.remove('active')
})


// Shwoing error message
function showError(input, message){
	const formControl = input.parentElement;
	formControl.className = 'form-controls error';
	const small = formControl.querySelector('small');
	small.innerHTML = message;
}

// Showing success message
function showSuccess(input, message){
	const formControl = input.parentElement;
	formControl.className = 'form-controls success';
}
// Email validatiy check
function isValid(email){
	 const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		return re.test(email);
}
// Select parent wrapper
form.addEventListener('submit', function(e){
	e.preventDefault();
	if (username.value === '') {
		showError(username, 'Username is required');
	}else if(username.value.length < 5 ){
		showError(username, 'Username must be 6 charecter!!');
	}else{
		showSuccess(username);
	}

	if (email.value === '') {
		showError(email, 'Email is required');
	}else if(!isValid(email.value)){
		showError(email, 'Email is Invalid');
	}else{
		showSuccess(email);
	}

	if (password.value === '') {
		showError(password, 'password is required');
	}else if(password.value.length < 6){
		showError(password, 'Password must be 8 charecter!~');
	}else{
		showSuccess(password);
	}

	if (password2.value === '') {
		showError(password2, 'Confirmation password is required');
	}else if(password2.value != password.value){
		showError(password2, 'Confirmation password is Not match');
	}else if(password2.value.length < 6){
		showError(password2, 'Password Should be 8 charecter!')
	}else{
		showSuccess(password2);
	}
})
