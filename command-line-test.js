const shutterSearch = require('./index');

class CommandLineTest {
	constructor() {
		new shutterSearch('fun').then((data) => {
			console.log(data);
		});
	}
}

new CommandLineTest();