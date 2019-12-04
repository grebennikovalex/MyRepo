	/* by grebennikovalex */
  
	'use strict'
	
	let flash;
	let timer = 200;
	let scale = 1.43;
	let g;
	let r;
	//let b;
	let s = 0;
	const reloadBtn = document.getElementById('reload');
	const flashingBtn = document.getElementById('flashing');
	const stopFlashingBtn = document.getElementById('stopFlasing');
	const colorNumber = document.getElementsByClassName('col');
	const rangeBars = document.getElementsByClassName('range');
	
	let changeColor = (r, g, b, i) => {
		document.getElementsByClassName('cube')[i].style.background = 'RGB(' + r + ',' + g + ',' + b + ')';
		document.getElementsByClassName('cube')[i].style.transform = 'scale(' + scale + ', ' + scale + ')';
	};
	
	let rangeSlider1 = document.getElementById('theRange1');
	let rangeSlider2 = document.getElementById('theRange2');
	
	
	let flashing = () => flash = setInterval(colors, 25);
	let reload = () => window.location.reload(false);
	let stopFlashing = () => clearInterval(flash);
	
	
	reloadBtn.addEventListener('click', reload);
	flashingBtn.addEventListener('click', flashing);	
	stopFlashingBtn.addEventListener('click', stopFlashing);	
	
	rangeSlider1.oninput = () => timer = rangeSlider1.value;
	rangeSlider2.oninput = () => scale = parseInt(rangeSlider2.value)/100;
		
		
		
    let colors = () => {
		
	
		let b = 255; 
		let r = 0;
		s = s + Math.PI*2/parseInt(timer);
		
		g = 128 + ( 128 * Math.sin(s) )* -1;
		//r = 128 + ( 128 * Math.sin(s) )* -1;
		//b = 128 + ( 128 * Math.sin(s) );
						
				for ( let i = 0; i < 18; i++ ) {
						  
				changeColor(r, 255-g, b, i);

				colorNumber[i].innerHTML = ` R `+ r.toFixed(2) + ` G ` + g.toFixed(2) + ` B	` + b.toFixed(2) + `   ` + timer;	

				[...rangeBars].forEach(rangeBar => {
					rangeBar.style.background = 'RGB(' + r + ',' + g + ',' + b + ')';
					});
								
				b -=15;
				
				r +=15;
				
				
												
				};
				
		if ( s > Math.PI * 2 ) s = 0;

				
	};
	
	
	
	
		
		
		
		
		
		
		
		
	
		
	
		
		
 

