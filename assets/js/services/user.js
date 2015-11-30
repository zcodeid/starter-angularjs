app.factory('UserSvc', function($http, config) {
	return {
		get: function (q, offset, limit){
			var url = config.url + "/user?";
            var filter = "filter[where][name][regexp]=" + q + "/i&";
            var limit = "filter[limit]=" + limit + "&";
            var offs = "filter[offset]=" + offset + "&";
            var order = "filter[order]=name&";
			return $http.get(config.url + '/user');
		},
		count: function (){
			return $http.get(config.url + '/user/count');
		},
		save: function (data){
			if (data.id === null || data.id === undefined){
				return $http.post(config.url + '/user', data);
			}else{
				return $http.put(config.url + '/user/' + data.id, data);
			}
		},
		delete: function (data){
			return $http.delete(config.url + '/user/' + data.id);
		}
	};
});