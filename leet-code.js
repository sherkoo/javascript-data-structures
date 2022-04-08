// let data = [4,6,5];
// let revData = parseInt(data.reverse().join(''))
// console.log(revData);

// var num = 1230945;
//  var result = revData.toString().split('').map(Number);
//  console.log(result);

var addTwoNumbers = function(l1, l2) {
  let l1Rev = parseInt(l1.reverse().join(''))
  let l2Rev = parseInt(l2.reverse().join(''))
  let add = l1Rev + l2Rev

  var result = add.toString().split('').map(Number);
  return result.reverse()

};

console.log(addTwoNumbers([2,4,3], [5,6,4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));