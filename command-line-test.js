const shutterSearch = require('./index');

class CommandLineTest {
	constructor() {
		new shutterSearch('funny doctor').then((data) => {
			console.log(data);
		}).catch((error) => {
			console.log(error);
		});
	}
}

new CommandLineTest();