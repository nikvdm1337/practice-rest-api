// // Database
// const db = require('../../db')

// module.exports = (req, res) => {
// 	let query = `SELECT * FROM public.products `
// 	if (req.params.category) {
// 		query += `WHERE public.category = ${req.params.category}`
// 	}
// 	db.query(query, (err, result) => {
// 		if (err) {
// 			res.send(err)
// 		} else {
// 			res.send(result.rows)
// 		}
// 	})
// }

// Database
const db = require('../../db')

module.exports = (req, res) => {
	let query = `SELECT * FROM products`
	// if (req.params.id) {
	// query += `WHERE category = ${req.params.id}`
	// }
	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
