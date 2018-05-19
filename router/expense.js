var express = require('express');
var router = express.Router();
var config = require('../config/serverconfig').get(process.env.NODE_ENV);
var pool = require('../lib/mysqllib');

router.route('/getExpense').get(function(req, res, next){
	console.log('in get expense !');

  pool.getConnection(function (err, conn) {
      if (err) {
        console.log(err);
        return next(err);
      }
      conn.query('select * from expense', function (err, result) {
        conn.release();
        if (err) {
          return next(err);
        }
        else {
					console.log(result);
					res.send(result);
          return next();
        }
      })
  })
});

router.route('/add').post(function(req, res, next){
	console.log('in get add expense !');

	var input = {
		date: req.body.date,
		category: req.body.category,
		type: req.body.type,
		amount: req.body.amount,
	}

	console.log(req.body);

	console.log(input);

  pool.getConnection(function (err, conn) {
      if (err) {
        console.log(err);
        return next(err);
      }
      conn.query('INSERT INTO `expense` (`date`, `category`, `type`, `amount`) VALUES (?, ?, ?, ?)',
				[input.date, input.category, input.type, input.amount],
			 		function (err, result) {
		        conn.release();
		        if (err) {
		          return next(err);
		        }
		        else {
							console.log(result);
							res.send(result);
		          return next();
		        }
      })
  })
});


module.exports = router;
