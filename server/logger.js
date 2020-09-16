
const moment = require('moment');
const fs = require('fs');

const logger = (action, product) => {
	fs.readFile('server/db/stats.json', 'utf-8', (err, data) => {
		if (err) {
			console.log('Can`t read file')
		} else {
			const newStats = JSON.parse(data);

			newStats.stats.push({
				time: moment(),
				action: action,
				productId: product.params.id
			});
			fs.writeFile(
				'server/db/stats.json',
				JSON.stringify(newStats, null, 4),
				(err) => {
					if (err) {
						console.log('Can`t write file')
					}
				}
			);
		}
	});
};

module.exports = logger;