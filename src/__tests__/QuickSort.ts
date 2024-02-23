import quick_sort from "@code/QuickSort";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    const big_arr = [...Array(10000000).keys()].reverse();
    const big_arr_sorted = [...Array(10000000).keys()];

    debugger;
    quick_sort(big_arr);
    expect(big_arr).toEqual(big_arr_sorted);
});
