exports.definition = {
	config : {
		"columns": {
			"id":"INTEGER PRIMARY KEY",
			"City":"text", 
			"Image":"text",
			"DealValidTill":"text",
			"Price":"INTEGER",
			"Class":"text",
			"Region":"text",
			"details":"text"
		},
		
		"URL": "https://funfares-web.herokuapp.com/Destinations/json", 
	
		"adapter" : {
			"type" : "sqlrest",
			"collection_name" : "webjson", 
			"idAttribute" : "id",
		},
		
		// delete all models on fetch
	   "deleteAllOnFetch": true
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
			comparator: function (model) {
				return model.get("region");
			}


		});

		return Collection;
	}
};