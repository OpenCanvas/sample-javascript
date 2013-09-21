var PlaceListItemView = Backbone.View.extend({

    initialize: function(options) {
        this.marker_view = options.marker_view; //retain instance of google marker
     this.render();


    } ,
    events: {

        'click a.detail': 'showPlaceDetail'

    },
    render: function() {
        this.$el.html('<li class="place-item"></i><span class="badge badge-inverse reorder">'+ (this.model.get('pin'))+'</span>&nbsp;<a class="detail"  href="#">' + this.model.get('name') + '</a></li>');
        return this;
    },

    showPlaceDetail: function(){

        App.showContent(this.marker_view.model);

    }



});