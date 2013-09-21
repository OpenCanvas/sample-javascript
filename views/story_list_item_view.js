var StoryView = Backbone.View.extend({

    tagName: 'li',

    initialize: function(options) {
       this.render();
    } ,
   events: {
     'click .story-item': 'showMedia'

   },
	render: function() {

        this.$el.html('<a href="#" class="story-item" data-id="'+this.model.cid+'">' + this.model.get('title') +'</a>');
        $('#stories_list_holder').append(this.$el);

    },
    showMedia: function(){

    self=this;

       var html = '	<div id="ca-container" class="ca-container"><div class="ca-wrapper">';
        $(this.model.get('media')).each(function(index,value){
            if(this.type =='image') {

                  html += ' <div class="ca-item ca-item-'+(index+1)+'">\
                      <div class="ca-item-main" style="background: url(\''+this.source+'\') no-repeat center center;\
                                -webkit-background-size: cover;\
                                 -moz-background-size: cover;\
                                 -o-background-size: cover;\
                                 background-size: cover;">\
                <a href="#" class="ca-more">more...</a>\
                </div>\
                <div class="ca-content-wrapper">\
                    <div class="ca-content">';

                html += '<h6>'+this.title+'</h6>\
                                             <div class="ca-content-text">\
                                                   <p>'+this.caption+'</p>\
                        </div>\
                                         </div>\
                    </div>\
                </div>';

        }


        });

        html +='</div></div>';
        $('#media_holder').html(html);
        setTimeout(function(){$('#ca-container').contentcarousel();},5);
        setTimeout(function(){$('a.ca-more').trigger('click');},5);


    }
});