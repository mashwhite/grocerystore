
// console.log("hello");

//when you click on the bread button the bread items are display_bread


var breadItems = [
	{
		img: './images/frenchbread.jpg',
		name: 'Frenchbread'
	},
	{
		img: './images/halabread.jpg',
		name: 'Hala bread'
	},
	{
		img: './images/sourdough.jpg',
		name: 'Sourdough'
	},
	{
		img: './images/italianbread.jpg',
		name: 'Italian bread'
	},
	{
		img: './images/raisinbread.jpg',
		name: 'Raisin bread'
	}
 ];



function display_items() {	
	// document.body.appendChild(breadItems);

	for (var i = 0; i < breadItems.length; i++) {
		console.log(breadItems[i].img);
		var lookAtBread = document.getElementById("lookAtBread");
            var img = document.createElement("img");
            var br = document.createElement("br");
            var p = document.createElement("p");
            img.src = breadItems[i].img;
            p.innerHTML = breadItems[i].name;
            lookAtBread.appendChild(img);
            lookAtBread.appendChild(p);
            lookAtBread.appendChild(br);

        }
	}





//when you click on the bread button the bread items are display_bread
//function display_items() {
//	document.getElementsById('#bread')
//	document.body.appendChild(newImage);
//}


//document.getElementById('#bread').onclick = function(breadItems) {
	//myFunction()};   


//function my_Function(src, width, height, alt) {
//	var img = document.getElementById("img");
//	img.src = src;
//	img.width = width;
//	img.height = height;
//	img.alt = alt;
//
//	document.body.appendChild(img);
//}




var shoppingCart = [];


var cheeseItems = [
	{
		img: './images/brie.jpg',
		name: 'Brie'
	},
	{
		img: './images/gorgonzola.jpg',
		name: 'Gorgonzola'
	},
	{
		img: './images/gouda.jpeg',
		name: 'Gouda'
	},
	{
		img: './images/gruyere.jpg',
		name: 'Gruyere'
	},
	{
		img: './images/havarti.jpg',
		name: 'Havarti'
	}
];

var grapeItems = [
	{
		img: './images/autumngrapes.jpg',
		name: 'Autumn grapes'
	},
	{
		img: './images/canadicegrapes.jpg',
		name: 'Canadice grapes'
	},
	{
		img: './images/flamegrapes.jpg',
		name: 'Flame grapes'
	},
	{
		img: './images/italiagrapes.jpg',
		name: 'Italia grapes'
	},
	{
		img: 'images/thomcordgrapes.jpg',
		name: 'Thomcord grapes'
	}
];
