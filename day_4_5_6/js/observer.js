function MovieObserver() {

	this.observations = [];

};

var Observation = function(name, func) {
    this.name = name;
    this.func = func;
};

MovieObserver.prototype = {

    subscribe : function(name, func) {
        var exists = false;
		for (var i=0; i<this.observations.length; i++) {
			if(this.observations[i].name == name) {
				exists = true;
				break;
			}
		}
        if (!exists) {
			this.observations.push(new Observation(name, func));
		}
    },

    unsubscribe : function(fn) {
        this.observations.remove(
			function(i) {
				return i.name == name && i.func == func;
			}
		);
    },
	
    fire : function(name, data) {
		var funcs = [];
		for (var i=0; i<this.observations.length; i++) {
			if(this.observations[i].name == name)
				funcs.push(this.observations[i].func);
		}
		funcs.forEach(
			function(i) {
				i.call(window, data);
			}
		);
    }
	
};