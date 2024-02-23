import MaxHeap from "@code/MaxHeap";
import MinHeap from "@code/MinHeap";

test("min heap", function () {
    const minHeap = new MinHeap();

    expect(minHeap.length).toEqual(0);

    minHeap.insert(5);
    minHeap.insert(3);
    minHeap.insert(69);
    minHeap.insert(420);
    minHeap.insert(4);
    minHeap.insert(1);
    minHeap.insert(8);
    minHeap.insert(7);

    expect(minHeap.length).toEqual(8);
    expect(minHeap.delete()).toEqual(1);
    expect(minHeap.delete()).toEqual(3);
    expect(minHeap.delete()).toEqual(4);
    expect(minHeap.delete()).toEqual(5);
    expect(minHeap.length).toEqual(4);
    expect(minHeap.delete()).toEqual(7);
    expect(minHeap.delete()).toEqual(8);
    expect(minHeap.delete()).toEqual(69);
    expect(minHeap.delete()).toEqual(420);
    expect(minHeap.length).toEqual(0);

    const maxHeap = new MaxHeap();

    expect(maxHeap.length).toEqual(0);

    // maxHeap.insert(5);
    maxHeap.insert(3);
    // maxHeap.insert(69);
    // maxHeap.insert(420);
    // maxHeap.insert(4);
    maxHeap.insert(1);
    // maxHeap.insert(8);
    // maxHeap.insert(7);

    expect(maxHeap.length).toEqual(8);
    expect(maxHeap.poll()).toEqual(420);
    expect(maxHeap.poll()).toEqual(69);
    expect(maxHeap.poll()).toEqual(8);
    expect(maxHeap.poll()).toEqual(7);
    expect(maxHeap.length).toEqual(4);
    expect(maxHeap.poll()).toEqual(5);
    expect(maxHeap.poll()).toEqual(4);
    expect(maxHeap.poll()).toEqual(3);
    expect(maxHeap.poll()).toEqual(1);
    expect(maxHeap.length).toEqual(0);
});
