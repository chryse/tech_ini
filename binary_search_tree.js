function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;

	this.show = function() {
		return this.data;
	}
}

function BST() {
	this.root = null;
}

BST.prototype.insert = function(data) {
	this.root = this.insertNode(this.root, data);
}

BST.prototype.insertNode = function(node, data) {
	if(node === null) {
		return new Node(data, null, null);
	}
	else {
		if(data < node.data) {
			node.left = this.insertNode(node.left, data);
		}
		else {
			node.right = this.insertNode(node.right, data);
		}
		return node;
	}
}

BST.prototype.remove = function(data) {
	this.root = this.removeNode(this.root, data);
}

BST.prototype.removeNode = function(node, data) {
	if(node === null) {
		return null;
	}
	if(data == node.data) {
		// node has no children
		if(node.left === null && node.right === null) {
			return null;
		}

		// node has no left child
		if(node.left === null) {
			return node.right;
		}

		// node has no right child
		if(node.right === null) {
			return node.left;
		}

		// node has two children
		var tmpNode = this.getSmallest(node.right);
		node.data = tmpNode.data;
		node.right = this.removeNode(node.right, tmpNode.data);
		return node;
	}

	else if(data < node.data) {
		node.left = this.removeNode(node.left, data);
		return node;
	}

	else {
		node.right = this.removeNode(node.right, data);
		return node;
	}
}

BST.prototype.getSmallest = function(node) {
	var current = node;
	while(current.left !== null) {
		current = current.left;
	}
	return current;
}

// find data
BST.prototype.find = function(data) {
	var current = this.root;
	while(current && current.data !== data) {
		if(data < current.data) {
			current = current.left;
		}
		else {
			current = current.right;
		}
	}
	console.log(current);
	return current;
}

// find min data
BST.prototype.getMin = function() {
	var current = this.root;
	while(current.left !== null) {
		current = current.left;
	}
	console.log("min:", current.data);
	return current.data;
}

// find max data
BST.prototype.getMax = function() {
	var current = this.root;
	while(current.right !== null) {
		current = current.right;
	}
	console.log("max:", current.data);
	return current.data;
}

BST.prototype.levelOrder = function() {
	if(this.root === null) {
		return null;
	}
	else {
		var queue = [this.root];
		while(queue.length > 0) {
			var current = queue[0];
			console.log("current.data", current.data);

			if(current.left) {
				queue.push(current.left);
			}

			if(current.right) {
				queue.push(current.right);
			}

			queue.shift();
		}
	}
}

BST.prototype.inOrder = function(node) {
	if(node == null) return;
	else {
		this.inOrder(node.left);
		console.log(node.show() + " ");
		this.inOrder(node.right);
	}
}

BST.prototype.preOrder = function(node) {
	if(node == null) return;
	else {
		console.log(node.show() + " ");
		this.preOrder(node.left);
		this.preOrder(node.right);
	}
}

BST.prototype.postOrder = function(node) {
	if(node == null) return;
	else {
		this.postOrder(node.left);
		this.postOrder(node.right);
		console.log(node.show() + " ");
	}
}


BST.prototype.checkBST = function() {
	if(this.root == null) return null;

	else {
		var view = [this.root];
		while(view.length > 0) {
	  		var current = view[0];

			if(current.left) {
				if(current.data < current.left.data) {
					return false;
				}
				view.push(current.left);
			}

			if(current.right) {
				if(current.data > current.right.data) {
					return false;
				}
				view.push(current.right);
			}
			view.shift();
		}
		return true;
	}
}


var bst = new BST();
bst.insert(65);
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(1);
bst.insert(4);
// bst.find(1);
// bst.getMin();
// bst.getMax();
console.log(bst);
// console.log("inOrder==============");
// bst.inOrder(bst.root);
// console.log("preOrder==============");
// bst.preOrder(bst.root);
// console.log("postOrder==============");
// bst.postOrder(bst.root);
// console.log("levelOrder==============");
// bst.levelOrder();
// console.log("checkBST==============");
// console.log(bst.checkBST());
