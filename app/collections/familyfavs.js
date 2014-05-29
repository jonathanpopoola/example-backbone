define([
"underscore",
"backbone",
"models/familyfavsmovs"
], function(_, Backbone, famModel) {
 var FamilyFavMovies = Backbone.Collection.extend({
	model: famModel,
	url: "data/family-favs.json"
 });
 return FamilyFavMovies;
});


	