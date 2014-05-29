define([
  'underscore',
  'backbone'
  ],
  function(_, Backbone) {
    var FamilyMovs = Backbone.Model.extend({
      url: "data/family-favs.json",
      defaults: {
        id: false,
        title: false,
        skyUrl: false,
        coverImg:false
      }
    });
    return FamilyMovs;
  }

  );