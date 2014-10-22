exports.view = function(capture) {
	var tableWin = Ti.UI.createWindow({
		fullscreen : true,
		backgroundColor : "#ccc"
	});
	listButton.addEventListener("click", function(evt) {
		tableWin.open();
	});
	back.addEventListener("click", function(evt) {
		tableWin.close();
		win.open();
	});
	var rowArray = [];
	for (var i in capture) {
		var row = Ti.UI.createTableViewRow({
			height : "8%",
			object : capture[i]
		});
		var nameLabel = Ti.UI.createLabel({
			left : 5,
			top : 5,
			text : capture[i].title
		});
		var lastLabel = Ti.UI.createLabel({
			left : 5,
			top : 25,
			text : capture[i].desc
		});
		row.add(lastLabel);
		row.add(nameLabel);
		rowArray.push(row);
	};
	table.data = rowArray;
	tableWin.add(back);
	tableWin.add(table);
};
