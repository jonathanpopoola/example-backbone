define([
  'backbone',
  'models/movies'
], function(Backbone, moviemodel) {
	  var MoviesCollection = Backbone.Collection.extend({
	  	model:moviemodel,
	    url:"data/mobies.xml",

	    parse: function(data) {
	        var parsed=[];
	        var that = this;
	        $(data).find('movie').each(function (index) {
	            var id = $(this).attr('id');
	            var stub = $.trim($(this).attr('stub'));
	            var name= $(this).attr('name');
	            var date= $(this).attr('name');
	            var rating= $(this).attr('rating');
	            var length= $(this).attr('length');
	            var gridx= $(this).attr('gridx');
	            var gridy= $(this).attr('gridy');
	            var description = $(this).children('desc').text();	            
	            var rr_link = $(this).children('desc').text();
	            var go_link = $(this).children('desc').text();
	            var gallery = [];
	            var extras = [];
	            $(this).find('gallery').each(function(index){
	            	var stub = $(this).attr('stub');	            	
	            	gallery.push(stub);
	            });
	            $(this).find('extras').each(function(index){
	            	var stub = $(this).attr('stub');	            	
	            	extras.push(stub);
	            });
	            parsed.push({ id:id, stub: stub,  name:name, date:date, rating:rating, length: length, gridx:gridx, gridy: gridy, description:description, rr_link:rr_link, go_link:go_link, gallery:gallery, extras:extras});
	        });
	        return parsed;
	    },
	    fetch: function(options) {
	        options || (options = {});
	        options.dataType="xml";
	        Backbone.Collection.prototype.fetch.call(this, options);
	    },
	    converttimetominutes: function(time){
	    	timearray = time.split(':');
	    	return parseInt(timearray[0])*60 + parseInt(timearray[1]);
	    }
	});

	return new MoviesCollection;
});