let arr = [2,3,4,3,2,4,3];
class Node{
  constructor(A){
    this.data = A,
    this.next = null
  }
}
// second method;
let finnode = null;
for(let a = arr.length-1;a>=0;a--){
  let temp = new Node(arr[a]);
  temp.next = finnode;
  finnode = temp;
  console.log(finnode);
}
// console.log(finnode);
let changearr = [];
while(finnode.next != null){
  changearr.push(finnode.data);
  finnode = finnode.next;
}
changearr.push(finnode.data);
console.log(changearr);



//first method
function fun2(root , num){
  let temp = new Node();
  temp.data = num;
  temp.next = root;
  return temp;
}
function fun1(arr){
  let root = null;
  for(let a = arr.length-1;a>=0;a--){
    root = fun2(root , arr[a]);
  }
  return root;
}
let finnode = fun1(arr);
console.log(finnode.next);
