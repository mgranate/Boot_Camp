// Library definition
var directorModule = (function() {

	// Private vars and methods
	var name;
	var quotes;

	// Public API
	return {
	
		setName: function(n) { name = n; },
		getName: function() { return name; },
		
		setQuotes: function(q) { quotes = q; },
		speak: function() { return quotes; }
		
	}
	
})();