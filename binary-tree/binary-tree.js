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
		return this.containsNode(data, this.root);
	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
	
	containsNode(data, currentNode) {
		if (currentNode == null) {
			return false;
		}
		else if (data < currentNode.data) {
			return this.containsNode(data, currentNode.left);
		}
		else if (data > currentNode.data) {
			return this.containsNode(data, currentNode.right);
		}
		
		return true;
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
