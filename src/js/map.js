
function initMap() {
  let kiev = {
    lat: 50.401699,
    lng: 30.252512
  };
  let image = '/dist/img/contact-map-pin.png'
  let map = new google.maps.Map(document.querySelector('.contact__map'), {
    zoom: 10,
    center: kiev,
    disableDefaultUI: true
  });

  let marker = new google.maps.Marker({
    position: kiev,
    map: map,
    icon: image,
  });

  let infowindow = new google.maps.InfoWindow({
    content: 'Beetroot Academy',
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    let uluru = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(kiev);
  })
};

initMap();
