const shutterSearch = require('./index');

class CommandLineTest {
	constructor() {
		new shutterSearch('man eating salad').then((data) => {
			console.log(data);
		});
	}
}

new CommandLineTest();