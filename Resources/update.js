exports.updater = function(data) {
	var data = data;
	var newCrud = new crud();
	var updateWin = Ti.UI.createWindow({
		backgroundColor: "#ccc",
		fullscreen: true
	});
	var beerName = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top : "44%",
		width : "80%",
		height : "6%",
		hintText : "Please enter your first name.",
		value: data.title
	});
	var upDate = Ti.UI.createButton({
		bottom : "12%",
		title : "Update",
		color : "#000",
		height : "8%",
		width : "50%",
		backgroundColor : "#fff",
		borderRadius : "10dp"
	});
	upDate.addEventListener('click', function(evt){
		var newVal = beerName.value;
		var id = data.id;
		console.log(data);
		newCrud.update(newVal, id);
		updateWin.close();
		newCrud.read();
		
	});
	updateWin.add(upDate);
	updateWin.add(beerName);
	updateWin.open();
};
