$(document).ready(function(){
	newGrid(16,16);
})

function newGrid(height, width){

	if (height > 50 || height <= 0)
		height = prompt("Enter 0 < height <= 50");
	if (width > 50 || width <= 0)
		width = prompt("Enter 0 < width <= 50");

	$("#grid").empty();

	new_grid = "";
	for (var i = 0; i < height; i++){
		for (var j = 0; j < width; j++){
			new_grid += "<div></div>"
		}
		new_grid += "<br>"
	}

	$("#grid").append(new_grid);
	$("#grid div").hover(function(){
		$(this).css('background-color', '#F34F54');
	})
}

function clearGrid(){
	$("#grid div").css("background-color", "white");
};