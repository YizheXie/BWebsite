/*=====================================================
	Template Name : Techost - IT Solutions & Business Services Template
	Author Name   : AB_Themes
	Author Url    : https://www.templatemonster.com/authors/ab_themes/
	Decripation   : This is a Landing page HTML5 Responsive Template
	Version       : 1.0 ;
=======================================================*/



(function($) { 

"use strict";

		//Preloader js{ 
			$('.preloader').fadeOut();
			$('.status-mes').delay(350).fadeOut('slow'); 
		
		// Active Slick Nav 
		$('.navigation').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});
		
		//On Scroll Functionality
    	$(window).on('scroll', function () {
    		
    		if ($(this).scrollTop() > 100) {
    			$('#header-area').addClass('sticky');
    		} else {
    			$('#header-area').removeClass('sticky');
    		}
    	});

		$('.main_menu').onePageNav({
    		currentClass: 'current',
    		changeHash: true,
    		scrollSpeed: 750,
    		scrollThreshold: 0.5,
    		filter: '',
    		easing: 'swing',
    		begin: function() {
    			//I get fired when the animation is starting
    		},
    		end: function() {
    			//I get fired when the animation is ending
    		},
    		scrollChange: function(jQuerycurrentListItem) {
    			//I get fired when you enter a section and I pass the list item of the section
    		}
    	});
    	
    	$(window).on('scroll', function () {
    		
    		if ($(this).scrollTop() > 100) {
    			$('.header').addClass('sticky');
    		} else {
    			$('.header').removeClass('sticky');
    		}
    	});
		
		//Animation effect
		AOS.init();

		//Nice Select
		$('select').niceSelect();
		
		/*------------------------------------
		 search option
		------------------------------------- */ 
			$('.search-option').hide();
			$(".main-search").on('click', function(){
				$('.search-option').animate({
					height:'toggle',
				});
			});
			
		/* BACK TO TOP BUTTON */
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});
		//Click event to scroll to top
		$('.scrollToTop').click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		// slider carousel  
		$('.home_slider').owlCarousel({
			loop: true,
			items: 1,
			dots: false,
			animateOut: 'fadeOut',
            animateIn: 'fadeIn',
			nav: true,
			active: true,
			navText: ['<i class="fas fa-angle-right"></i>', '<i class="fas fa-angle-right"></i>'],
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				600: {
					items: 1,
					nav: false,
				},
				768: {
					items: 1,
				},
				1000: {
					items: 1
				}
			}
		});
		
		$(".home_slider").on("translate.owl.carousel", function () {
			$(".single_home h1, .single_home p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".single_home .home_btn").removeClass("animated fadeInDown").css("opacity", "0");
		});
		$(".home_slider").on("translated.owl.carousel", function () {
			$(".single_home h1, .single_home p").addClass("animated fadeInUp").css("opacity", "1");
			$(".single_home .home_btn").addClass("animated fadeInDown").css("opacity", "1");
		});
		
		
		
		// portfolio_slide carousel  
		$('.portfolio_slide').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			items: 3,
			center: true,
			autoplay: false,
			autoplayTimeout: 2500,
			autoplaySpeed: 2000,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3
				}
			}
		});
		
		
		/*----------------------------------------
		  process activation Js 
		-----------------------------------------*/
		$(document).on('mouseover', '.process-item', function () {
		  $(this).addClass('active');
		  $('.process-item').removeClass('active');
		  $(this).addClass('active');
		});
		
		
		// testimonial_slider carousel  
		$('#testimonial_slider').owlCarousel({
			loop: true,
			items: 2,
			margin: 30,
			dots: true,
			autoplay: true,
			autoplayTimeout: 2500,
			autoplaySpeed: 2500,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				1000: {
					items: 2
				}
			}
		});

		// START PORTFOLIO
		$('.portfolio_item').mixItUp({
		
		});	
		
		// START LIGHTBOX
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			})			
	
	
	
		$('.video-popup').venobox({
			framewidth: '700px',        // default: ''
			frameheight: '450px',       // default: ''
			border: '10px',             // default: '0'
			bgcolor: '#000',         // default: '#fff'
			titleattr: 'data-title',    // default: 'title'
		});

				

		$('.count').counterUp({
			delay: 10,
			time: 1000
		});
		
	
	
		/*----------------------------------------
		  Title Animation
		-----------------------------------------*/
		let char_come = gsap.utils.toArray(".title_animated");
		  char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
			  scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			  }
			});
			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" })
			tl.from(itemSplitted.chars,
			  {
				duration: 1.2,
				opacity: 0,
				scale: 0,
				y: 60,
				rotationX: 180,
				transformOrigin: "0% 30% -30%",
				stagger: 0.02
			  });
		  });
		  
		  

		/*----------------------------------------
		  fade in right animation
		-----------------------------------------*/
		let device_width = window.innerWidth;
		  gsap.set(".bdFadeRight", {
			x: 100,
			opacity: 0
		  });

		  if (device_width) {
			const fadeArray = gsap.utils.toArray(".bdFadeRight")
			fadeArray.forEach((item, i) => {
				let fadeTl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: "top center+=200",
					}
				})
				fadeTl.to(item, {
					x: 0,
					opacity: 1,
					ease: "power2.out",
					duration: 1.5,
				})
			})
		  } else {
			gsap.to(".bdFadeRight", {
				scrollTrigger: {
					trigger: ".bdFadeRight",
					start: "top center+=300",
					// scrub: true,
					markers: false,
				},
				x: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 1,
				stagger: {
					each: 0.2
				}
			})
		  }  
		  
		  
		  
		/*----------------------------------------
		bd one by one Show animation
		-----------------------------------------*/
		  var cipro_item = document.querySelectorAll('.bd-one-by-one');
		  gsap.set(cipro_item, {
			x: -30,
			opacity: 0
		  });
		  gsap.to(cipro_item, {
			scrollTrigger: {
				trigger: cipro_item,
				start: "top center+=250",
			},
			x: 0,
			opacity: 1,
			ease: "back.out(1)",
			duration: 1,
			stagger: 0.3,
		  })

	
	 /*--------------------------------------------------------------
      12. Ajax Contact Form And Appointment
      --------------------------------------------------------------*/
    // Contact Form
    function formValidation() {

		// Get the form.
		var form = $('#contact-form');

		// Get the messages div.
		var formMessages = $('.form-message');

		// Set up an event listener for the contact form.
		$(form).submit(function(e) {
			// Stop the browser from submitting the form.
			e.preventDefault();

			// Serialize the form data.
			var formData = $(form).serialize();

			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
			.done(function(response) {
				// Make sure that the formMessages div has the 'success' class.
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');

				// Set the message text.
				$(formMessages).text(response);

				// Clear the form.
				$('#contact-form input,#contact-form textarea').val('');
			})
			.fail(function(data) {
				// Make sure that the formMessages div has the 'error' class.
				$(formMessages).removeClass('success');
				$(formMessages).addClass('error');

				// Set the message text.
				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('Oops! An error occured and your message could not be sent.');
				}
			});
		});
	
    }
		/* --------------------------------------------------------
             Mailchamp
        --------------------------------------------------------- */

		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		
		
	//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		

	
})(jQuery);

