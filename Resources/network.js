exports.netCheck = function() {
	var url = "http://api.openbeerdatabase.com/v1/beers.json";
	var client = Ti.Network.createHTTPClient({
		onload : function(evt) {
			var newCrud = new crud();
			newCrud.dele();
			var data = JSON.parse(this.responseText);
			var beers = data.beers;
			for ( i = 0,
			j = beers.length; i < j; i++) {
				var post = {
					title : beers[i].name,
					desc : beers[i].description
				};
				newCrud.create(post);
			}
		},
		onerror : function(evt) {
			if (!Ti.Network.online) {

				alert("Could not find connection!");
				var newCrud = new crud();
				newCrud.read();
			}
		}
	});
	client.open("GET", url);
	client.send();
};

