//define(["director"],function(directorModule) {

	// Library definition
	var movieModule = (function() {
		
		// Private vars and methods
		var id = 0;
		var title = "";
		var rating = 0;
		
		// Public API	
		return {
		
			getId : function(){ return id; },
			setId : function(i){ id = i; },
	
			getTitle : function(){ return title; },
			setTitle : function(t){ title = t; },

			getRating : function(){ return rating; },
			setRating : function(r){ rating = r; },
		
			setDirector : function(d) { director = d; },
			getDirector : function() { return director; }
			
		}
//	});
	
})();