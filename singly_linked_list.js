function Node(element) {
	this.element = element;
	this.next = null;
}

function SinglyLinkedList() {
	this.head = new Node("head");
}

SinglyLinkedList.prototype.find = function(element) {
	var currentNode = this.head;
	while(currentNode.element !== element) {
		currentNode = currentNode.next;
	}
	return currentNode;
}

SinglyLinkedList.prototype.insert = function(newElement, element) {
	var newNode = new Node(newElement);
	var current = this.find(element);
	newNode.next = current.next;
	current.next = newNode;
}

SinglyLinkedList.prototype.display = function() {
	var currentNode = this.head;
	while(currentNode.next !== null) {
		console.log(currentNode.next.element);
		currentNode = currentNode.next;
	}
}



var students = new SinglyLinkedList();
students.insert("Jun", "head");
students.insert("Micheal", "Jun");
students.insert("Claire", "Micheal");
students.insert("John", "Claire");
students.display();