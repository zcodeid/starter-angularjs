app.factory('RoleSvc', function($http, config) {
	return {
		get: function (q, offset, limit){
			if (q == undefined) q = "";
			var url = config.url + "/roles?";
            var filter = "filter[where][name][regexp]=" + q + "/i&";
            var limit = "filter[limit]=" + limit + "&";
            var offs = "filter[offset]=" + offset + "&";
            var order = "filter[order]=name&";
			return $http.get(url + filter + limit + offs + order);
		},
		count: function (){
			return $http.get(config.url + '/roles/count');
		},
		save: function (data){
			if (data.id === null || data.id === undefined){
				return $http.post(config.url + '/roles', data);
			}else{
				return $http.put(config.url + '/roles/' + data.id, data);
			}
		},
		delete: function (data){
			return $http.delete(config.url + '/roles/' + data.id);
		}
	};
});