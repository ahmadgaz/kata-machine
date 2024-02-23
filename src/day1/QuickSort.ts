const MAX_RECURSION_DEPTH = 1000;
let RECURSION_DEPTH = 0;
let MAX_STACK_DEPTH_REACHED = false;

function median(arr: number[], f: number, l: number): number {
    const m = f + Math.floor((l - f) / 2);
    const median = Math.max(
        Math.min(arr[f], arr[m]),
        Math.min(Math.max(arr[f], arr[m]), arr[l]),
    );
    const median_idx = median === arr[f] ? f : median === arr[m] ? m : l;
    const p = arr[median_idx];
    arr[median_idx] = arr[l];
    arr[l] = p;
    return p;
}

function partition(arr: number[], f: number, l: number): number {
    const p = median(arr, f, l);
    let i = f - 1;
    for (let j = f; j < l; j++) {
        if (arr[j] <= p) {
            i++;
            const tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
    }
    i++;
    arr[l] = arr[i];
    arr[i] = p;
    return i;
}

function qs(arr: number[], f: number, l: number): void {
    RECURSION_DEPTH++;

    if (RECURSION_DEPTH > MAX_RECURSION_DEPTH) MAX_STACK_DEPTH_REACHED = true;
    if (f >= l || MAX_STACK_DEPTH_REACHED) return;

    const p = partition(arr, f, l);

    qs(arr, f, p - 1);
    RECURSION_DEPTH--;
    qs(arr, p + 1, l);
    RECURSION_DEPTH--;
    return;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
    RECURSION_DEPTH--;
    if (MAX_STACK_DEPTH_REACHED) {
        MAX_STACK_DEPTH_REACHED = false;
        arr.reverse();
        qs(arr, 0, arr.length - 1);
        RECURSION_DEPTH--;
    }
}
