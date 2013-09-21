
var RouteListItemView = Backbone.View.extend({

      tagName: "option",

    initialize: function(options) {

    },
    events: {

    },

    render: function() {

        this.$el.addClass('route-item').html(this.model.get('name')).val(this.model.get('id'));
        return this;

    }



});
