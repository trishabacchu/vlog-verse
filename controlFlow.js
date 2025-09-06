let marks=85;
if(marks>=90){
    console.log("A+ grade")
}
else if(marks>=80){
    console.log("A grade")

}
else if(marks>=70){
    console.log("B grade")
} 
else{
    console.log("fail")
}

let day=7

switch(day){
    case 1:console.log("monday")
            break;
    case 2:console.log("tuesday")
            break;
    case 3:console.log("wednesday")
            break;
    case 4:console.log("thursday")
            break;
    case 5:console.log("friday")
            break;
    case 6:console.log("saturday")
            break;
    case 7:console.log("sunday")
            break;
    default:console.log("invalid")        
            break;
}

for (let i=1;i<=5;i++){
    console.log("i love you ")
}

let count=5;
while(count>=0){
    console.log("count")
    count--;
}

let colors=["red","blue","green"]
for(let i=0;i<colors.length;i++){
    
    console.log(colors[i])
}

for(let color of colors){
    console.log(color)
}

let person= {
    age:20,
    college:"JNTUGV"
}

for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

for(let i=5;i>=0;i--){
    if(i==3){
        continue;
    }else if(i==2){
        break;
    }
    console.log(i)
}