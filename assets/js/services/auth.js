app.factory('AuthSvc', function($http, config, FlashData) {
    return {
        login: function(data) {
            return $http.post(config.url + "/Account/login", data);
        }
    }
});

app.factory('FlashData', function() {
    var token = null;
    return {
        getToken: function() {
            return token;
        },
        setToken: function(tk) {
            token = tk;
        }
    }
});
