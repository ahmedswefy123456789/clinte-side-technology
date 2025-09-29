
  
  function Employee(name, position, office, age, startDate) {
    this.name = name;
    this.position = position;
    this.office = office;
    this.age = age;
    this.startDate = startDate;
  }

  
  const employees = [
    new Employee("Airi Satou", "Accountant", "Tokyo", 33, "2008/11/28"),
    new Employee("Angelica Ramos", "Chief Executive Officer (CEO)", "London", 47, "2009/10/09"),
    new Employee("Ashton Cox", "Junior Technical Author", "San Francisco", 66, "2009/01/12"),
    new Employee("Bradley Greer", "Software Engineer", "London", 41, "2012/10/13"),
    new Employee("Brenden Wagner", "Software Engineer", "San Francisco", 28, "2011/06/07"),
    new Employee("Brielle Williamson", "Integration Specialist", "New York", 61, "2012/12/02"),
    new Employee("Bruno Nash", "Software Engineer", "London", 38, "2011/05/03"),
    new Employee("Caesar Vance", "Pre-Sales Support", "New York", 21, "2011/12/12"),
    new Employee("Cara Stevens", "Sales Assistant", "New York", 46, "2011/12/06"),
    new Employee("Cedric Kelly", "Senior Javascript Developer", "Edinburgh", 22, "2012/03/29")
  ];

  const tbody = document.querySelector("#employeeTable tbody");
  const headers = document.querySelectorAll("thead th");


  function renderTable(data) {
    tbody.innerHTML = "";
    data.forEach(emp => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.office}</td>
        <td>${emp.age}</td>
        <td>${emp.startDate}</td>
      `;
      tbody.appendChild(row);
    });
  }


  renderTable(employees);

  let sortState = {}; 


  headers.forEach(header => {
    header.addEventListener("click", () => {
      const col = header.dataset.col;


      headers.forEach(h => h.classList.remove("sort-asc", "sort-desc"));


      sortState[col] = sortState[col] === "asc" ? "desc" : "asc";


      const sorted = [...employees].sort((a, b) => {
        let valA = a[col];
        let valB = b[col];


        if (col === "age") {
          valA = Number(valA);
          valB = Number(valB);
        }


        if (col === "startDate") {
          valA = new Date(valA);
          valB = new Date(valB);
        }

        if (valA < valB) return sortState[col] === "asc" ? -1 : 1;
        if (valA > valB) return sortState[col] === "asc" ? 1 : -1;
        return 0;
      });


      renderTable(sorted);


      header.classList.add(sortState[col] === "asc" ? "sort-asc" : "sort-desc");
    });
  });

  // -------------------------------------------
  // Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Push: add element at the end
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

  // Pop: remove element from the end
  pop() {
    if (!this.head) return null;

    // If only one node
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

  // Print: display all elements
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// Example usage
const list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.print();  // Output: 10 -> 20 -> 30

console.log("Popped:", list.pop()); // Output: Popped: 30
list.print();  // Output: 10 -> 20
