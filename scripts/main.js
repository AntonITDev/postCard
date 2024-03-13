import {start} from './start.js'

const heart = document.querySelector('.heart');
const container = document.querySelector('.container');

heart.addEventListener('click', (e)=> {
	e.target.style.animation = 'scale 1s';
	setTimeout(()=> {
		e.target.style.display = 'none';
		start(container);
	}, 1000)
})
