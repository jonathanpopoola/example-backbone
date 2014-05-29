define([
  'backbone',
], function(Backbone) {

	moviemodel = Backbone.Model.extend({
		defaults: {
			id: false,
  		stub : false,
  		name: false,
      date: false,
  		rating: false,
  		length: false,
  		gridx:false,
      gridy:false,
      rr_link:false,      
      go_link:false,
  		gallery: [],
      extras: []
		}
	});

	return moviemodel;
	}
);