module.exports = (function() {
	function Car(name) {
		this.name;
	}

	Car.prototype.displayName = function() {
		console.log(this.name);
	}

	return Car;
})();