    function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                lat: 46.619261,
                lng: -33.134766
            }
        });
        const locations = [{
                lat: 40.785091,
                lng: -73.968285
            },
            {
                lat: 41.084045,
                lng: -73.874245
            },
            {
                lat: 40.754932,
                lng: -73.948016
            },
        ];

        const markers = locations.map(function (location, i) {
            const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
            });
        });
        const markerCluster = new markerClusterer.MarkerClusterer({
            map,
            markers
        });

    }