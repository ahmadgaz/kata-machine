class Node<T> {
    public value: T;
    public next?: Node<T>;
    constructor(value: T, next?: Node<T>) {
        this.value = value;
        this.next = next;
    }
}
function removeNode<T>(node?: Node<T>): Node<T> | undefined {
    if (!node) return undefined;
    return node.next;
}
function createNode<T>(value: T, next?: Node<T>): Node<T> {
    return new Node(value, next);
}
const isOutOfBound = <T>(idx: number, cur?: Node<T>): boolean =>
    idx < 0 || (!cur && idx !== 0);
const isAtDesiredIndex = (idx: number): boolean => idx === 0;
const isNotFound = <T>(value: T, cur?: Node<T>): boolean =>
    !cur || (!cur.next && value !== cur.value);
const isFound = <T>(value: T, cur?: Node<T>): boolean => value === cur?.value;
function getNodeByValue<T>(value: T, from?: Node<T>): Node<T> | undefined {
    if (isNotFound(value, from)) return undefined;
    else if (isFound(value, from)) return from;
    return getNodeByValue(value, from?.next);
}
function getNodeIdxByValue<T>(
    value: T,
    from?: Node<T>,
    idx: number = 0,
): number {
    if (isNotFound(value, from)) return -1;
    else if (isFound(value, from)) return idx;
    return getNodeIdxByValue(value, from?.next, idx + 1);
}
function getNodeByIdx<T>(idx: number, from?: Node<T>): Node<T> | undefined {
    if (!from || isOutOfBound(idx, from.next)) return undefined;
    else if (isAtDesiredIndex(idx)) return from;
    return getNodeByIdx(idx - 1, from.next);
}
function insertNodeAtIdx<T>(
    value: T,
    idx: number,
    from?: Node<T>,
): Node<T> | undefined {
    if (isOutOfBound(idx, from)) return from;
    else if (!from || isAtDesiredIndex(idx)) return createNode(value, from);
    const next = insertNodeAtIdx(value, idx - 1, from?.next);
    return createNode(from.value, next);
}
function removeNodeByIdx<T>(idx: number, from?: Node<T>): Node<T> | undefined {
    if (!from || isOutOfBound(idx, from.next)) return from;
    else if (isAtDesiredIndex(idx)) return removeNode(from);
    const next = removeNodeByIdx(idx - 1, from.next);
    return createNode(from.value, next);
}

function removeNodeByValue<T>(value: T, from?: Node<T>): Node<T> | undefined {
    const idx = getNodeIdxByValue(value, from);
    return removeNodeByIdx(idx, from);
}
export class SinglyLinkedList<T> {
    public length: number = 0;
    private head?: Node<T>;
    // For O(1) appending, add a tail
    prepend(value: T): void {
        this.head = insertNodeAtIdx(value, 0, this.head);
        ++this.length;
    }
    append(value: T): void {
        this.head = insertNodeAtIdx(value, this.length, this.head);
        ++this.length;
    }
    insertAt(value: T, idx: number): void {
        this.head = insertNodeAtIdx(value, idx, this.head);
        ++this.length;
    }
    remove(value: T): T | undefined {
        const removedValue = getNodeByValue(value, this.head)?.value;
        if (!removedValue) return undefined;

        this.head = removeNodeByValue(value, this.head);
        --this.length;
        return removedValue;
    }
    removeAt(idx: number): T | undefined {
        const removedValue = getNodeByIdx(idx, this.head)?.value;
        if (!removedValue) return undefined;

        this.head = removeNodeByIdx(idx, this.head);
        --this.length;
        return removedValue;
    }
    get(idx: number): T | undefined {
        return getNodeByIdx(idx, this.head)?.value;
    }
}
