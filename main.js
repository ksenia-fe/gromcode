// *******************1.1**************
let arr = [1,2,45,789,-5,67,-567];

function getMin(arr){
  return	Math.min(...arr);
}

alert(getMin(arr));
// ********************1.2**************
let arr = [1,2,45,789,-5,67,-567];
let a;

function getMin(arr){
  let  min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]){
      min = arr[i];
    }
  }

  return min;
}
  
alert(getMin(arr));
// ************************3.1*****************
let arr = [1,2,3,4,5,67,-8,90];
let array = [];

function getEven(arr){

  for(let i = 0;i < arr.length; i++){
    if(arr[i]%2 === 0){
        array.push(arr[i]);
    }
  }

  return array;
}

alert(getEven(arr));
// *******************3.2*******************
let arr = [1,2,3,4,5,67,-8,90];
let array = [];

function getEven(arr){
  let even = arr.filter(function(value){
    return value%2 === 0;
  })
  return even;
}

alert(getEven(arr));
// **************************4*****************
const filtered = (name) => {
  return objectArray.filter((item) => {
    return item.name === name;
  });
}