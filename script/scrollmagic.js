var controller = new ScrollMagic.Controller();
			$(function () {
				
				var scene = new ScrollMagic.Scene({triggerElement: "#morestart1", duration: 6650})
								.setPin("#morestay1")
								.addTo(controller);
				
				var scene = new ScrollMagic.Scene({triggerElement: "#morestart2", duration: 2300})
								.setPin("#morestay2")
								.addTo(controller);
				
				var scene = new ScrollMagic.Scene({triggerElement: "#morestart4", duration: 2100, offset: 200})
								.setPin("#morestay4")
								.addTo(controller);
				
				
			});