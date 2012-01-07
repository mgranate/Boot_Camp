function show(data) {
	console.log(data);
};

var mo = new MovieObserver();

var movie = new Movie(mo);
movie.setId(1);
movie.setTitle('Movie 1');
movie.setRating(123);

mo.subscribe('movie.play', show);
mo.subscribe('movie.stop', show);

movie.play();
movie.stop();

var down_mov = new DownloadableMovie();
down_mov.setTitle('Movie 2');
show(down_mov.download());