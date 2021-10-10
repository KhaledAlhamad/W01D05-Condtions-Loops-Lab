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

// even & odd numbers
let num=10;
if(num%2==0){
  console.log("Even");
}
else{
  console.log("Odd");
}


// Leap year
let curr_year=new Date().getFullYear();
curr_year%2==0 ? console.log("Even") : console.log("Odd");

// squares of numbers
let squared= new Array(10);
for(let i=1;i<11;i++){
  squared=i**2;
}
console.log(squared);


// Multiplication table
let row =new Array(5);
for(let i=0; i<5;i++){
  row[i]=new Array(10);
  for(let j=0; j<10;j++){
    row[i][j]=(i+1)*(j+1);
  }
}console.log(row);

//power of 2
let x='6';
console.log((Math.log(x)/Math.log(2))%1===0);