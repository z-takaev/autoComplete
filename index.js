fetch('https://rickandmortyapi.com/api/character')
	.then(response => response.json())
	.then(data => data.results.map(person => person.name))
	.then(persons => {
		const autoCompleteJS = new autoComplete({
			placeHolder: "Введите имя персонажа...",
			data: {
					src: persons,
					cache: true,
			},
			resultItem: {
					highlight: true
			},
			events: {
					input: {
							selection: (event) => {
									const selection = event.detail.selection.value;
									autoCompleteJS.input.value = selection;
							}
					}
			}
		});
	})
