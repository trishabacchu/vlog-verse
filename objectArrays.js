let person={
    name:"trisha",
    age:20

}

console.log(person.name)
console.log(person["age"])

const{name,age}=person;//destructuring assignment
console.log(name)
    console.log(age)

    let fruits=["apples","banana","mango"]
    console.log(fruits[0])

    let numbers=[1,2,3,4,5]
    
    let square=numbers.map((num)=>num*num);//transform each element
    console.log(square)

    let evens=numbers.filter((num)=>num%2==0)// filter values based on conditions
    console.log(evens)

    let sum=numbers.reduce((present,num)=>present+num) //reduce 
    console.log(sum)

    let arr=[{name:"trisha",marks:"90"},{name:"tharak",marks:"99"},{name:"bhavya",marks:"98"}]
    let maxMarks=0;
     let topper="";
     for(let person of arr){
        if(person.marks>maxMarks){
            maxMarks=person.marks;
            topper=person.name;
        }
       
    }
 console.log(`topper is ${topper} and he got ${maxMarks}`)
     