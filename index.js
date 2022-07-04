class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head
    this.head = newNode;
    this.length++;
  }

  getNode(index){
    let currentNode = this.head;
    let counter = 0;
    while (counter != index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(value, index){
    if (index <= 0){
      this.prepend(value);
      return;
    }
    if (index >= this.length){
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let nodeToTheLeft = this.getNode(index - 1);
    let nodeToRight = nodeToTheLeft.next;
    newNode.next = nodeToRight;
    nodeToTheLeft.next = newNode;
    this.length++;
  }

  remove(index){
    // if head
    if (index == 0){
      // if only one node on list
      if (this.head == this.tail){
        this.head = null;
        this.tail = null;
        this.length = 0;
        return;
      }
      let nodeToRight = this.head.next;
      this.head.next = null;
      this.head = nodeToRight;
      this.length--;
      return;
    }
    let nodeToTheLeft = this.getNode(index - 1);
    let nodeToDelete = nodeToTheLeft.next;
    let nodeToRight = nodeToDelete.next;
    // if tail
    if (nodeToRight == null){
      this.tail = nodeToTheLeft;    
    }
    nodeToDelete.next = null;
    nodeToTheLeft.next = nodeToRight;
    this.length--;
  }

  printList(){
    const arrayOfLinkListValues = [];
    let currentNode = this.head;
    while (currentNode != null){
      arrayOfLinkListValues.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arrayOfLinkListValues;
  }

  reverse(){
    if (!this.head || !this.head.next){
      return;
    }
    let firstNode = this.head;
    let secondNode = this.head.next;
    this.tail = this.head;
    while (secondNode){
      let tempNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = tempNode;
    }
    this.head.next = null;
    this.head = firstNode;
  }

}
const myLinkedList = new LinkedList(50);
myLinkedList.append(70);
myLinkedList.append(80);
myLinkedList.prepend(10);
myLinkedList.insert(60,2);
myLinkedList.insert(40,0);
myLinkedList.remove(1);
myLinkedList.remove(1);
myLinkedList.remove(0);
myLinkedList.reverse();
console.log(myLinkedList);
console.log(myLinkedList.printList());

