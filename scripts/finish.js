export const finish = (compliments, text)=> {
	const finishContainer = document.createElement('section');
	finishContainer.classList.add('section__finish');

	const finishTitle = document.createElement('h2');
	finishTitle.textContent = compliments;
	
	const finishText = document.createElement('p')
	finishText.textContent = text;

	finishContainer.append(finishTitle, finishText)

	return finishContainer;
}