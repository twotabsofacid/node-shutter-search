const shutterSearch = require('./index');

class CommandLineTest {
	constructor() {
		new shutterSearch('criminal hacker').then((data) => {
			console.log(data);
		}).catch((error) => {
			console.log(error);
		});
	}
}

new CommandLineTest();