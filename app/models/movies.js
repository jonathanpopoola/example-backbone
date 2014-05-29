define([
  'underscore',
  'backbone'
  ],
  function(_, Backbone) {
    var FeatureMovies = Backbone.Model.extend({
      url: "data/movies.json",
      defaults: {
        id: false,
        title: false
      }
    });
    return FeatureMovies;
  }

  );