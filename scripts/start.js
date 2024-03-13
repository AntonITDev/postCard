import {finish} from './finish.js';

export const start = (container)=> {
	container.innerHTML = '';

	const questions = []

	const createQuestion = (number, text) => {
		const questionSection = document.createElement('section');
		questionSection.classList.add('question');

		const questionText = document.createElement('h2');
		questionText.textContent = `Вопрос №${number}: ${text}?`;

		const inputField = document.createElement('input');
		inputField.placeholder = 'Ответ:';
		const btnNext = document.createElement('button');
		btnNext.classList.add('btn__next')
		btnNext.textContent = 'Дальше';

		btnNext.addEventListener('click', (e)=> {
		})

		questionSection.append(questionText, inputField, btnNext);

		return questionSection;
	}



	questions.push(createQuestion(1, 'Какой у меня цвет глаз?'))
	questions.push(createQuestion(2, 'Какой у меня рост?'))
	questions.push(createQuestion(3, 'Сколько мы уже вместе?'))

	container.append(questions[0]);

	let question = 1;
	container.addEventListener('click', (e)=> {
		if (e.target.classList.contains('btn__next')) {
			if (question < questions.length) {
				container.innerHTML = '';
				container.append(questions[question]);
				question++;
			} else {
				container.innerHTML = '';
				container.append(finish('Я ТЕБЯ ЛЮБЛЮ!', 'Ты самая лучшая крошенька на свете, тьмок тьмок тьмок!!!'))
			}
		}
	})
}