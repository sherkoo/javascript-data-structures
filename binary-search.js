/**
 * Binary search data structure
 */

/**
 * First split the array
 * check if the searchVal is the middle
 * if not, check the left or the right side
 * this will be based on the searchVal being < or > than searchVal
 * if searchVal is < midIndex, set upper to = middle - 1
 */

const search = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while(lower <= upper){
    console.log('try');
    const middle = lower + Math.floor((upper - lower) / 2)

    if(val === arr[middle]){
      return middle
    }

    if(val < arr[middle]){
      upper = middle - 1
    } else {
      lower = middle + 1
    }
  } 

  return -1
}

let arr = [0,1,2,3,4,5,6,7,8,9,10];

console.log(search(6, arr));