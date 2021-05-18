const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let secondDeg = 0,
minDeg = 0,
hourDeg = 0;

function initDate() {
	const now = new Date();
	const second = now.getSeconds();
	secondDeg = 90 + (second / 60) * 360;
	const min = now.getMinutes();
	minDeg = 90 + (min / 60) * 360 + ((second / 60) /60) * 360;
	const hour = now.getHours();
	hourDeg = 90 + (hour / 12) * 360 + ((min / 60) / 12) * 360 + (((second / 60) / 60) / 12) * 360;
}

function updateDate() {
	secondDeg += (1 / 60) * 360;
	minDeg += ((1 / 60) / 60) * 360;
	hourDeg += (((1 / 60) / 60) / 12);
	
	secondHand.style.transform = `rotate(${secondDeg}deg)`;
	minHand.style.transform = `rotate(${minDeg}deg)`;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

initDate();
setInterval(updateDate, 1000);