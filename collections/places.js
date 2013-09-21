//---------------------------------------
// Place Collection
//---------------------------------------
var PlaceList = Backbone.Collection.extend({
    // Reference to this collection's model.
    initialize: function(models, options) {
        this.models = models;
        this.route = options.route;
        this.route_id = options.route_id;
    },

    url: function() {
        return 'http://api.opencanvas.co/v1.0/routes/'+ this.route_id + '/places?app_key=' + appKey ;
    },
    parse: function(response){

   		 return response.places;
      },  
	// override backbone synch to force a jsonp call
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