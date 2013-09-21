//---------------------------------------
// Place List View
//---------------------------------------
var PlaceListView = Backbone.View.extend({
    el:  $("#places_holder"),

    initialize: function(options) {
        $('#places_list_holder ul').html('');
      	this.route = options.route;
    	this.list_container = $('#places_list_holder ul', this.$el);
      	this.render();

    },
    addPlace : function (place){

        var marker_view = new PlaceMarkerView({ model: place });
        var item_view = new PlaceListItemView({ model: place, marker_view : marker_view});
        $(this.list_container).append(item_view.render().el);
        $(this.list_container).append(item_view.render().el);
    },
    render: function(){

        this.model.each (this.addPlace, this);
        var code = this.route.get('polyline');
        var paths = google.maps.geometry.encoding.decodePath(code);

        var poly = new google.maps.Polyline({
            path: paths,
            strokeColor: '#7fb82c',
            strokeOpacity: 0.7,

            strokeWeight: 10,
            zIndex: 1
        });

        poly.setMap(App.getMap());
    }

});