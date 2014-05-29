define([
  'backbone',
  'underscore',
  'collections/familyfavs',
  'text!templates/more-family-favs.html',
  'tweenlite'], function(Backbone, _, familymovCollections, familyfavsView, TweenLite ) {

		FamilyView = Backbone.View.extend({
			el: $("#maincontent"),

			initialize: function(){
			    var that = this;
			    var data = new familymovCollections();
				data.fetch({
					success: function() {
						that.renderView(data);
					}
				}); 
			},
			renderView: function(data){
				console.log("model set up "+data.models);
				var template = _.template(familyfavsView, {results: data.models});
				this.$el.html( template );	
			},

		});
		return FamilyView;
	}
);