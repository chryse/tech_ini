function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}

function BST() {
	this.root = null;
}

BST.prototype.insert = function(data) {
	this.root = this.insertNode(this.root, data);
}

BST.prototype.insertNode = function(node, data) {
	if(node == null) {
		return new Node(data, null, null);
	}
	else {
		if(data < node.data) {
			node.left = this.insertNode(node.left, data);
		}
		else {
			node.right = this.insertNode(node.right, data);
		}
	}
	return node;
}

BST.prototype.show = function() {
	if(this.root == null) {
		return null;
	}
	else {
		var queue = [this.root];
		while(queue.length > 0) {
			var current = queue[0];
			console.log(current.data + " ");

			if(current.left) {
				if(current.data < current.left) {
					return false;
				}
				queue.push(current.left);
			}
			if(current.right) {
				if(current.data > current.right) {
					return false;
				}
				queue.push(current.right);
			}

			queue.shift();
		}
	}
	return true;
}

var bst = new BST();
bst.insert(10);
bst.insert(11);
bst.insert(9);
bst.insert(4);

console.log(bst.show());
