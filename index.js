'use strict';

const request = require('request');
const cheerio = require('cheerio');

class ShutterSearch {
	constructor(keyterm) {
		let newKeyterm = keyterm.split(' ').join('+');
		let url = `https://www.shutterstock.com/search?&searchterm=${keyterm}&image_type=jpg`;
		return new Promise((resolve, reject) => {
			request(url, (error, response, html) => {
				let returnObj = {};
				if (error) {
					returnObj.message = error;
					return reject(returnObj);
				} else {
					let $ = cheerio.load(html);
					let results = $('.search-results-grid img');
					if (results.length === 0) {
						returnObj.message = 'No results for this search term';
						return reject(returnObj);
					}
					let randomResult = results[Math.floor(Math.random() * results.length)];
					returnObj.src = `https:${randomResult.attribs.src}`;
					returnObj.alt = randomResult.attribs.alt;
					return resolve(returnObj);
				}
			});
		})
	}
}

module.exports = ShutterSearch;