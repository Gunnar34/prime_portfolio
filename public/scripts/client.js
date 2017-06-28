var myApp = angular.module('myApp', ['ui.materialize', 'ngRoute']);

//routes
myApp.config(function ($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/partials/home.html'
  }).when('/about', {
    templateUrl: 'views/partials/about.html'
  }).when('/github', {
    templateUrl: 'views/partials/github.html'
  });
});

//main controller
myApp.controller('mainController', mainController);

function mainController(GithubAPI){
  var vm = this;

  vm.toggleCard = function(index){
    vm.repos[index].card = !vm.repos[index].card;
  };

  vm.init = function(){
    GithubAPI.getAccess().then(function(){
      GithubAPI.githubProfile().then(function(res){
        console.log(res);
        vm.profile = res;
      });
      GithubAPI.githubRepos().then(function(res){
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          res[i].card = true;
          if (res[i].description === null) {
            res[i].description = "No description Available";
          }
        }
        vm.repos = res;
      });
    });
  };

}
