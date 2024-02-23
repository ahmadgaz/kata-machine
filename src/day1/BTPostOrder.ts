export default function post_order_search(head: BinaryNode<number>): number[] {
    let arr: number[] = [];
    if (head.left) arr = post_order_search(head.left);
    if (head.right) arr = arr.concat(post_order_search(head.right));
    return arr.concat(head.value);
}
