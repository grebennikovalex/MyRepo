	/* by grebennikovalex */
  
	'use strict'
	
	let flash;
	let timer = 200;
	let scale = 1.43;
	let rangeb = 255;
	let flag = true;
	let g;
	let r;
	let b;
	let s = 0;
	let counter = Array(18);
	for (let i =0; i < counter.length; i++) {
		counter[i] = 0;
		};
	
	
				
	const reloadBtn = document.getElementById('reload');
	const flashingBtn = document.getElementById('flashing');
	const stopFlashingBtn = document.getElementById('stopFlasing');
	const colorNumber = document.getElementsByClassName('col');
	const rangeBars = document.getElementsByClassName('range');
	const cells = document.getElementsByClassName('cube');

	
	let changeColor = (r, g, b, i) => cells[i].style.background = 'RGB(' + r + ',' + g + ',' + b + ')';
		
	
	
	let rangeSlider1 = document.getElementById('theRange1');
	let rangeSlider2 = document.getElementById('theRange2');
	let rangeSlider3 = document.getElementById('theRange3');
	
	let flashing = () => flash = setInterval(colors, 25);
			
	let startFlash = () => {
		
			if (flag) {flashing(); flag = false;} 
			else return;
			
		};		
			
	let reload = () => window.location.reload(false);
	
	let stopFlashing = () => {
		
			clearInterval(flash);
			flag = true;
		
		};
		
		
	reloadBtn.addEventListener('click', reload);
	flashingBtn.addEventListener('click', startFlash);	
	stopFlashingBtn.addEventListener('click', stopFlashing);

	
	
	
	
	
	rangeSlider1.oninput = () => timer = rangeSlider1.value;
	rangeSlider2.oninput = () => scale = parseInt(rangeSlider2.value)*0.0043 + 1;
	rangeSlider3.oninput = () => rangeb = parseInt(rangeSlider3.value);	
	
	let sliderNumber1 =() => document.getElementById('sliderValue1').innerHTML = timer;
		
	let sliderNumber2 =() => {
		
			document.getElementById('sliderValue2').innerHTML = rangeSlider2.value;
	
			for (let i = 0; i < 18; i++) {
				
					cells[i].onmousedown = () => {
												
								counter[i] +=0.1;
								cells[i].style.transform = 'scale(' + (scale - counter[i]) + ', ' + (scale - counter[i]) + ')';
														
					};
					
					cells[i].style.transform = 'scale(' + (scale - counter[i]) + ', ' + (scale - counter[i]) + ')';
															
			};
			
	};		
			
			
	let sliderNumber3 =() => document.getElementById('sliderValue3').innerHTML = rangeb;		
			
			
				
					
		
    let colors = () => {
		
	
		g = rangeb;
		
		s = s + Math.PI*2/parseInt(timer);
		
		
		
		//g = 128 + ( 128 * Math.sin(s) );
		r = 128 + ( 128 * Math.sin(s) )* -1;
		b = 128 + ( 128 * Math.sin(s) );
						
				for ( let i = 0; i < 18; i++ ) {
						  
				changeColor(255-r, g, b, i);

				colorNumber[i].innerHTML = ` R `+ r.toFixed(2) + ` G ` + g.toFixed(2) + ` B	` + b.toFixed(2) + `   ` + timer;	

				[...rangeBars].forEach(rangeBar => {
					rangeBar.style.background = 'RGB(' + r + ',' + g + ',' + b + ')';
					});
								
				g = g - rangeb/17;
				
				//r +=15;
				
				
												
				};
				
		if ( s > Math.PI * 2 ) s = 0;

				
	};
	
	
	
	
		
		
		
		
		
		
		
		
	
		
	
		
		
 

