// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  return Math.floor(Math.log2(number)-1);
}

console.log(result(number));