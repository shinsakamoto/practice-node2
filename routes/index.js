var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	users.find().toArray(function(err,items){
		console.log(items);
		res.render('index', {MONGODB_URL:MONGODB_URL , items:items});
	});
});

router.post('/add', function(req, res, next) {
	console.log("post add");
	var name = req.body.name;
	users.insert({name:name},function(err,result){
		console.dir(result);
	});
	res.redirect('/');
});

router.post('/delete', function(req, res, next) {
	console.log("post delete");
	var id = req.body._id;
	users.remove({_id:ObjectID(id)},function(err,result){
		console.dir(result);
	});
	res.redirect('/');
});


module.exports = router;
