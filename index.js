'use strict';

const request = require('request');
const cheerio = require('cheerio');

class ShutterSearch {
	constructor(keyterm) {
		let newKeyterm = keyterm.split(' ').join('+');
		let url = `https://www.shutterstock.com/search?&searchterm=${keyterm}&image_type=jpg`
		return new Promise((resolve, reject) => {
			request(url, (error, response, html) => {
				if (error) {
					return reject(error);
				} else {
					let $ = cheerio.load(html);
					let results = $('.search-results-grid img');
					if (results.length === 0) {
						return reject('No results for this search term');
					}
					let randomResult = results[Math.floor(Math.random() * results.length)];
					let returnObj = {
						src: `https:${randomResult.attribs.src}`,
						alt: randomResult.attribs.alt
					}
					return resolve(returnObj);
				}
			});
		})
	}
}

module.exports = ShutterSearch;