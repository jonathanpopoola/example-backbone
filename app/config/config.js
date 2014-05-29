// Require.js Configurations
// -------------------------
require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js/app",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery": "../libs/jquery",

      "jqueryui": "../libs/jqueryui",

      "jquerymobile": "../libs/jquery.mobile",

      "underscore": "../libs/lodash",

      "backbone": "../libs/backbone",

      "tweenmax" : "../libs/greensock/TweenMax.min",

      "tweenlite" : "../libs/greensock/TweenLite.min",

      "timelinelite" : "../libs/greensock/TimelineLite.min",

      "videojs" : "../libs/videojs/video",

      // Plugins
      // -------
      "backbone.validateAll": "../libs/plugins/Backbone.validateAll",

      "bootstrap": "../libs/plugins/bootstrap",

      "text": "../libs/plugins/text",

      "jasminejquery": "../libs/plugins/jasmine-jquery",

      


      "tweenlite_easing" : "../libs/greensock/easing/EasePack.min",

      "tweenlite_attr" : "../libs/greensock/plugins/AttrPlugin.min",

      "tweenlite_bezier" : "../libs/greensock/plugins/BezierPlugin.min",

      "tweenlite_color" : "../libs/greensock/plugins/ColorPropsPlugin.min",

      "tweenlite_css" : "../libs/greensock/plugins/CSSPlugin.min",

      "tweenlite_cssrule" : "../libs/greensock/plugins/CSSRulePlugin.min",

      "tweenlite_dir" : "../libs/greensock/plugins/DirectionalRotationPlugin.min",

      "tweenlite_easel" : "../libs/greensock/plugins/EaselPlugin.min",

      "tweenlite_kinetic" : "../libs/greensock/plugins/KinectPlugin.min",

      "tweenlite_raphael" : "../libs/greensock/plugins/RaphaelPlugin.min",

      "tweenlite_round" : "../libs/greensock/plugins/RoundPropsPlugin.min",

      "tweenlite_scrollto" : "../libs/greensock/plugins/ScrollToPlugin.min",

      "tweenlite_text" : "../libs/greensock/plugins/TextPlugin.min",

      "tweenlite_animforjq" : "../libs/greensock/jquery.gsap.min"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      // jQuery Mobile
      "jquerymobile": ["jquery"],

      // Twitter Bootstrap jQuery plugins
      "bootstrap": ["jquery"],

      // jQueryUI
      "jqueryui": ["jquery"],

      // Backbone
      "backbone": {

        // Depends on underscore/lodash and jQuery
        "deps": ["underscore", "jquery"],

        // Exports the global window.Backbone object
        "exports": "Backbone"

      },

      // Backbone.validateAll plugin that depends on Backbone
      "backbone.validateAll": ["backbone"],

      // Jasmine-jQuery plugin
      "jasminejquery": ["jquery"],

      //Greensock Plugins, added jquery as a dependancy so as to use selector engine, add others as needed
      "tweenlite" : ["jquery", "tweenlite_css", "tweenlite_cssrule", "tweenlite_easing", "tweenlite_color"],

      "timelinelite" : ["jquery", "tweenlite_css", "tweenlite_cssrule", "tweenlite_easing", "tweenlite_color"]

  }

});