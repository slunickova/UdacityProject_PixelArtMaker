// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	var inputHeight = $("#inputHeight").val();
	var inputWidth = $("#inputWeight").val();
	var table = $("#pixelCanvas");
	
	table.children().remove();

	for (var x = 1; x <= inputHeight; x++) {
		table.append("<tr></tr>")
		for (var y = 1; y <= inputWidth; y++) {
			table.children().last().append("<td></td>");
			table.css("background-color", "white");
		}
	}

//choose color
	table.on("click", "td", function() {
		var colorPicker = $("#colorPicker");
		var myColor = colorPicker.val();
    	$(this).css("background-color", myColor);
	});
//uncolor with doubleclick
	table.on("dblclick", "td", function() {
    	$(this).css("background-color", "white");    
	})
};

//create canvas
var submit = $("#submitButton");
submit.on("click", function(event) {
	event.preventDefault();
	makeGrid();	
});
