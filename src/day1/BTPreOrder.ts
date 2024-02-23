export default function pre_order_search(head: BinaryNode<number>): number[] {
    let arr: number[] = [head.value];
    if (head.left) arr = arr.concat(pre_order_search(head.left));
    if (head.right) arr = arr.concat(pre_order_search(head.right));
    return arr;
}
