function linearSearch(array, data) {
  for (let i = 0; i < array.length; i++) {
   if (array[i] === data) {
    return true;
   }
  }
   return false;
 }
 console.log(linearSearch([2, 1, 6, 8, 10, 12, 3, 0, 9], 3)); // true
 console.log(linearSearch([2, 1, 6, 8, 10, 12, 3, 0, 9], 6)); // true
 console.log(linearSearch([2, 1, 6, 8, 10, 12, 3, 0, 9], 123)); // false