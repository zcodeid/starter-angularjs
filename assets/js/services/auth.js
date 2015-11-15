app.factory('AuthSvc', function($http, config, localStorageService) {
    return {
        login: function(data) {
            return $http.post(config.url + "/Account/login", data);
        },
        getUser: function(id) {
            var token = localStorageService.get('token');
            var url = config.url + '/account/' + id + '?access_token=' + token;
            return $http.get(url);
        }
    }
});
