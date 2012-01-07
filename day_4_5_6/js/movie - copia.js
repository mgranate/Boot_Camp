function Movie(mo) {

	// Private vars and methods

	var id = 0;
	var title = "";
	var rating = 0;
	
	// Public vars and methods

	this.getId = function(){ return id; }
	this.setId = function(i){ id = i; }
	
	this.getTitle = function(){ return title; }
	this.setTitle = function(t){ title = t; }

	this.getRating = function(){ return rating; }
	this.setRating = function(r){ rating = r; }

	this.movieObserver = mo;
	
};

Movie.prototype = {
	
	play : function() {
		this.movieObserver.fire('movie.play', 'Playing '+this.getTitle());
    },

	stop : function() {
		this.movieObserver.fire('movie.stop', 'Stopping '+this.getTitle());
    }
	
};