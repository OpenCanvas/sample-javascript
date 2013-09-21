var appKey = 'YmU2NmY0ZmMtMDBkMy00ZTkzLWJiMWQtYTkzOWJkZGRjNWM4';

var Routes = new RouteList();
var AppView = Backbone.View.extend({

    el: $("#hub"),

    initialize: function() {
        var self = this;
        self._initializeMap();
        self.routesInit();
        $('#close-main').on('click', function(e){
        	self.hideContent();
        });

    },
    events:{
        'change #route_list': 'selectRoute'

    },
    
    hideContent: function(){
        $("#main").css('display','none');

	},
    selectRoute: function(e){

        $("#main").css('display','none');
        for(var i=0;i<Places.models.length;i++)
           Places.models[i].marker.setMap(null);

        Places = new PlaceList([],{route_id:$('#route_list').val()});
        Places.fetch({
            success: function(){
                self.place_list_view = new PlaceListView({model: Places, route:Routes.first()});

            }
        });        
    },
    showContent: function (model){
        var self = this;
          $("#main").css('display','inline');
        var Stories = new StoryList([],{place_id:model.get('id')});
        Stories.fetch({
            success: function(){
                var story_list_view = new StoryListView({model: Stories,collection:Stories,place_model:model});
            }
        });

    },
    routesInit: function(){
        var self = this;
        Routes.fetch({
            success: function(model){
                var route_list_view =  new RouteListView({model: Routes});
                Places = new PlaceList([],{route_id:Routes.first().attributes.id});
                Places.fetch({
                    success: function(){

                        self.place_list_view = new PlaceListView({model: Places, route:Routes.first()});

                    }
                });

            }
        });
    },
    //--------------------------------------
    // Initialize map
    //--------------------------------------
    _initializeMap : function(){
        var center = new google.maps.LatLng(52.3, 4.63);
        var styles = [
            {
                elementType: "geometry",
                stylers: [
                    { lightness: 33 },
                    { saturation: -90 }
                ]
            }
        ];

        var mapOptions = {
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            center: center,
            styles: styles,

            zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP},
            panControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP},
            mapTypeControlOptions: {position:google.maps.ControlPosition.RIGHT_TOP}
        };
       
        this.map = new google.maps.Map(document.getElementById('map_canvas'),
            mapOptions);
    } ,
    getMap: function(){
      return this.map;
    },
    getPinNumber:function(model,selected){

        var cnt ;
        if(model.get('pin') > 9){
            cnt = model.get('pin');

        } else{
            cnt = '0' + (model.get('pin'));
        }

        if(selected)
            return 'images/pins/Pin'+cnt+'_selected.png';
        else
            return 'images/pins/Pin'+cnt+'.png';
    }
});

var App = new AppView();