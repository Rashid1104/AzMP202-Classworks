// for (let i = 0; i <= 100; i++) {
//     if (i%2 == 0) {
//         console.log(i);
        
//     }
    
// }

// for (let i = 0; i <= 100; i++) {
//     if (i%2 == 1) {
//         console.log(i);
        
//     }
    
// }

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i%5 == 0) {
//         sum+= i;
    
//     }
    
// }
// console.log(sum);

// let arr =[12,14,35,56,68,93];

// let sum = 0;
// for (let i = 0; i < arr.length ; i++) {
//     sum += arr[i];
    
// }
// console.log(sum);


// for (let i = 0; i < arr.length ; i++) {
//         if (i%2 == 1) {
//         console.log(i);
        
        
//     }
    
// }

// for (let i = 0; i < arr.length ; i++) {
//     if (i%2 == 0) {
//     console.log(i);
    
    
// }

// }

// 

// let max = 0;
// for (let i = 0; i < arr.length ; i++) {
//         if (max < arr[i] ) {
//         max = arr[i];
                   
//     }

// }
// console.log(max);


// let min = 100;
// for (let i = 0; i < arr.length ; i++) {
//         if (min > arr[i] ) {
//         min = arr[i];                   
//     }
// }
// console.log(min);


// let num = 25;
// for (let i = 0; i < arr.length ; i++) {
//     if (num === arr[i] ) {   
//     }
// }
// console.log("it is not aarray");

// node ./main.js


// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];

//   for (let i = 0; i < employees.length ; i++) {
//         if (employees[i].salary > 60000 ) {  
//             console.log(employees[i]);
             
//         }

//     }

// let num = 6;
// let proiz = 1;

// for (let i = num; i > 0 ; i--) {
//        proiz *= i;
// }
// console.log(proiz);

// node ./main.js

// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea.";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//    if (str[i] == "l") {
//     count++;
//    }
    
// }
// console.log(count);
// 
// const countries = ["azerbaijan","norwey","albania","germany","america"]
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i][0] === "a" && countries[i][countries[i].length-1] === "a") {
//      console.log(countries[i]);     
//     }
// } 

// let n = 427;

// while (n > 0) {   
//      let rem = n % 10;
//      console.log(rem);
//      n = (n - rem) /10;
// }


// let num = 200;
// let isPrime = true;
// for (let i = 2; i < num / 2; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//        }  
// }
// console.log(isPrime);

const scores = [60 , 75 , 88 ,75 , 93 , 45];
// let ortalama = 0;


let max = scores[0];
for (let i = 0; i < scores.length ; i++) {
        if (max < scores[i] ) {
        max = scores[i];
                   
    }

}
console.log(max);

let min = scores[0];
for (let i = 0; i < scores.length ; i++) {
        if (min > scores[i] ) {
        min = scores[i];                   
    }
}
console.log(min);

// for (let i = 0; i < scores.length; i++) {
//     ortalama += scores[i];    
// }
// console.log(ortalama / scores.length);

