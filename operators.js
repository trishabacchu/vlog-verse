//Arithematic operations
let x=10,y=3;

console.log(x+y)
console.log(x-y)
console.log(x/y)
console.log(x*y)
console.log(x%y)
console.log(x**y)

//assignment operators
let z=5;
z+=3;
console.log(z)
z*=2;
console.log(z)
z-=4;
console.log(z)
z/=2;
console.log(z)
z%=2;
console.log(z)

//comparison operators

let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a<b)
console.log(a>b)

// logocal operators
let age=20;
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(age<18)

//string operators
let firstName="trisha"
let lastName="bacchu"
let fullName=firstName+" "+lastName;
console.log(fullName)

let correctName=`hello ${firstName} ${lastName},welcome`
console.log(correctName)

//ternary operators
let myAge=19;
if(myAge>18){
    console.log("eligible to vote")
    //result="eligible to vote"
}else{
    console.log("you cannot vote")

}
let result=myAge>=18 ? "eligible to vote":"you cannot vote"
console.log(result)

//increment and decrement operators
let count=5;
console.log(count++)
console.log(count)
console.log(++count)

//typeof operators
console.log(typeof count)
console.log(typeof "trisha")
console.log(typeof 20)