var Movie = Backbone.Model.extend ({
	/* Initialize will be invoked when the model is created */
	initialize: function() {
		console.log("Movie '" + this.get("title") + "' created.");
	},
	defaults: {
		title: "",
		ranking: 0,
		director: "",
		year: 0
	},
	changeTitle: function(newTitle) {
		console.log("Movie title '" + this.get("title") + "' change to '" + newTitle + "'");
        this.set({ title: newTitle });
    }
});

var MovieList = Backbone.Collection.extend ({
	model: Movie,
	del: function(item) {
		var idx = this.models.indexOf(movieList.models[1]); // Find the index
		if(idx != -1) {
			this.models.splice(idx, 1); // Remove it if really found!
			console.log("'" + item.get("title") + "' removed of movie list.");
		}
	}
});

function showMovies() {
	console.log("<<< Start of movie list >>>");
	for (var item in movieList.models)
		console.log(movieList.models[item].get("title"));
	console.log("<<< End of movie list >>>");
}

/* Instances */
var movie1 = new Movie({title: "Movie 1", ranking: 1, director: "Director 1", year: 2001});
var movie2 = new Movie({title: "Movie 2", ranking: 2, director: "Director 2", year: 2002});
var movie3 = new Movie({title: "Movie 3", ranking: 3, director: "Director 3", year: 2003});

var movieList = new MovieList([movie1,movie2,movie3]);

showMovies();
	
movieList.models[1].changeTitle("Movie 02");

movieList.add(new Movie({title:"Movie 4", ranking: 4, director: "Director 4", year: 2004}));
movieList.del(movieList.models[1]);

showMovies();
