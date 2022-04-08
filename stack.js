class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }

  // push elements
  push(element){
    this.items[this.count] = element
    this.count += 1
    return this.count - 1
  }

  // top
  top(element){
    let start = performance.now();
    console.log(this.items[this.count - 1]);
    let end = performance.now();
    console.log(start - end);
  }

  // pop
  pop(){
    if(this.count == 0){
      return undefined
    }
    this.count -= 1
    this.items.pop()
  }

  getCount(){
    console.log(this.count);
  }

}

const stack = new Stack

stack.push(100)
stack.push(200)
stack.push(500)

stack.getCount()

stack.top()

stack.pop()
stack.top()

stack.getCount()