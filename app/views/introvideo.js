// View.js
// -------
//var GreenSockAMDPath = "js/libs/gsap";
define(["jquery", "backbone", "models/Model", "text!templates/introvideo.html", "tweenlite"],

    function($, Backbone, Model, template){

        var View = Backbone.View.extend({

            // The DOM Element associated with this view
            el: "#maincontent",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {
                //var self = this;sdfsdf 
                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);
                //console.log('not yet loaded');
                //videojs = window.VideoJS
                videojs("introvideo", {autoplay: true, preload:"true", "width":960, "height": 768}, function(){
                  // Player (this) is initialized and ready.
                  var myPlayer = this;
                  //console.log(myPlayer);
                  myPlayer.on("timeupdate", function(){
                    //console.log(myPlayer.currentTime());
                    if (myPlayer.currentTime() > 9.3){
                        myPlayer.pause();
                        //$("#testdiv").css({'backgroundColor':'#ffffff'});
                        TweenLite.to($("#introvideo"), 0.2, {css:{scale:2, opacity:0}, delay:0, ease:Power1.easeOut});
                        TweenLite.to($("#introbackplate"), 0.4, {css:{ opacity:0}, delay:0.3, ease:Power1.easeOut, 
                            onComplete:function(){
                                window.location.href = "#moviegrid";
                                //Backbone.history.navigate("/#moviegrid");
                            }
                        });
 
                    }
                  });

                  console.log('loaded');
                });
                //$("#intromovieholder")

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return View;

    }

);