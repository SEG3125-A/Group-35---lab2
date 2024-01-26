// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		price: 1.99
	},
	{
		name: "celery",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		price: 2.20
	},
	{
		name: "carrot",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		price: 1.25
	},
	{
		name: "potato",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		price: 1.01
	},
	{
		name: "blueberry",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		price: 2.75
	},
	{
		name: "banana",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		price: 0.75
	},
	{
		name: "kiwi",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		price: 2.25
	},
	{
		name: "tofu",
		vegan: true,
		vegetarian: true,
		glutenFree: false,
		lactosefree: true,
		price: 2.99
	},
	{
		name: "white bread",
		vegan: true,
		vegetarian: true,
		glutenFree: false,
		lactosefree: true,
		price: 2.35
	},
	{
		name: "milk bread",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		price: 3.50
	},
	{
		name: "milk",
		vegan: false,
		vegetarian: true,
		glutenFree: true,
		lactosefree: false,
		price: 3.10
	},
	{
		name: "greek yogurt",
		vegan: false,
		vegetarian: true,
		glutenFree: true,
		lactosefree: false,
		price: 3.50
	},
	{
		name: "ground beef",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		price: 5.99
	},
	{
		name: "pork chops",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		price: 4.99
	},
	{
		name: "chicken breasts",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		price: 6.50
	},
	{
		name: "salmon",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		price: 10.00
	},
	{
		name: "tuna",
		vegan: false,
		vegetarian: false,
		glutenFree: true,
		lactosefree: true,
		price: 8.99
	},
	{
		name: "potato chips",
		vegan: true,
		vegetarian: true,
		glutenFree: true,
		lactosefree: true,
		price: 2.40
	},
	{
		name: "crackers",
		vegan: true,
		vegetarian: true,
		glutenFree: false,
		lactosefree: true,
		price: 1.70
	},
	{
		name: "key lime pie",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		price: 7.75
	},
	{
		name: "chocolate cake",
		vegan: false,
		vegetarian: true,
		glutenFree: false,
		lactosefree: false,
		price: 8.00
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseFree") && (prods[i].lactosefree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Vegan") && (prods[i].vegan == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}
//rounds sometimes bugged values to the hundredth 
function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	totalPrice = round(totalPrice, 2)
	return totalPrice;
}