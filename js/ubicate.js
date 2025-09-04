function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        window.alert("Este navegador no soporta Geolocalización");
    }
}

function showPosition(position) {
	//window.alert("Latitud: "+ position.coords.latitude + "\n Longitud: " + position.coords.longitude + "\n Precision: " + position.coords.accuracy + " metros.");	
    document.getElementById("map").src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=15&size=600x600&key=AIzaSyA65riSCrLQVKPwKZ3FdoaW_AKj6QYcIs0&markers=color:blue%7Clabel:P%7C" + position.coords.latitude + "," + position.coords.longitude + "&maptype=satellite";
}