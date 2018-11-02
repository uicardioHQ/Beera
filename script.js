window.sr = ScrollReveal();
		sr.reveal('nav', {
		  origin : 'top',
		  delay    : 200,
		  distance : '120px',
		  easing   : 'ease-in-out',
		  useDelay: 'always',
		});

		sr.reveal('#cover', {
		  origin : 'bottom',
		  delay    : 800,
		  scale: 0.9,
		  distance : '120px',
		  easing   : 'ease-in-out',
		  useDelay: 'always',
		})

		sr.reveal('#features, #subscribe', {
		  origin : 'bottom',
		  delay    : 200,
		  viewFactor: 0.2,
		  distance : '120px',
		  easing   : 'ease-in-out',
		  useDelay: 'always'
		})

		sr.reveal('.pricingModules', {
		  origin : 'right',
		  delay    : 1000,
		  distance : '120px',
		  easing   : 'ease-in-out',
		  useDelay: 'always',
		})
		sr.reveal('#pricingText', {
		  origin : 'left',
		  delay    : 200,
		  distance : '120px',
		  easing   : 'ease-in-out',
		  useDelay: 'always',
		})

		// adding shapes in the section
		function randomNum(num) { return Math.floor(Math.random() * num) + 1 };
		var shapesCount = 3;

		$("section").each(function(){
			var divHeight = Math.floor($(this).height());
			var divWidth = Math.floor($(this).width());

			for( i = 0; i < shapesCount; i++){
				$(this).append('<img src="./assets/img/shapes/'+ randomNum(6) +'.svg" class="shape" style="top:'+ randomNum(divHeight) +'px; left:'+ randomNum(divWidth) +'px; opacity: 0.'+ randomNum(9) +'" />')
			}
		})