exports.detail = function(capture) {
	var capture = capture;
	var newCrud = new crud();
	var detailWin = Ti.UI.createWindow({
		fullscreen : true,
		backgroundColor : "#ccc"
	});
	var detailPic = Ti.UI.createImageView({
		image : "images/beer.png"
	});
	var title = Ti.UI.createLabel({
		top : "15%",
		text : capture.object.title,
		font : {
			fontSize : "65dp",
			fontFamily : "American Typewriter"
		},
		color : "#000"
	});
	var deleteButton = Ti.UI.createButton({
		bottom : "12%",
		title : "Delete this beer",
		color : "#000",
		height : "8%",
		width : "50%",
		backgroundColor : "#fff",
		borderRadius : "10dp"
	});
	var updateButton = Ti.UI.createButton({
		bottom : "21%",
		title : "Update this beer",
		color : "#000",
		height : "8%",
		width : "50%",
		backgroundColor : "#fff",
		borderRadius : "10dp"
	});
	updateButton.addEventListener("click", function(evt) {
		loadUpdate(capture.object);
	});
	deleteButton.addEventListener("click", function(e) {
		newCrud.destroy(capture.object.id);
		detailWin.close();
		var junk = newCrud.read();
		loadView(junk);
	});
	detailWin.addEventListener('click', function(e){
		detailWin.close();
	});
	detailWin.add(updateButton);
	detailWin.add(deleteButton);
	detailWin.add(detailPic);
	detailWin.add(title);
	detailWin.open();
};
