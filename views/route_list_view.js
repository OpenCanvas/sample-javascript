
var RouteListView = Backbone.View.extend({

    el:  $("#nav_lists"),

    initialize: function(options) {
        this.render();

    },
    add_route: function (route){
        var route_item_view = new RouteListItemView({ model: route});
        $('#route_list').append(route_item_view.render().el);
    },
    render: function() {
        this.model.each (this.add_route, this);

    }

});