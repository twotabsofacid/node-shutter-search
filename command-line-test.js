const shutterSearch = require('./index');

class CommandLineTest {
	constructor() {
		new shutterSearch('dancing grandpa').then((data) => {
			console.log(data);
		}).catch((error) => {
			console.log(error.message);
		});
	}
}

new CommandLineTest();