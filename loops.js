// switch 

let arr = [1,2,3,4,5,6,7];

switch(arr){
  case 1:
  console.log(sunday);
  break;
  
  case 2:
  console.log(monday);
  break;
  
  case 3:
  console.log(tuesday);
  break;
  
  case 4:
  console.log(wednesday);
  break;
  
  case 5:
  console.log(thursday);
  break;
  
  case 6:
  console.log(friday);
  break;
  
  case 7:
  console.log(saturday);
  break;
  
} 


// if else 

grade = 90;

if(grade >= 90){
  console.log("A")
}
else if(grade >= 80 && grade <= 89){
  console.log("B")
}
else if(grade >= 70 && grade <=79){
  console.log("C")
}
else if(grade >= 60 && grade <= 69){
  console.log("D")
}else{
  console.log("F")
}


// Fibonacci 

let arr = new Array(20);

for(let i=0 ; i<20; i++){
  if(i == 0 || i == 1){
    arr[i] = i;
  }
  else{
    arr[i] = arr[i-1] + arr[i-2];
  }
}


console.log(arr);



// odd number 
let j=0 ;

while(j <= 20){
  if(j % 2 != 0){
    console.log(j);
  }
  j++;
}

