define([
  'backbone',
  'underscore',
  'collections/movies',
  'views/movie',
  'text!templates/moviegrid.html',
  'text!templates/movie.html',
  'tweenlite',
  
], function(Backbone, _, moviesCollection, movieView, moviegridTemplate, movieTemplate) {

		MoviegridView = Backbone.View.extend({
			el: $("#maincontent"),
			events: {
				"click .time": "selecttime",
				"click #tab li": "selecttab",
				"click #remindme": "selectremindme"
			},
			selecttime: function(e){
				var timenum = $(e.target).attr('id').substr(5);
				stateModel.set('currenttime', parseInt(timenum));		
			},
			selectremindme: function(){
				var remindme = new RemindmeView();
				remindme.on('closed', function(){
					delete remindme;
				});
			},
			initialize: function(){
			    this.renderView();
			},
			renderView: function(){
				var isEmpty = false;
				if( !$.trim( this.$el.html() ).length ) {
					isEmpty = true;
				}
				var slotdelay = 50;
/*
				var thisstate = {
					currentdate: stateModel.get('currentdate'),
					currentdateindex: stateModel.get('currentdateindex'),
					currenttime: stateModel.get('currenttime'),
				};

				console.log(thisstate);
*/
				var offsetanimationdistance = 20;
				
				/*var variables = {
					dates: moviesCollection.models  
			    };*/
				var template = _.template( moviegridTemplate);
				this.$el.html( template );
				/*TweenLite.from($('#mainimage'), 0.3, {css:{right:'+=5px', opacity:0.2}, delay:0, ease:Power1.easeOut});
				TweenLite.from($('#showmeta'), 0.3, {css:{ opacity:0.1}, delay:0, ease:Power1.easeOut});
				TweenLite.from($('#showinfo'), 0.3, {css:{ opacity:0.1}, delay:0, ease:Power1.easeOut});*/		
				this.uiSetup();	
			},
			uiSetup: function() {
			
			
			$(".summerAttractionHover").each(function(index, element){
				
/*var tl = new TimelineLite({paused:true});
tl.insert(new TweenLite($(this), 0.8, {css:{backgroundPosition : "-3200px 0px"}, delay:0, ease:SteppedEase.config(16)}), 0);
element.animation = tl;*/
			tl = new TimelineLite({paused:true,onComplete: finished});
			tl.to(element, 1, {css:{"opacity": "1"}, delay:0});
			
			element.animation = tl;
			function finished() {
			console.log("finished");
			//this.restart();
			};
			});
			$(".summerAttractionHover").hover(over, out);

			function over(){
				this.animation.play();
			};

			function out(){
				this.animation.reverse();
			};

		//this function returns an animation using the element that you pass in
		/*function animateOver(element) {
		  var tl = new TimelineLite();
		  		  tl.to(element, 0.6, {opacity: 1})
		  return tl;
		};

		function animateOverStrip(element) {
		  var tlimage = new TimelineLite({onComplete:loop});
		  tlimage.to(element, 0.7, {css:{backgroundPosition : "-506px 0px"}, delay:0, ease:SteppedEase.config(2)});
		  return tlimage;
		  function loop() {
		  	//console.log("loop");
		  	tlimage.restart();
		  };
		};

//sdfsdfsd 


		/*$('.sumHol').hover(function () {
			

		    me = $(this).children(".summerAttractionHover");
			console.log(me);
			me.show();
		    meto = $(this).children(".summerAttractionFooter");
		    if(!me.animation){
		    //if not, create one
		    me.animation = animateOver(me);
		  }else{
		    //or else play it
		   me.animation.play().timeScale(1);
		  };
		  if(!meto.animation){
		    //if not, create one
		    
		    meto.animation = animateOverStrip(meto);
		  }else{
		    //or else play it
		  
		   meto.animation.play({onComplete:finished}).timeScale(1);  

		  };



		}, function () {
			console.log(me);
			 console.log('hover out');
			 me.hide(); 
		    me.animation.reverse();
		    
		    meto.animation.reverse();

		});	*/			

			}
		});
		return MoviegridView;
	}
);