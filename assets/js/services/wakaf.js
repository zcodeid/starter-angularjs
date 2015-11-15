app.factory('WakafSvc', function($http, config, localStorageService) {
    return {
        get: function() {
        	var token = localStorageService.get('token');
            var url = config.url + "/Wakaf?access_token=" + token;
            return $http.get(url);
        },
        save: function(data) {
        	var token = localStorageService.get('token');
            var url = config.url + "/Wakaf?id=" + data.id + "?access_token=" + token;
            return $http.put(url, data);
        },
        delete: function (data){
        	console.log('delete')
        	var token = localStorageService.get('token');
            var url = config.url + "/Wakaf/" + data.id + "?access_token=" + token;
            return $http.delete(url);
        }
    }
});