var MovieDownloader = {
	
	_instance: null,
	
	getInstance: function() {
		if (!this._instance) {
			this._instance = {
				amethod: function() {
					console.log("amethod");
				}
			}
		}
		return this._instance;
	}
	
};

// Invoke: MovieDownloader.getInstance().amethod()