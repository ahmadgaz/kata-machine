export default class MinHeap {
    private data: number[] = [];
    public length: number = 0;
    private swap(arr: number[], i: number, j: number) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    private parent(i: number): number {
        return Math.floor((i - 1) / 2);
    }
    private leftChild(i: number): number {
        return 2 * i + 1;
    }
    private rightChild(i: number): number {
        return 2 * i + 2;
    }
    private heapifyDown(p: number): void {
        if (p >= this.length) return;
        const cl = this.leftChild(p);
        const cr = this.rightChild(p);
        if (cl >= this.length) return;
        const clv = this.data[cl];
        const crv = this.data[cr];
        const pv = this.data[p];
        if (clv > crv && pv > crv) {
            this.swap(this.data, p, cr);
            this.heapifyDown(cr);
        } else if (crv > clv && pv > clv) {
            this.swap(this.data, p, cl);
            this.heapifyDown(cl);
        }
    }
    private heapifyUp(c: number): void {
        if (c <= 0) return;
        const p = this.parent(c);
        const pv = this.data[p];
        const cv = this.data[c];
        if (pv > cv) {
            this.swap(this.data, p, c);
            this.heapifyUp(p);
        }
    }
    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) return -1;

        this.length--;
        if (this.length === 0) return this.data.shift() ?? -1;

        const out = this.data[0];
        this.data[0] = this.data.pop() ?? -1;
        this.heapifyDown(0);
        return out;
    }
}
