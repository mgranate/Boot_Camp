function executeCode() {
	var code = $('#code')[0].value;
	$("body").append("<script>"+code+"</script>"); //or eval(code);
}

function store() {
	var code = document.getElementById("code").value;
	window.localStorage.setItem('code', code);
}

$(document).ready(function() {

	$('#code')[0].value = window.localStorage.getItem('code');
	
	$('#dropzone').bind('drop', function(event){
		console.log(event);
		if (event.dataTransfer) {
				var format = "Text";
				var textData = event.dataTransfer.getData (format);
				if (!textData) {
					textData = "<span style='color:red'>The data transfer contains no text data.</span>";
				} else {
					document.getElementById("code").innerHTML = textData;
					$('#dropzone').css({
						'background':'red'
					});
				}
		}
	});
	
	$('#dropzone').bind('dragenter', function(){
		$('#dropzone').css({
			'background':'orange'
		});
	});

	$('#dropzone').bind('dragleave', function(){
		$('#dropzone').css({
			'background':'yellow'
		});
	});
	
	initGeolocation();
	
});

function initGeolocation() {
	if( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition(sucessLocation, failLocation);
	} else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

var map;
function sucessLocation(position) {
	alert("Your coordinates are " + position.coords.latitude + ", " + position.coords.longitude + ".");
	/*var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var marker = new google.maps.Marker({position: latLng, map: map});
	map.setCenter(latLng);*/
	
	// Define the coordinates as a Google Maps LatLng Object
	var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	// Prepare the map options
	var mapOptions = {
		zoom: 10,
		center: coords,
		mapTypeControl: false,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// Create the map, and place it in the map_canvas div
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	// Place the initial marker
	var marker = new google.maps.Marker({
		position: coords,
		map: map,
		title: "Your current location!"
	});
}

function failLocation() {
	alert("Could not obtain location.")
}

/* PARA EL EJERC 5 >>> http://blogs.msdn.com/b/davrous/archive/2011/07/15/introduction-to-the-html5-web-workers-the-javascript-multithreading-approach.aspx
web workers: permite la ejecución de scripts en segundo plano, son procesos de larga duración y pueden consumir mucha memoria
que hasta ahora se podían implementar con la función window.setTimeOut(). Los workers tienen las siguientes ventajas: se ejecutan
en threads separados, de forma concurrente, no bloquean la interfaz de usuario, pueden ser dedicados (al tab) o compartidos por
varios tabs o por la ventana e, incluso, podrían persistir al cierre de la misma.

<script language="javascript">
	var worker = new Worker('myjavascript.js');
	worker.onmessage = function(event) { alert(event.data); };
</script>
*/

/* PARA EL EJERC 6 >>> http://websocket.org/echo.html
web sockets: es la implementación de la comunicación bidireccional entre el cliente y el servidor, lo que podemos denominar push o comet,
y que antes hacíamos con Ajax a través del objeto XMLHttpRequest. Con HTML5 ya no será necesario su uso puesto que provee de un mecanismo
estándar para realizar dicha comunicación invocando directamente a un método send() que remitirá la información al servidor.

<script language="javascript">
	var socket = new WebSocket(location);
	socket.onopen = function(event) {
		socket.postMessage("Hola mundo, WebSocket");
	}
	socket.onmessage = function(event) { alert(event.data); }
	socket.onclose = function(event) { alert("closed"); }
</script>
*/

/* PARA EL EJERC 7 >>> http://www.html5rocks.com/en/tutorials/appcache/beginner/
				   >>> http://www.bennadel.com/blog/1944-Experimenting-With-HTML5-s-Cache-Manifest-For-Offline-Web-Applications.htm

<script language="javascript">
	window.applicationCache.addEventListener('updateready', function(e) {
	  if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
		window.applicationCache.swapCache();
		if (confirm('A new version of this site is available. Load it?')) {
		  window.location.reload();
		}
	  }
	}, false);
</script>
*/