const box = document.querySelector('.box');
const speedBtns = document.querySelectorAll(`[data-setting="speed"]`);
const colorBtns = document.querySelectorAll(`[data-setting="color"]`);
const slider = document.querySelector('#slider');
const silderInfo = document.querySelector('.slider__info');
const squares = 234;
let sliderValue = 70;
let range=360;

const createSquare = (speed) => {
	box.innerHTML = '';
	for (let i = 0; i < squares; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		square.style.transitionDuration = speed;
		square.addEventListener('mouseover', () => setColor(square));
		square.addEventListener('mouseout', () => deleteColor(square));
		box.appendChild(square);
		
	}
};

const setColor = (square) => {
	let h;

	if (range === 360) {
		h = Math.floor(Math.random() * 360);
	} else {
		h = Math.floor(Math.random() * 60) + range;
	}
	const s = slider.value + `%`;
	const l = `50%`;
	square.style.backgroundColor = `hsl(${h},${s},${l})`;
};
const deleteColor = (square) => {
	square.style.backgroundColor = 'transparent';
};

function hanldeSpeed() {
	const newSpeed = this.dataset.speed + `s`;
	createSquare(newSpeed);
}
function handleColor(){
range = parseInt(this.dataset.colorRange)

}

const changeSliderInfo=()=>{
	silderInfo.innerHTML = slider.value;
	
}

speedBtns.forEach((btn) => btn.addEventListener('click', hanldeSpeed));
colorBtns.forEach((btn) => btn.addEventListener('click', handleColor));

createSquare();

slider.addEventListener("mousemove", changeSliderInfo)
