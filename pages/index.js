window.onload = function(e){
	boxmaster = document.getElementById('boxmaster');
	
	boxmaster.addEventListener("touchstart", touch);
	boxmaster.addEventListener("touchend", touch);
	boxmaster.addEventListener("mousemove", mouse);
	boxmaster.addEventListener("mouseout", mouse);
	
	function touch(event){
		if(event.type == 'touchstart'){ 
            setTimeout(function(){ 
			boxmaster.style.background = 'blue';
            }, 200);
		}
		if(event.type == 'touchend'){
			setTimeout(function(){ 
				boxmaster.style.background = 'red'; 
			}, 3000);
		}
	}
	function mouse(event){
		if(event.type == 'mousemove'){ 
			boxmaster.style.background = 'blue';
		}
		if(event.type == 'mouseout'){
			boxmaster.style.background = 'red';
		}
	}
}