//window.onload = function() {
$(document).ready( function() {
	alert('Load complete!');	
	$('#alias').focus();
	setActionHelloBtn();
	setActionMovieBtn();
});

function setActionHelloBtn() {
	$("#hello_btn").click(function(){
		$.post( 'api/dispatcher.php',
				{ service: 'welcome.hello', params: {"name": $('#alias').val()} } )
		.success(function(dataFromServer) { 
			$('#response').html(dataFromServer).css("background-color","lightgreen");
		})
		.error(function() { 
			$('#response').html('Error in the service').css('background-color','red');
		});
	});
}

function setActionMovieBtn() {
	$("#movie_btn").click(function() {
		$.ajax({
				url: 'http://albertomiranda.com.ar/html5/bootcamp/api/dispatcher.php?service=movie.getTop',
				type: 'POST',
				dataType : 'jsonp',
				crossDomain: true,
				success: function(datos){
					var metadatos = datos.data;
					$.each(metadatos,function(indice,value){ 
						$("#movie").append("<div >" + 
						"<ul>Movie:" +
							"<li>Box Art: "+metadatos[indice].BoxArt.SmallUrl + "</li>" + 
							"<li>Title: "+metadatos[indice].Name + "</li>" + 
							"<li>Year: "+metadatos[indice].ReleaseYear + "</li>" + 
							"<li>Synopsis: "+metadatos[indice].Synopsis + "</li>" + 
						   "</ul></div>"); 
					});
					$('#movie').css("padding-left","50%");
					$('#movie').css("border","1px solid");
				},							
				error: function(data){
						$('#movie').html('Error in the service').css('background-color','red');
				}
			});
	});
}