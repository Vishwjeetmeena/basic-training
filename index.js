// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  let first = array[0];
  let ans = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      ans = first;
      first = array[i];
    } else if (array[i] > ans && array[i] < first) {
      ans = array[i];
    }
  }
  return ans;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
  let freq = new Array(26).fill(0);
  for(let i = 0; i < string.length; i++){
    let indx = string.charCodeAt(i) - 'a'.charCodeAt(0);
    freq[indx]++;
  }
  let ans = {};
  for(let i = 0; i < 26; i++){
    if(freq[i] != 0){
      let chr = String.fromCharCode(i+97);
      ans[chr] = freq[i];
    }
  }
  return ans;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
  let ans = {};
  for(var i in unflatObject){
    if ((typeof unflatObject[i]) == 'object' && unflatObject[i] !== null){
      var obj = flatten(unflatObject[i]);
      for(var x in obj){
        ans[i+'.'+x] = obj[x];
      }
    }
    else{
      ans[i] = unflatObject[i];
    }
  }
  return ans;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
    // Write your code here
    let result = {}, temp;
    for (var k in flatObject) {
      var keys = k.split(".");
      var val = flatObject[k];
      temp = result; 
      for (var i = 0; i < keys.length - 1; i++) { 
        if (!(keys[i] in temp)) { 
          if (isFinite(keys[i + 1])) { 
            temp[keys[i]] = []; 
          } else { 
            temp[keys[i]] = {}; 
          } 
        } 
        temp = temp[keys[i]]; 
      } 
      temp[keys[keys.length - 1]] = val; 
    } 
   return result;
}

