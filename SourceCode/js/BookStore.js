var BookStoreApp = new Backbone.Marionette.Application();

var BookStoreController = Backbone.Marionette.Controller.extend({
  displayBooks : function (){
    console.log("I will display books...");
  }
});

var BookStoreRouter = Backbone.Marionette.AppRouter.extend({
  controller : BookStoreController,
  appRoutes: {
    "": "displayBooks"
  }
});

BookStoreApp.addInitializer(function () {
  var controller = new BookStoreController();
  var router = new BookStoreRouter({controller:controller});
  console.log("hello from the addInitializer.");
});

BookStoreApp.on('initialize:after', function () {
  if (Backbone.history) {
    Backbone.history.start();
  }
  console.log("hello from the initialize:after.");
});

BookStoreApp.start();
