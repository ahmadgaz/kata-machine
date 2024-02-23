export default class MaxHeap {
    public length: number = 0;
    private data: number[] = [];
    insert(value: number): void {
        this.data.push(value);
        this.length++;
        this.heapifyUp(this.data, this.length);
    }
    poll(): number {
        if (this.length <= 0) return -1;
        this.length--;
        if (this.length <= 0) return this.data.pop() ?? -1;
        const out = this.data[0];
        this.data[0] = this.data.pop() ?? -1;
        this.heapifyDown(this.data, this.length);
        return out;
    }
    peek(): number {
        return this.data[0] ?? -1;
    }
    heapifyUp(data: number[], length: number, c: number = length - 1): void {
        if (c <= 0) return;
        const p = this.parent(c);
        const cv = data[c];
        const pv = data[p];
        if (cv > pv) {
            this.swap(data, c, p);
            this.heapifyUp(data, p);
        }
    }
    heapifyDown(data: number[], length: number, p: number = 0): void {
        if (p > length - 1) return;
        const cl = this.leftChild(p);
        const cr = this.rightChild(p);
        if (cl > length - 1) return;
        const pv = data[p];
        const clv = data[cl];
        const crv = data[cr];
        if (clv < crv && pv < crv && crv !== undefined) {
            this.swap(data, cr, p);
            this.heapifyDown(data, length, cr);
        } else if ((crv < clv && pv < clv) || crv === undefined) {
            this.swap(data, cl, p);
            this.heapifyDown(data, length, cl);
        }
    }
    parent(c: number) {
        return Math.floor((c - 1) / 2);
    }
    leftChild(p: number) {
        return 2 * p + 1;
    }
    rightChild(p: number) {
        return 2 * p + 2;
    }
    swap(arr: number[], i: number, j: number): void {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
