const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const bg = document.querySelector('body')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

let load = 0

let int = setInterval(blurring, 15)

function blurring(){
	load++
	
	if(load > 99){
		clearInterval(int)
	}
	
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}