class Queue {
  constructor(collection){
    this.collection = [];
  }

  enqueue(elem){
    this.collection.push(elem)
  }

  dequeue(){
    this.collection.shift()
  }

  peek(){
    console.log(this.collection[0]);
  }

  contains(elem){
    if(this.collection.includes(elem)){
      console.log(true);
    } else {
      console.log(false);
    }
  }

  size(){
    console.log("Length: " + this.collection.length);
  }

  show(){
    console.log(this.collection);
  }
}

let que = new Queue;

for (let i = 0; i < 5; i++) {
  que.enqueue(i)
}

que.dequeue()
que.dequeue()

que.contains(37)
que.size()

que.peek()

que.show()

class PriorityQueue {
  constructor(collection){
    this.collection = [];
  }

  /**
   * push elem to collection
   * check priority
   * sort into collection
   */
  enqueue(elem, priority){
    this.collection.push({elem, priority})
  }

  isEmpty(){
    return (this.collection.length === 0);
  }

  compare(a,b){
    if (a.priority < b.priority){
      return -1;
    }
    return 0;
  }

  show(){
    return this.collection.sort(this.compare)
  }
}

let pq = new PriorityQueue;

pq.enqueue(111, 2);
pq.enqueue(222, 2);
pq.enqueue(333, 1);
pq.enqueue(444, 4);
pq.enqueue(555, 1);
pq.enqueue(777, 13);
pq.enqueue(888, 10);

console.log(pq.show());