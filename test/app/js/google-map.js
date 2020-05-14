function initMap() {
    //позиция
    let pos = {lat: 59.9387165, lng:30.3208587}
    let opt = {
      center: pos,
      zoom:13,
      disableDefaultUI: true,
      styles: [
    {
        "stylers": [
            {
                "hue": "#63d1bb"
            },
            {
                "saturation": 0
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
    };
    myMap = new google.maps.Map(document.getElementById('map'), opt);

    let marker = new google.maps.Marker( {
      position: pos,
      map: myMap,
      icon:'img/contacts/map-pin.svg'
    })

    let info = new google.maps.InfoWindow({
      content: "<h2>Магазин мягких игрушек Mishka</h2>"
    })

    marker.addListener("click", function () {
      info.open(myMap, marker);
    })

}
