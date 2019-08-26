// linked list is a linear data structure
// a ordered collections of data.
// unlike an array, elements (nodes) in a linked list are not stored in sequential mem locations
// they are linked together using a pointer
// First node is called Head
// Each node has two parts, a data and a pointer to the next node
// Last node is called Tail.
// Tail has a referrence to NULL

// This class represent each individual node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const n1 = new Node(100);
// console.log(n1);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    // we put next as this.head because we want to push the head to the next value when a new first is inserted
    this.size++;
  }
  // insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // take care of edgecase when the list is empty
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // insert at index
  insertAt(data, index) {
    // catch case index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // set current to first
    current = this.head;
    let counter = 0;

    while (counter < index) {
      previous = current; // node before the index
      counter++;

      current = current.next; // node after the index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // get at index
  getAt (index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }

      count++;

      current = current.next;
    }

    return;
  }

  // remove at index
  removeAt(index) {
    if(index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if(index === 0) {
      this.head = current.next;
    } else {
      while( count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // clear list
  clearList() {
    // if we set head to null, it has no referrence to the rest of the list
    this.head = null;
    this.size = 0;
  }

  // print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);

      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2);
// ll.removeAt(2);

ll.clearList();

ll.printListData();
// ll.getAt(20);
