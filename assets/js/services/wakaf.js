app.factory('WakafSvc', function($http, config, FlashData) {
    return {
        get: function() {
            var url = config.url + "/Wakaf?access_token=" + FlashData.getToken();
            return $http.get(url);
        },
        save: function(data) {
            var url = config.url + "/Wakaf?id=" + data.id + "?access_token=" + FlashData.getToken();
            return $http.put(url, data);
        }
    }
});