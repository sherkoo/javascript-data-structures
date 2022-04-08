class ArrayStruct { 
  constructor(collection){
    this.collection = [0,1,2,3,4,5,6,7]
  }

  insert(x, elem){
    this.collection.splice(x, 0, elem)
  }

  remove(x){
    this.collection.splice(x, 1)
  }

  show(index){
    if(this.collection[index]){
      return this.collection[index]
    } 
    return "not found"
  }

  showAll(){
    return this.collection
  }

  unshift(x){
    return this.collection.unshift(x)
  }

  shift(x){
    return this.collection.shift(x)
  }

  find(x){
    return this.collection.findIndex(elem => elem === x)
  }
  
}

let a = new ArrayStruct;

a.insert(1,0,444)

a.remove(0)

a.unshift(111)
a.unshift(222)

console.log(a.shift());

console.log(a.find(222));
console.log(a.show(a.find(222)));

console.log(a.showAll());