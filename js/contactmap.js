function initMap() {
    var markerLabel = 'Allied Wellness Group';
    var infoString = '<div id="infoWindow">' + '<h1>Allied Wellness Group</h1>' + '<br />' +
        '<p>8202 Clearvista Parkway</p>' +
        '<p>Fishers, IN, 46256</p>' +
        '<a href="https://goo.gl/maps/2WBARA5GR93bCkLr6" target="_blank">View on Google Maps</a>' + '</div>';

    var awgLocation = {
        lat: 39.899934,
        lng: -86.038054
    };

    var map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 15,
        center: awgLocation,
        gestureHandling: 'cooperative'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: infoString
    });

    var marker = new google.maps.Marker({
        position: awgLocation,
        map: map,
        title: markerLabel
    });

    infoWindow.open(map, marker);

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
}