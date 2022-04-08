const id = new Set();

id.add(1)
id.add(1)
id.add(1)
id.add(2)
id.add(3)

id.delete(3)

// for(const el of id){
//   console.log(el);
// }

console.log(id.has(3));

console.log(id);
