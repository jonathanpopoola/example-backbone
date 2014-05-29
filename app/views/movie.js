//var GreenSockAMDPath = "js/libs/gsap";
define([
  'backbone',
  'underscore',
  'collections/movies',
  'text!templates/movie.html',
  'tweenlite',
  'timelinelite'
], function(Backbone, _, moviesCollection, movieView) {

		MovieView = Backbone.View.extend({
			el: $("#maincontent"),
			events: {
				"click #jp_movPrev" : "previousMovie",
				"click #jp_movNext" : "nextMovie",
				"click #jp_galleryLaunch" : "galleryLauncher",
				"click #jp_customClose" : "closeDialogue",
				"click .jp_backLink" : "destroyClips"		
			},
			currentId: null,
			maxNext: null,
			movieObject: null,
			trigger: null,
			initialize: function(id){
			    var that = this;
			    that.currentId = id;
			    var data = new moviesCollection();
			    data.fetch({
					success: function() {
						var model = data.get(id);
						var movInfo = {
							movie_date : model.get("date"),
							movie_time : model.get("time"),
							movie_rating : model.get("rating"),
							movie_status : model.get("status"),
							movie_name : model.get("name"),
							movie_symptonis : model.get("symptonis"),
							galleryImages : model.get("galleryImages"),
							videoLinks: model.get("videoLinks")
						};  
						// set max next
			    		that.maxNext = (data.models.length) - 1;
						that.renderView(movInfo); 	
						
					}
				}); 
			},
			renderView: function(movInfo){
				console.log("render");
				var template = _.template( movieView, movInfo);
				this.$el.html( template );	
				this.uiSetup();
				this.moreClips(movInfo.videoLinks);
				/*videojs("loraxMovie", {autoplay: true, preload:"true", "width":437, "height": 247}, function(){
						console.log("video playing");
				});	*/
			},
			destroyClips: function() {
				this.movieObject.dispose();
			},
			moreClips: function(videoLinks) {
				var that = this;
				that.movieObject = videojs("clipsandFeatures", {"width": 437, "height": 246, "controls": false});
				
				console.log("more clips " + this.movieObject);
				var clipOptions = $("#clipsOptions");  
				//var newMovie = videojs("clipsandFeatures", {"width": 437, "height": 246, "controls": false});
				//var trailersClips = $("#trailersClips");
				initMov();
				function initMov() {
					that.movieObject.src([
					{ type: "video/webm", src: videoLinks[0].vidLink +"?type=webm&amp;" },
			 		{ type: "video/mp4", src: videoLinks[0].vidLink +"?type=h264&amp;" }
				]);			
				//newMovie
					that.movieObject.play();
					//that.trigger=1;
				};
				
				$("#moreclips").click(function() {
					
					$(this).hide();
					$("#trailersClips").css({"display":"inline-block"});
					that.movieObject.pause();
					
						
					
					if(videoLinks.length >= 3) {
						console.log("greater than 3")
						alert("working on display of the options");
					}else {
						that.movieObject.src([
							{ type: "video/webm", src: videoLinks[1].vidLink +"?type=webm&amp;" },
			 				{ type: "video/mp4", src: videoLinks[1].vidLink +"?type=h264&amp;" }
						]);
						that.movieObject.play();	
					}
					return false;
				});
				
				$("#trailersClips").click(function() {
					that.movieObject.pause();
					$(this).hide();
					$("#moreclips").show();
					initMov();
					return false;
				});
			},
			uiSetup: function() {
					    $('.item').first().addClass("active");
					  	
						TweenLite.to($("#jp_movieInfo"), 3.5, {css:{opacity:1}, delay:0, ease:Power1.easeOut});

					    $(".jp_movie_roll").each(function(index, element){
/*var tl = new TimelineLite({paused:true});
tl.insert(new TweenLite($(this), 0.8, {css:{backgroundPosition : "-3200px 0px"}, delay:0, ease:SteppedEase.config(16)}), 0);
element.animation = tl;*/
			tl = new TimelineLite({paused:true,onComplete: finished});
			tl.to(element, 1, {css:{backgroundPosition : "-3000px 0px"}, delay:0, ease:SteppedEase.config(15)});
			//.to(element, 0.9, {css:{backgroundPosition : "0px 0px"}, delay:0, ease:SteppedEase.config(16)});
			element.animation = tl;
			function finished() {
			
			//this.stop();
			};
			});
			$(".jp_movie_roll").hover(over, out);

			function over(){
				this.animation.play();
			};

			function out(){
				this.animation.reverse();
			};

			},
			closeDialogue: function() {
				$("#jp_mov_gallery").modal('hide');
				return false;
			},
			previousMovie: function() {
				if (this.currentId <= 0) {
					console.log("can't move any further back");
				}else {
					var newPosition = (+this.currentId - +1);
					$(this.el).removeData().unbind();
					// works but adds extra # to url
					Backbone.history.navigate("/#movie/"+newPosition);
				}
			}, 
			nextMovie: function() {
				if (this.currentId >= this.maxNext) {
					console.log("can't move any further forward");
				}else {
					var newPosition = (+this.currentId + +1);
					$(this.el).removeData().unbind();
					// works but adds extra # to url
					Backbone.history.navigate("/#movie/"+newPosition);
				}
			},
			galleryLauncher: function() {
				
				$("#jp_mov_gallery").modal('show');
				return false;
			}
		
		});
		return MovieView;
	}
);