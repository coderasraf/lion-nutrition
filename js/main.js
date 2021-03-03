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