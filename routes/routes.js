module.exports = function(app){
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/catchit', function(req, res) {
		res.render('catchit');
	});

	app.get('/catchit_game', function(req, res) {
		res.render('catchit_game');
	})

	app.get('/matchit', function(req, res) {
		res.render('matchit');
	});

	app.get('/matchit_start', function(req, res) {
		res.render('matchit_start');
	})

	app.get('/popit', function(req, res) {
		res.render('popit');
	});

	app.get('/popit_start', function(req, res) {
		res.render('popit_start');
	});

	app.get('/popit_level2', function(req, res) {
		res.render('popit_level2');
	});
}
