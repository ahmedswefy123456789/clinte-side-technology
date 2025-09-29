

class Node {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
}


class LinkedList {
    constructor() {
    this.head = null;
    this.size = 0;
    }

    push(data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
        current = current.next;
        }
        current.next = newNode;
    }
    this.size++;
    }

    pop() {
    if (!this.head) return null;
    if (!this.head.next) {
        const value = this.head.data;
        this.head = null;
        this.size--;
        return value;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
        prev = current;
        current = current.next;
    }
    prev.next = null;
    this.size--;
    return current.data;
    }

    print() {
    let current = this.head;
    let result = [];
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    return result.length ? result.join(" -> ") : "List is empty";
    }
}

const list = new LinkedList();


function pushValue() {
    const value = document.getElementById("valueInput").value.trim();
    if (value) {
    list.push(value);
    document.getElementById("valueInput").value = "";
    printList();
    }
}

function popValue() {
    const removed = list.pop();
    if (removed !== null) {
    alert("Popped: " + removed);
    } else {
    alert("List is empty!");
    }
    printList();
}

function printList() {
    document.getElementById("output").innerText = list.print();
}
