export default function in_order_search(head: BinaryNode<number>): number[] {
    let arr: number[] = [head.value];
    if (head.left) arr = in_order_search(head.left).concat(arr);
    if (head.right) arr = arr.concat(in_order_search(head.right));
    return arr;
}
