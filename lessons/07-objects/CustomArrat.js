// TEACHING NOTES: CustomArray helper
// Analogy: "A custom shelf" — this class models a basic dynamic container similar to an array.
// Demo: Create a `CustomArray`, `add()` some items, then `remove()` and show `print()` output.
// Hands-on: Extend `CustomArray` with `insert(index, item)` method.
class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    add(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    remove() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    print() {
        const items = [];
        for (let i = 0; i < this.length; i++) {
            items.push(this.data[i]);
        }
        return items;
    }

    clear() {
        this.data = {};
        this.length = 0;
    }

}

module.exports = CustomArray;