//  As of now we don't need to delete the DB, but we're keeping the code for future reference in case.

const mongoose = require('./connection');
const Cart = require('../models/Cart');

// const bookmarkSeeds = require('./seeds.json');

Cart.deleteMany({})
	.then(() => Cart.deleteMany({}))
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
