class Node {
    right = null
    left = null

    constructor(data) {
        this.data = data;
    }

    insert(node) {
        if (node.data >= this.data) { // allow duplicate to the right
            if (this.right != null) {
                this.right.insert(node)
            } else {
                this.right = node
            }
        } else {
            if (this.left != null) {
                this.left.insert(node)
            } else {
                this.left = node
            }
        }
    }

    contains(data) {
        if (data == this.data) return true
        else {
            if (data > this.data) {
                if (this.right == null) return false
                else return this.right.contains(data)
            } else {
                if (this.left == null) return false
                else return this.left.contains(data)
            }
        }
    }

    printInOrder() {
        if (this.left != null) {
            this.left.printInOrder()
        } 
        console.log(this.data)
        if (this.right != null) {
            this.right.printInOrder()
        }
    }

    printPreOrder() {
        console.log(this.data)
        if (this.left != null) {
            this.left.printPreOrder()
        } 
        if (this.right != null) {
            this.right.printPreOrder()
        }
    }

    printPostOrder() {
        if (this.left != null) {
            this.left.printPreOrder()
        } 
        if (this.right != null) {
            this.right.printPreOrder()
        }
        console.log(this.data)
    }

    isBST(min, max) {
        if (this.data < min || this.data > max) {
            return false 
        }
        
        return (this.left == null || this.left.isBST(min, this.data)) && 
        (this.right == null || this.right.isBST(this.data, max))
    }
}

let root = new Node(50)
root.insert(new Node(10))
root.insert(new Node(5))
root.insert(new Node(30))
root.insert(new Node(20))
root.insert(new Node(40))
root.insert(new Node(80))
root.insert(new Node(70))
root.insert(new Node(90))
root.insert(new Node(85))

//root.printInOrder(root)
// root.printPreOrder(root)

console.log(root.isBST(-Infinity, Infinity))

let rootNonBinaryTree = new Node(50)
rootNonBinaryTree.left = new Node(10)
rootNonBinaryTree.left.left = new Node(10)
rootNonBinaryTree.left.right = new Node(30)
rootNonBinaryTree.left.right.left = new Node(40) // forced wrong

console.log(rootNonBinaryTree.isBST(-Infinity, Infinity))
