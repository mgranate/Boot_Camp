window.onload = function() {
	alert('Load complete!');	
	$('#alias').focus();
	setActionHelloBtn();
	setActionMovieBtn();
}

function setActionHelloBtn() {
	$("#hello_btn").click(function(){
		$.post( 'api/dispatcher.php',
				{ service: 'welcome.hello', params: {"name": $('#alias').val()} } )
		.success(function(dataFromServer) { 
			$('#response').html(dataFromServer);
			$('#response').css("background-color","lightgreen");
		})
		.error(function() { 
			$('#response').html('Error in the service');
			$('#response').css('background-color','red');
		});
	});
}

function setActionMovieBtn() {
	$("#movie_btn").click(function() {
		$.post( 'http://albertomiranda.com.ar/html5/bootcamp/api/dispatcher.php',
				{ service: 'movie.getTop', params: {} } )
		.success(function(dataFromServer) {
			var metadatos = dataFromServer.data;
			$.each(metadatos,function(indice,value){ 
				$("#movieResponse").append("<div >" + 
				"<ul>Movie:" +
					"<li>Box Art: "+metadatos[indice].BoxArt.SmallUrl + "</li>" + 
					"<li>Title: "+metadatos[indice].Name + "</li>" + 
					"<li>Year: "+metadatos[indice].ReleaseYear + "</li>" + 
					"<li>Synopsis: "+metadatos[indice].Synopsis + "</li>" + 
			   "</ul></div>"); 
			});
			$('#movie').css("padding-left","50%");
			$('#movie').css("border","1px solid");
		})
		.error(function() { 
			$('#movie').html('Error in the service');
			$('#movie').css('background-color','red');
		});/*
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
					$( '#movie' ).css( "padding-left","50%" );
					$( '#movie' ).css( "border","1px solid" );
				},							
				error: function(data){
						alert('error response');
				}
			});*/
	});
}