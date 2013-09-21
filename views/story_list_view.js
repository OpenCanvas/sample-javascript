var StoryListView = Backbone.View.extend({

    el:  $("#stories_holder"),

    initialize: function(options) {
        this.list_container = $('#stories_list_holder', this.$el);
        this.render();
    },

    addStory : function (story){
       console.log(story);
        var story_view = new StoryView({ model: story });
       
    },
     render: function(){
         $('#stories_list_holder').html('');
         this.model.each (this.addStory, this);
         $('.story-item:first').trigger('click');

     }
});