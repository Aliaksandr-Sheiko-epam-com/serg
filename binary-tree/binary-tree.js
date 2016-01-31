'use strict';

class BinaryTree {
	
	constructor() {
		this.root = null;
	}

	insert(data) {
		if (this.root == null) {
			this.root = new Node(data, null, null);
		} else {
			this.insertNode(data, this.root);
		}
	}

	contains(data) {

	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
	
	insertNode(data, currentNode) {
		if (data < currentNode.data) {
			if (currentNode.left == null) {
				currentNode.left = new Node(data, null, null);
			} else {
				this.insertNode(data, currentNode.left);
			}
		} else {
			if (currentNode.right == null) {
				currentNode.right = new Node(data, null, null);
			} else {
				this.insertNode(data, currentNode.right);
			}
		}
	}
}
