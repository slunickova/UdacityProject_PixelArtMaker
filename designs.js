// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	const inputHeight = $("#inputHeight").val();
	const inputWidth = $("#inputWeight").val();
	const table = $("#pixelCanvas");

	table.children().remove();

	for (let x = 1; x <= inputHeight; x++) {
		table.append("<tr></tr>")
		for (let y = 1; y <= inputWidth; y++) {
			table.children().last().append("<td></td>");
			table.css("background-color", "white");
		}
	}

//choose color
	table.on("click", "td", function() {
		const colorPicker = $("#colorPicker");
		const myColor = colorPicker.val();
    	$(this).css("background-color", myColor);
	});
//uncolor with doubleclick
	table.on("dblclick", "td", function() {
    	$(this).css("background-color", "white");
	})
};

//create canvas
const submit = $("#submitButton");
submit.on("click", function(event) {
	event.preventDefault();
	makeGrid();
});
