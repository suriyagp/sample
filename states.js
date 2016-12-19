myapp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/dashboard");
  //
  // Now set up the states
  $stateProvider.state('stateHome', {
      url: "",
     // controller: 'dashBoardController',
      templateUrl: "pages/basePage.html",
    })   
    .state('stateHome.stateLogin', {
      url: "/dashboard",
      //controller: 'dashBoardController',
      templateUrl: "pages/home.html",  
    })    
    
    });