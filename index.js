'use strict';

const request = require('request');
const cheerio = require('cheerio');

class ShutterSearch {
	constructor(keyterm) {
		let url = `https://www.shutterstock.com/search?&searchterm=${keyterm}&image_type=jpg`
		return new Promise((resolve, reject) => {
			request(url, (error, response, html) => {
				let $ = cheerio.load(html);
				let results = $('.search-results-grid img');
				let randomResult = results[Math.floor(Math.random() * results.length)];
				let returnObj = {
					src: `https:${randomResult.attribs.src}`,
					alt: randomResult.attribs.alt
				}
				resolve(returnObj);
			});
		})
	}
}

module.exports = ShutterSearch;