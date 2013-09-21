//---------------------------------------
// Route Collection
//---------------------------------------
var RouteList = Backbone.Collection.extend({
    // Reference to this collection's model.
    initialize: function(models, options) {

    },
    model: Route,
    url: function() {
    	// un-comment to get app_key from query param
        // return 'http://api.opencanvas.co/v1.0/routes?app_key=' + this.getURLParameter('app_key');
        return 'http://api.opencanvas.co/v1.0/routes?app_key=' + appKey;
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
    get_route_id: function(){
        return this.route_id;
    },
    parse: function(response){

        return response.routes;
    },
    getURLParameter:function(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}


});