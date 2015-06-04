function Product(name, price) {
	//if(!(this instanceof Product))
	//	return new Product(name, price);

	this.name = name;
	this.price = price;
	console.log(this);
}

function Food(name, price, category) {

	Product.call(this, name, price);
	this.category = category;
}

function Toy(name, price, category) {

	Product.apply(this, [name, price]);
	this.category = category;
}

function Phone(name, price, category) {
	Product.call(this, name, price);
	this.category = category;
}

//
Phone.prototype = Object.create(Product.prototype);
// Set the 'constructor' property to refer to Product
Phone.prototype.constructor = Phone;


var product = new Product("laptop", 1000);
var food = new Food("banana", 10, "fruit");
var toy = new Toy("Lego", 120, "toy");
var phone = new Phone("iPhone", 200, "elect");
console.log(product.name, product.price);
console.log(food.name, food.price, food.category);
console.log(toy.name, toy.price, toy.category);
console.log(phone.name, phone.price, phone.category);
