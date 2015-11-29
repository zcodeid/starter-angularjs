app.factory('BranchSvc', function($http, config) {
	return {
		get: function (q, offset, limit){
			var url = config.url + "/branch?";
            var filter = "filter[where][name][regexp]=" + q + "/i&";
            var limit = "filter[limit]=" + limit + "&";
            var offs = "filter[offset]=" + offset + "&";
            var order = "filter[order]=name&";
			return $http.get(config.url + '/branch');
		},
		count: function (){
			return $http.get(config.url + '/branch/count');
		},
		save: function (data){
			if (data.id === null || data.id === undefined){
				return $http.post(config.url + '/branch', data);
			}else{
				return $http.put(config.url + '/branch/' + data.id, data);
			}
		},
		delete: function (data){
			return $http.delete(config.url + '/branch/' + data.id);
		}
	};
});