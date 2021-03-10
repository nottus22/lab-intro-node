class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos - 1]) {
      return this.items[pos];
    } else {
      throw new Error('OufOfBounds');
    }
  }
    
  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return (Math.max(...this.items));
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return (Math.min(...this.items));
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
    return this.items.reduce((a, b) => a + b, 0) / this.items.length;
    }
  }
}

module.exports = SortedList;
