// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function solve(arr1, arr2) {
  const arrOdd = []
  const arrEven = []
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      if (arr2[i] % 2 == 0) {
        arrEven.push(arr2[i])
      } else {
        arrOdd.unshift(arr2[i])
      }
    }
  }
  
  return [...arrOdd, ...arr1, ...arrEven]
};

console.log( solve(arr1,arr2))