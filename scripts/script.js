function color(a) {
	sert.style.backgroundImage = 'url(./img/sert/' + a + '-preview.jpg)';
	sert.style.filter="grayscale(0)";
}; 

function chb() {
	sert.style.filter="grayscale(1)";
};

function col() {
	sert.style.filter="grayscale(0)";
};

function star_color(quantity, direction){
	if (direction != 'on') {
		var color = "rgb(114, 119, 120)";
		quantity = 5;
	} else{
		var color = "rgb(235, 221, 145)";
	}
	for (let i = 1; i <= quantity; i++) {
		let star_id = 'star_' + i;
		let star = document.getElementById(star_id);
		star.style.fill = color; 
	}
};

function tag_hover(id, direction) {
	let stars = startags[id];
	star_color(stars, direction);
	if (direction == 'on') {
		let html_object = document.getElementById(id);
		let style_object = window.getComputedStyle(html_object);
		old_tag_color = style_object.color; 
		old_tag_border_color = style_object.borderColor; 
		old_tag_background_color = style_object.backgroundColor; 
		let tag_full_name_class = document.getElementById(id).className;
		let tag_name_class = tag_full_name_class;
		let tag_name_class_hover = tag_name_class.slice(4) + '_hover';
		let new_tag_object = document.getElementById(tag_name_class_hover);
		let new_style_hover = window.getComputedStyle(new_tag_object);
		let new_color_hover = new_style_hover.color;
		let new_border_color = new_style_hover.borderColor;
		let new_background_color = new_style_hover.backgroundColor;
		document.getElementById(id).style.color = new_color_hover;
		document.getElementById(id).style.borderColor = new_border_color;
		document.getElementById(id).style.backgroundColor = new_background_color;
	} else {
		document.getElementById(id).style.color = old_tag_color;
		document.getElementById(id).style.borderColor = old_tag_border_color;
		document.getElementById(id).style.backgroundColor = old_tag_background_color;
	}
};

function hover(id, direction) {
	if (direction == 'on') {
		let tags_ids = hover_list.get(id);
		for (let tag_id of tags_ids) {
			let html_object = document.getElementById(tag_id);
			let style_object = getComputedStyle(html_object);
			let tag_color = style_object.color;
			let tag_border_color = style_object.borderColor;
			let tag_background_color = style_object.backgroundColor;
			tag_colors.push(tag_color);
			tag_border_colors.push(tag_border_color);
			tag_background_colors.push(tag_background_color);
			let tag_full_name_class = document.getElementById(tag_id).className;
			let tag_name_class = tag_full_name_class.slice(4);
			let tag_name_class_hover = tag_name_class + '_hover';
			let html_object_hover = document.getElementById(tag_name_class_hover);
			let style_object_hover = window.getComputedStyle(html_object_hover)
			let tag_hover_color = style_object_hover.color;
			let tag_hover_border_color = style_object_hover.borderColor;
			let tag_hover_background_color = style_object_hover.backgroundColor;
			html_object.style.color = tag_hover_color;
			html_object.style.borderColor = tag_hover_border_color;
			html_object.style.backgroundColor = tag_hover_background_color;
		};
	} else {
		let tags_ids = hover_list.get(id);
		for (let tag_id of tags_ids) {
			document.getElementById(tag_id).style.color = tag_colors.shift();
			document.getElementById(tag_id).style.borderColor = tag_border_colors.shift();
			document.getElementById(tag_id).style.backgroundColor = tag_background_colors.shift();
		};
	}
};

var old_tag_color;
var old_tag_border_color;
var old_tag_bsckground_color;
var tag_colors = [];
var tag_border_colors = [];
var tag_background_colors = [];

var sert = document.getElementById('preview');
var tags = document.getElementsByClassName('tag'); 

var startags = {
	'Inventor': 5,
	'AutoCAD': 5,
	'Photoshop_CS': 3,
	'Premier_Pro': 1,
	'Power_Point': 4,
	'Figma': 1,
	'PyCharm': 4,
	'Sublime_Text': 4,
	'Syblime_Merget': 3,
	'Console': 3,
	'Python': 3,
	'GIT': 3,
	'HTML': 5,
	'CSS': 3,
	'JavaScript': 1,
	'PostgerSQL': 1,
	'Linux': 3,
	'django': 3,
	'BeautifulSoup': 2,
	'calendar': 3,
	'collections': 3,
	'contextlib': 2,
	'cProfile': 3,
	'datetime': 3,
	'hashlib': 3,
	'json': 3,
	'logging': 3,
	'mypy': 3,
	'openpyxl': 3,
	'os': 3,
	'PIL': 2,
	'pathlib': 3,
	'pickle': 3,
	'pyperclip': 3,
	'pytils': 3,
	're': 3,
	'random': 3,
	'select': 2,
	'shutil': 3,
	'socket': 3,
	'svgwrite': 4,
	'sqlite': 3,
	'sys': 3,
	'threading': 3,
	'time': 3,
	'timeit': 3,
};


var hover_list = new Map();
hover_list.set('id_1', ['Inventor', 'AutoCAD', 'aim', 'ipt', 'dwg', 'step']);
hover_list.set('id_2', ['Inventor', 'Photoshop_CS', 'Power_Point', 'aim', 'ipt', 'step','png', 'pptx']);
hover_list.set('id_3', ['Inventor', 'Photoshop_CS', 'Power_Point', 'aim', 'ipt', 'step','png', 'pptx']);
hover_list.set('id_4', ['PyCharm', 'Sublime_Text', 'Syblime_Merget', 'Console', 'Python', 'GIT', 'CSS', 'JavaScript', 'collections', 'contextlib', 'cProfile', 'datetime', 'json', 'logging', 'openpyxl', 'os', 'PIL', 'pathlib', 'random', 're', 'shutil', 'svgwrite', 'sys',  'json_2', 'obj', 'png', 'svg', 'step' ]);
hover_list.set('id_5', ['PyCharm', 'Sublime_Text', 'Syblime_Merget', 'Console', 'Python', 'GIT', 'CSS', 'JavaScript', 'collections', 'contextlib', 'cProfile', 'datetime', 'json', 'logging', 'openpyxl', 'os', 'PIL', 'pathlib', 'random', 're', 'shutil', 'svgwrite', 'sys',  'json_2', 'obj', 'png', 'svg', 'step' ]);
hover_list.set('id_6', ['Photoshop_CS', 'Power_Point', 'pptx']);
hover_list.set('id_7', ['Linux', 'PostgerSQL']);
hover_list.set('id_8', ['Python', 'Linux', 'PostgerSQL',]);
hover_list.set('id_9', ['Python', 'django',]);
hover_list.set('id_10', ['Python', 'Console', 'pyperclip', 'time', 'socket', 'pickle', 'threading', 'sys', 'select', ]); // copy_net_past
hover_list.set('id_11', ['Photoshop_CS', 'PyCharm', 'Sublime_Text', 'Syblime_Merget', 'Python', 'GIT', 'HTML', 'CSS', 'django', 'collections', 'datetime', 'calendar', 'hashlib', 'logging', 'pytils', 'sqlite',]); // raspisanie
hover_list.set('id_12', ['Python', 'GIT', 'CSS', 'JavaScript', 'django', 'BeautifulSoup', 'collections', 'json', 'openpyxl', 'logging', 'os', 'sqlite', ]); // portfolio
hover_list.set('id_13', ['Python', 'Console', 'pyperclip', 'gcode', 'logging', 'mypy']);  // gcode_editor


for (let i = 1; i <= hover_list.size; i++) {
	let element_id = 'id_' + i;
	document.getElementById(element_id).onmouseover = function () {hover(this.id, 'on')};
	document.getElementById(element_id).onmouseout = function () {hover(this.id, 'out')};
	};


for (let j = 0; j < 6; j++) {
	let img_id = 'img_' + j;
	let a_id = 'a_' + j;
	document.getElementById(img_id).onmouseover = function () {color(j);};
	document.getElementById(img_id).onmouseout = function () {chb();};
	document.getElementById(a_id).onmouseover = function () {color(j);};
	document.getElementById(a_id).onmouseout = function () {chb();};
}


for (let tag of tags) {
	document.getElementById(tag.id).onmouseover = function () {tag_hover(this.id, 'on')};
	document.getElementById(tag.id).onmouseout = function () {tag_hover(this.id, 'out')};
}


$(document).ready(function(){
	$(".group1").colorbox({rel:'group1'});
	$(".group2").colorbox({rel:'group2'});
	$("#click").click(function(){ 
		$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
		return false;
	});
});