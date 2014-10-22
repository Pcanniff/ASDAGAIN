var win = Ti.UI.createWindow({
	fullscreen : true,
	backgroundColor : "#ccc"
});
var titleLabel = Ti.UI.createLabel({
	top : "15%",
	text : "Beer!",
	font : {
		fontSize : "65dp",
		fontFamily : "American Typewriter"
	},
	color : "#000"
});
var png = Ti.UI.createImageView({
	image : "images/arm.png"
});
var back = Ti.UI.createButton({
	title : "Back",
	top : 0,
	left : 0,
	height : "7.5%",
	width : "25%"
});
var listButton = Ti.UI.createButton({
	bottom : "15%",
	title : "Take me to the list!",
	color : "#000",
	height : "8%",
	width : "50%",
	backgroundColor : "#fff",
	borderRadius : "10dp"
});
var viewWin = Ti.UI.createWindow({
	fullscreen : true,
	backgroundColor : "#0000ff"
});
var table = Ti.UI.createTableView({
	top : "7.5%",
});
table.addEventListener('click', function(evt) {
	loadDetail(evt.rowData);
});

var loadNet = require("network").netCheck;
var crud = require("crud").crud;
var loadView = require("exchange").view;
var loadDetail = require("detail").detail;
var loadUpdate = require("update").updater;

loadNet();
win.add(png);
win.add(listButton);
win.add(titleLabel);
win.open();
