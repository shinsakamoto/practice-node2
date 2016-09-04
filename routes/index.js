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

router.post('/edit', function(req, res, next) {
	console.log("post delete");
	var id = req.body._id;
	var action = req.body.action;
	var name = req.body.name;
	if(action=="delete"){
		users.remove({_id:ObjectID(id)},function(err,result){
			console.dir(result);
		});
	}else if(action=="update"){
		users.update({_id:ObjectID(id)},{ $set: {name:name} },function(err,result){
			console.dir(result);
		});
	}
	res.redirect('/');
});


module.exports = router;
