
	const menuButton = document.querySelector('#menu');
	const navigation = document.querySelector('.menuLinks');

	menuButton.addEventListener('click', () => {
		menuButton.classList.toggle('open');
		navigation.classList.toggle('open');
	});

