
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G',];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.method_tile_shuffle = function() {
	var i = this.length, j, temp;
	while(--i > 0 {
	j = Math.floor(Math.random() * (i+)) ;
	temp = this[j];
	this[j] = this [i];
	this[i] = thmp;
	// body...
	}
}
function newBoard() {
	tiles_flipped =0;
	var output = '';
	memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++) {
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}}
}	window.addEventListener(newBoard());