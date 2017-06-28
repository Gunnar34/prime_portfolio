myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  var oauthToken;
  var username;

  //Call to Github API to fetch user's profile info
  this.getAccess = function(){
      console.log('in access');
      return $http.get('/access').then(function(response){
        oauthToken = response.data.oauthToken;
        username = response.data.username;
        return "success";
      });
    };

  this.githubProfile = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username,
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then(function(response) {
      return response.data;
    });
  };

  //Call to Github API to fetch list of user's repos
  this.githubRepos = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos',
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then(function(response) {
      return response.data;
    });
  };
});
