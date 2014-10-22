exports.crud = function() {
	var db = Titanium.Database.open('database');
	db.execute('CREATE TABLE IF NOT EXISTS beerdata (id INTEGER PRIMARY KEY, title TEXT, desc TEXT)');
	db.close();
	
	this.create = function(beer) {
		var db = Titanium.Database.open('database');
		db.execute('INSERT INTO beerdata (title, desc) VALUES (?, ?)', beer.title, beer.desc);
		db.close();
		return this.read();
	};
	this.read = function() {
		var captureArray = [];
		var db = Ti.Database.open('database');
		var rows = db.execute('SELECT id, title, desc FROM beerdata');
		while (rows.isValidRow()) {
			captureArray.push({
				id : rows.fieldByName('id'),
				title : rows.fieldByName('title'),
				desc : rows.fieldByName('desc'),
			});
			rows.next();
		}
		rows.close();
		db.close();
		loadView(captureArray);
		return captureArray;
	};
	this.update = function(beer, id) {
		var db = Titanium.Database.open('database');
		db.execute('UPDATE beerdata SET title=? WHERE id=?', beer, id);
		db.close();
	};
	this.dele = function(id) {
		var db = Titanium.Database.open('database');
		db.execute('DELETE FROM beerdata');
		db.close();
	};
	this.destroy = function(id) {
		var db = Titanium.Database.open('database');
		db.execute('DELETE FROM beerdata WHERE id= ?', id);
		db.close();
	};

}; 