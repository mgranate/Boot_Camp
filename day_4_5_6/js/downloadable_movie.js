// Extend the Movie class.
DownloadableMovie.prototype = new Movie();
 
function DownloadableMovie() {
	// Call super constructor.
	Movie.apply( this, arguments );
}
 
// Override the will-date logic.
DownloadableMovie.prototype.download = function () {
	return "Downloading " + getTitle();
}