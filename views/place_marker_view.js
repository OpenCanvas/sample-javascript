var PlaceMarkerView = Backbone.View.extend({

    initialize: function(options) {
        var self = this;
        var shadow = new google.maps.MarkerImage("images/pins/shadow-Pin.png",
            new google.maps.Size(51.0, 44.0),
            new google.maps.Point(0, 0),
            new google.maps.Point(14.0, 44.0)
        );
        var loc = new google.maps.LatLng(self.model.get('lat'),self.model.get('lon'));
        var options = {map: self.map,
            animation: google.maps.Animation.DROP,
            title: self.model.name,
            icon:   App.getPinNumber(self.model,false),
            shadow: shadow,
            map: App.getMap(),

            position: loc,
            zIndex: 999999};

        var marker = new google.maps.Marker(options);
        self.model.marker = marker;
        marker.model = self.model;
        marker.setMap(App.getMap());

        if(Places.models.indexOf(this.model) == Places.models.length-1){
            //zoom map to show all markers
            var bounds = new google.maps.LatLngBounds();
            for(var i=0;i<Places.models.length;i++){

                bounds.extend(Places.models[i].marker.getPosition());
            }
            App.getMap().fitBounds(bounds);
        }
        google.maps.event.addListener(marker, 'click', function(){


            App.showContent(marker.model);

        });

    }

});