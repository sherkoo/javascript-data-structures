compare = (a,b) => {
  if(a === b){
    return true
  } else {
    return false
  }
}

console.log(compare(5,5));
console.log(compare(5,3));
console.log(compare("word", "word"));
console.log(compare("word", "exit"));