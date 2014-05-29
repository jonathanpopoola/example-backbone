// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "models/Model", "views/introvideo", "views/moviegrid", "collections/Collection", "views/morefamilyfavs"],

    function($, Backbone, Model, IntromovieView, MovieGridView,  Collection, FamilyViewer) {

        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {
                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();
            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
                "moviegrid" : "moviegrid",
                "movie/:id" : "movieShow",
                "morefamily" : "familyFavsShow"

            },

            index: function() {

                // Instantiates a new view which will render the header text to the page
                new IntromovieView();

            },
            moviegrid: function(){
                new MovieGridView();
            },

            movieShow: function(id) {
                new MovieView(id);
            },

            familyFavsShow: function() {
                new FamilyView();
            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);