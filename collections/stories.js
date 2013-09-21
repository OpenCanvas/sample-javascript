//---------------------------------------
// Story Collection
// ---------------
//---------------------------------------
var StoryList = Backbone.Collection.extend({
    // Reference to this collection's model.
    initialize: function(models, options) {
        this.place_id = options.place_id;
    },
    url: function() {
        return 'http://api.opencanvas.co/v1.0/places/' + this.place_id+ '/stories?app_key=' +appKey;
    },
    parse: function(response){
        response = response.stories;
        return response;
    },
    sync: function(method, model, options) {
		// Default JSON-request options.
		var params = _.extend({
		  type:         'GET',
		  dataType:     'jsonp',
		  url:			model.url(),
		  processData:  false
		}, options);
 
		// Make the request.
		return $.ajax(params);
	},

});