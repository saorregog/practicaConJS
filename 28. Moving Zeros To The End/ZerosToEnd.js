function moveZeros(arr) {
  length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr[i] = "";
    }
  }

  return arr.filter(function (e) {
    return e !== "";
  });
}

console.log(moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9]));
