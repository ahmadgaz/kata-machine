interface Node<T> {
    isRed: boolean;
    value: T;
    parent: Node<T> | undefined;
    leftChild: Node<T> | undefined;
    rightChild: Node<T> | undefined;
}

export default class RedBlackTree<T> {
    private root: Node<T> | undefined;
    insert(value: T) {
        let curr: Node<T> | undefined = this.root;
        let prev: Node<T> | undefined = undefined;
        const newNode = { isRed: true, value } as Node<T>;
        while (curr !== undefined) {
            prev = curr;
            if (value < curr.value) curr = curr.leftChild;
            else curr = curr.rightChild;
        }
        newNode.parent = prev;
        if (prev === undefined) this.root = newNode;
        else if (newNode.value < prev.value) prev.leftChild = newNode;
        else prev.rightChild = newNode;
        if (this.root) {
            this.fixUp(this.root, newNode);
            this.root.isRed = false;
        }
    }
    // delete() {}
    fixUp(root: Node<T>, node: Node<T>) {
        if (!node.parent?.isRed) return;
        if (node.parent === node.parent.parent?.leftChild)
            this.strategyLeft(root, node);
        else this.strategyRight(root, node);
    }
    strategyLeft(root: Node<T>, node: Node<T>) {
        if (!node.parent) return;
        const uncle: Node<T> | undefined = node.parent.parent?.rightChild;
        if (uncle?.isRed) {
            node.parent.isRed = false;
            uncle.isRed = false;
            if (node.parent.parent) {
                node.parent.parent.isRed = true;
                this.fixUp(root, node.parent.parent);
            }
        } else {
            if (node === node.parent.rightChild) this.rotateLeft(node.parent);
            node.isRed = false;
            node.parent.isRed = true;
            this.rotateRight(node.parent);
        }
    }
    strategyRight(root: Node<T>, node: Node<T>) {
        if (!node.parent) return;
        const uncle: Node<T> | undefined = node.parent.parent?.leftChild;
        if (uncle?.isRed) {
            node.parent.isRed = false;
            uncle.isRed = false;
            if (node.parent.parent) {
                node.parent.parent.isRed = true;
                this.fixUp(root, node.parent.parent);
            }
        } else {
            if (node === node.parent.leftChild) this.rotateRight(node.parent);
            node.isRed = false;
            node.parent.isRed = true;
            this.rotateLeft(node.parent);
        }
    }
    rotateLeft(node: Node<T>) {
        const right = node.rightChild;
        node.rightChild = right?.leftChild;
        if (right?.leftChild) right.leftChild.parent = node;
        if (right) right.parent = node.parent;
        if (!node.parent) this.root = right;
        else if (node === node.parent.leftChild) node.parent.leftChild = right;
        else node.parent.rightChild = right;
        if (right) right.leftChild = node;
        node.parent = right;
    }
    rotateRight(node: Node<T>) {
        const left = node.leftChild;
        node.leftChild = left?.rightChild;
        if (left?.rightChild) left.rightChild.parent = node;
        if (left) left.parent = node.parent;
        if (!node.parent) this.root = left;
        else if (node === node.parent.rightChild) node.parent.rightChild = left;
        else node.parent.leftChild = left;
        if (left) left.rightChild = node;
        node.parent = left;
    }
    print() {
        const arr: { value: T; red: boolean; parent: T | undefined }[] = [];
        const q: Node<T>[] = [];
        if (this.root) q.push(this.root);
        while (q.length) {
            const next = q.shift();
            if (!next) continue;
            arr.push({
                value: next.value,
                red: next.isRed,
                parent: next.parent?.value,
            });
            if (next.leftChild) q.push(next.leftChild);
            if (next.rightChild) q.push(next.rightChild);
        }
        console.log(arr);
    }
}
