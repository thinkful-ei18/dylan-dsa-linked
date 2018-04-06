'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(value, null);
    }
  }

  remove(value) {
    if (this.head === null) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let tempNode = this.head;
    while (tempNode.next.value !== value) {
      if (tempNode.next === null) return null;
      tempNode = tempNode.next;
    }
    const oldNode = tempNode.next;
    tempNode.next = oldNode.next;
    return;
  }

  find(value) {
    if (this.head === null) return null;
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.value === value) return tempNode;
      tempNode = tempNode.next;
    }
    return null;
  }

  insertBefore(value, key) {
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.next.value === key) {
        let afterNode = tempNode.next;
        tempNode.next = new _Node(value, afterNode);
        return;
      }
      tempNode = tempNode.next;
    }
    return false;
  }

  insertAfter(value, key) {
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.value === key) {
        let afterNode = tempNode.next;
        tempNode.next = new _Node(value, afterNode);
        return;
      }
      tempNode = tempNode.next;
    }
    return false;
  }

  insertAt(value, key) {
    let tempNode = this.head;
    let count = 0;
    while (tempNode.next !== null) {
      if (count + 1 === key) {
        let afterNode = tempNode.next;
        tempNode.next = new _Node(value, afterNode);
        return;
      }
      tempNode = tempNode.next;
      count++;
    }
    return false;
  }
}

// rewrite to display whats in list
function display(list) {
  let tempNode = list.head;
  let result = tempNode.value.toString();
  while (tempNode.next !== null) {
    result += ', ' + tempNode.next.value.toString();
    tempNode = tempNode.next;
  }
  return result;
}

function size(list) {
  if (!list.head) return 0;
  let tempNode = list.head;
  let count = 1;
  while (tempNode.next !== null) {
    count++;
    tempNode = tempNode.next;
  }
  return count;
}

function isEmpty(list) {
  return !list.head;
}

function findPrevious(list, value) {
  let tempNode = list.head;
  while (tempNode.next !== null) {
    if (tempNode.next.value === value) {
      return tempNode.value;
    }
    tempNode = tempNode.next;
  }
  return false;
}

function findLast(list) {
  let tempNode = list.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  return tempNode.value;
}

function main() {
  // let SLL = new LinkedList();
  // SLL.insertLast('Apollo');
  // SLL.insertLast('Boomer');
  // SLL.insertLast('Helo');
  // SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');
  // SLL.insertLast('Tauhida');
  // SLL.remove('Starbuck');
  // SLL.insertBefore('Athena', 'Boomer');
  // SLL.insertAfter('Hotdog', 'Helo');
  // SLL.insertAt('Kat', 3);
  // SLL.remove('Tauhida');
  // console.log(display(SLL));
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Boomer'));
  // console.log(findLast(SLL));
  // console.log(JSON.stringify(SLL, null, 4));
  // console.table(SLL);
  // console.log(display(reverseList(SLL)));
  // console.log(thirdFromTheEnd(SLL));
  // console.log(middleElement(SLL));
  // console.log(isCycle(SLL));
}

main();

function reverseList(list) {
  let prevNode = list.head;
  let tempNode = prevNode.next;
  prevNode.next = null;
  while (tempNode !== null) {
    let nextNode = { value: tempNode.value, next: prevNode };
    prevNode = nextNode;
    tempNode = tempNode.next;
    if (tempNode === null) {
      list.head = nextNode;
    }
  }
  return list;
}

function thirdFromTheEnd(list) {
  let count = 1;
  let tempNode = list.head;
  while (count !== 3) {
    tempNode = tempNode.next;
    count++;
  }
  let result = list.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
    result = result.next;
  }
  return result.value;
}

function middleElement(list) {
  let result = list.head;
  let fast = list.head;
  while (fast.next !== null) {
    if (fast.next.next !== null) {
      result = result.next;
      fast = fast.next.next;
    } else {
      return [result.value, result.next.value];
    }
  }
  return result.value;
}

function isCycle(list) {
  let hash = {};
  let tempNode = list.head;
  while (tempNode.next !== null) {
    if (hash[tempNode.value] === tempNode) {
      return true;
    }
    hash[tempNode.value] = tempNode;
    tempNode = tempNode.next;
  }
  return false;
}

// let SLL = new LinkedList();
// SLL.insertLast('Apollo');
// SLL.insertLast('Boomer');
// SLL.insertLast('Helo');
// makeCycle(SLL);
// console.log(isCycle(SLL));

function makeCycle(list) {
  let tempNode = list.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  tempNode.next = list.head;
}

class _DoubleNode {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    if (!this.head) return (this.head = new _DoubleNode(value, null, null));
    let newNode = new _DoubleNode(value, null, this.head);
    this.head.prev = newNode;
    this.head = newNode;
  }

  insertLast(value) {
    if (!this.head) return this.insertFirst(value);
    let tempNode = this.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _DoubleNode(value, tempNode, null);
  }

  insertBefore(value, key) {
    if (!this.head) return this.insertFirst(value);
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.next.value === key) {
        let newNode = new _DoubleNode(value, tempNode, tempNode.next);
        tempNode.next.prev = newNode;
        tempNode.next = newNode;
        return;
      }
      tempNode = tempNode.next;
    }
  }

  insertAfter(value, key) {
    if (!this.head) return this.insertFirst(value);
    let tempNode = this.head;
    while (tempNode !== null) {
      if (tempNode.value === key) {
        let newNode = new _DoubleNode(value, tempNode, tempNode.next);
        if (tempNode.next) {
          tempNode.next.prev = newNode;
        }
        tempNode.next = newNode;
        return;
      }
      tempNode = tempNode.next;
    }
  }

  insertAt(value, index) {
    if (!this.head) return this.insertFirst(value);
    let counter = 1;
    let tempNode = this.head;
    while (tempNode !== null) {
      if (counter + 1 === index) {
        let newNode = new _DoubleNode(value, tempNode, tempNode.next);
        if (tempNode.next) {
          tempNode.next.prev = newNode;
        }
        tempNode.next = newNode;
        return;
      }
      tempNode = tempNode.next;
      counter++;
    }
  }

  remove(value) {
    if (!this.head) return null;
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.value === value) {
        tempNode.prev.next = tempNode.next;
        tempNode.next.prev = tempNode.prev;
        return;
      }
      tempNode = tempNode.next;
    }
  }

  find(value) {
    if (!this.head) return null;
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.value === value) {
        return tempNode.value;
      }
      tempNode = tempNode.next;
    }
  }
}

function mainDLL() {
  let DLL = new DoubleLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Gemenon');
  DLL.insertBefore('Caprica', 'Gemenon');
  DLL.insertAfter('Picon', 'Gemenon');
  DLL.insertAt('Sagittaron', 5);
  DLL.insertLast('Tauron');
  DLL.remove('Picon');
  reverseDLL(DLL);
  console.log(displayDLL(DLL));
}

mainDLL();

function reverseDLL(list) {
  let tempNode = list.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  list.head = tempNode;
  tempNode.next = tempNode.prev;
  tempNode.prev = null;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
    if (!tempNode.prev) {
      tempNode.prev = tempNode.next;
      tempNode.next = null;
    } else {
      let temp = tempNode.prev;
      tempNode.prev = tempNode.next;
      tempNode.next = temp;
    }
  }
  return list;
}

function displayDLL(list) {
  let tempNode = list.head;
  let result = '[';
  while (tempNode.next !== null) {
    result += `{value: ${tempNode.value.toString()}, previous: ${tempNode.prev? tempNode.prev.value.toString() : null}, next: ${tempNode.next ? tempNode.next.value.toString() : null}}, \n `;
    tempNode = tempNode.next;
  }
  return result;
}