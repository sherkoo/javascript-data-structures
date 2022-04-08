class LinkedList {
  constructor(){
    this.head = null 
    this.tail = null 
  }

  append(value){
    const newNode = { value: value, next: null }
    
    if(this.tail){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(!this.head){
      this.head = newNode;
    }
  }

  prepend(value){
    const newNode = { value: value, next: this.head }
    this.head = newNode;
    if(!this.tail){
      this.tail = newNode;
    }
  }

  toArray(){
    const elements = []
    let curNode = this.head;
    while(curNode){
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const ll = new LinkedList();
ll.append(12)
ll.append(13)
ll.append(14)
console.log(ll);
ll.prepend('newwww')
console.log(ll.toArray());