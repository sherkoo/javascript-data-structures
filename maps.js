const data = new Map()

// set
data.set('average', 1.5)
data.set('lastResult', 1.5)

const germany = {name: "Germany", population: 82}

data.set(germany, 89)

console.log(data);

// set and replace
data.set('average', 2.0)

console.log(data);

// delete by name
data.delete('lastResult')
console.log(data);

// get
console.log(data.get('average'));

// delete
console.log(data.delete('average'));
console.log(data);
