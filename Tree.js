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
}

let root = new Node(3)
root.insert(new Node(7))
root.insert(new Node(6))
root.insert(new Node(8))
root.insert(new Node(3))
root.insert(new Node(1))

console.log(root.contains(8)) // true
console.log(root.contains(10)) // false
console.log(root.contains(6)) // true