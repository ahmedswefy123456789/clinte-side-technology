  class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }

    class LinkedList {
      constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
      }

      push(value) {
        const newNode = new Node(value);
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        this.size++;
        this.render();
      }

      pop() {
        if (!this.head) return null;

        let current = this.head;
        let previous = null;

        while (current.next) {
          previous = current;
          current = current.next;
        }

        if (previous) {
          previous.next = null;
          this.tail = previous;
        } else {
          this.head = null;
          this.tail = null;
        }

        this.size--;
        this.render();
        return current.value;
      }

      render() {
        const container = document.getElementById("listContainer");
        container.innerHTML = "";
        let current = this.head;

        while (current) {
          const nodeDiv = document.createElement("div");
          nodeDiv.className = "node";
          nodeDiv.textContent = current.value;

          const arrow = document.createElement("div");
          arrow.className = "arrow";
          arrow.textContent = "→";

          container.appendChild(nodeDiv);
          setTimeout(() => nodeDiv.classList.add("show"), 50);

          if (current.next) {
            container.appendChild(arrow);
            setTimeout(() => arrow.classList.add("show"), 100);
          }

          current = current.next;
        }
      }
    }

    const list = new LinkedList();

    function addNode() {
      const value = document.getElementById("valueInput").value;
      if (value !== "") {
        list.push(value);
        document.getElementById("valueInput").value = "";
      }
    }

    function removeNode() {
      list.pop();
    }