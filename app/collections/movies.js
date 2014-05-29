define([
"underscore",
"backbone",
"models/movies"
], function(_, Backbone, movieModels) {
 var FeatureMovie = Backbone.Collection.extend({
	model: movieModels,
	url: "data/movies.json"
 });
 return FeatureMovie;
});


	