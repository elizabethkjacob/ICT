console.log("hello");
a=20;
console.log(a);
var a=10;
console.log(a);
{
var a=90;
console.log(a);
}
console.log(a);
{
  var a=80;
console.log(a);
}
console.log(a);
let b=68;
console.log(b);
{
let b=78;
console.log(b);
}
console.log(b);
const v=45;
{
  const v=84;
  console.log(v);
}
console.log(v);
let firstName ='maya';
let firstname ='jaya';
console.log(firstName);
console.log(typeof(v));
var c;
console.log(typeof(c));
let array =[1,2,3,4,5,'priyanka'];
console.log(array[2]);
let person={
  name:'ankit',
  age:35,
  place:'mumbai'
}
console.log(person.name);
let car =new Object();
car.brand ='hyundai';
car.color='black';
console.log(car);
var arr_obj =[{name:'meera',age:27},{name:'geetha',age:23}]
console.log(arr_obj[1].name);
let inc=7;
let inc1= inc++;
console.log(inc1);
console.log(inc);
let ad=7;
let ad1= '7';
console.log(ad1);
console.log(ad);
if (ad==ad1) {
  console.log("they are equal");
  
} else {
  console.log("they are not equal");
}
let num=8;
let num1=++num;
if ((num==num1) && (num==9)) {
  console.log("they are  equal and value is 89");

} else {
  console.log("failed");
}
function arth(num2,num3) {
  var sum=num2+num3;
  return sum;
}
  var result=arth(20,40);
  console.log('the calculated value is',result);

  function subval(num2,num3) {
    var sub=num2-num3;
    return sub;
  }
    var result=subval(40,20);
    console.log('the calculated value is',result);
  
    function mulval(num2,num3) {
      var mul=num2*num3;
      return mul;
    }
      var result=mulval(40,20);
      console.log('the calculated value is',result);
    
      function divval(num2,num3) {
        var div=num2/num3;
        return div;
      }
        var result=divval(40,20);
        console.log('the calculated value is',result);
      
      