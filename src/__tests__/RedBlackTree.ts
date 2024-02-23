import RedBlackTree from "@code/RedBlackTree";

test("min heap", function () {
    const tree = new RedBlackTree<number>();

    tree.insert(5);
    tree.print();
    tree.insert(3);
    tree.print();
    tree.insert(69);
    tree.print();
    tree.insert(420);
    tree.print();
    tree.insert(4);
    tree.print();
    tree.insert(1);
    tree.print();
    tree.insert(8);
    tree.print();
    tree.insert(7);
    tree.print();
    tree.insert(2);
    tree.print();
    tree.insert(6);
    tree.print();
    tree.insert(9);
    tree.print();
    tree.insert(10);
    tree.print();
    tree.insert(11);
    tree.print();
    tree.insert(12);
    tree.print();

    // expect(tree.length).toEqual(8);
    // expect(tree.delete()).toEqual(1);
    // expect(tree.delete()).toEqual(3);
    // expect(tree.delete()).toEqual(4);
    // expect(tree.delete()).toEqual(5);
    // expect(tree.length).toEqual(4);
    // expect(tree.delete()).toEqual(7);
    // expect(tree.delete()).toEqual(8);
    // expect(tree.delete()).toEqual(69);
    // expect(tree.delete()).toEqual(420);
    // expect(tree.length).toEqual(0);
});
