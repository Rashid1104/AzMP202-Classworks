// let array = [12,23,43,54,65,67,89,90,100];
// let arr = [];
// let max = 0;
// let min = 1000;

// for (let i = 0; i < array.length; i++) {
//    if (array[i] % 2 === 0) {
//     arr.push(array[i]); 
//     for (let i = 0; i < array.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
//  } 
// }
// } 
// console.log(arr);
//  console.log(max);

//  for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 1) {
//      arr.push(i); 
//      for (let i = 0; i < array.length; i++) {
//      if (max < arr[i]) {
//          max = arr[i];
//      }
//   } 
//  }
//  } 
//  console.log(arr);
//   console.log(max);

// task3

//  for (let i = 0; i < array.length; i++) {
//      if (max < array[i]) {
//          max = array[i];
//      }
//  } 

//   console.log(max);

//   for (let i = 0; i < array.length; i++) {
//      if (min > array[i]) {
//          min = array[i];
//      }
//  } 
//   console.log(min);

//   let hesili = min * max;

//   console.log(hesili);
  
// task5

//  for (let i = 0; i < array.length; i++) {
//      if (max < array[i]) {
//          max = array[i];
         
//      }
//  } 

//   for (let i = 0; i < array.length; i++) {
//      if (min > array[i]) {
//          min = array[i];
         
//      }
//  } 

//  for (let i = 1; i < array.length; i++) {
//     if (array[i] > array[max]) {
//         max = i;
//     }
//     if (array[i] < array[min]) {
//         min = i;
//     }
// }

// let temp = array[max];
// array[max] = array[min];
// array[min] = temp;

// console.log(array);

// task6

// for (let i = 0; i < array.length; i++) {
//     arr.push(array[i]);
// }
// console.log(arr);

// for (let i = 0; i < array.length; i++) {
//    if (array[i] === array[i+1]) {
//     console.log(i);
    
//    }
// }
// console.log("yoxdur");

// task7

// let sum = 0;

// let people = [
//     { name: "Aysel", age: 25 },
//     { name: "Rəşad", age: 30 },
//     { name: "Leyla", age: 18 },
//     { name: "Kamal", age: 40 }
// ];
// for (let i = 0; i < people.length; i++) {
//     sum += people[i].age; 
// }
// ortalama = sum / people.length;

// console.log(ortalama);

// task8

// let people = [
//     { name: "Aysel", age: 25, city: "Bakı" },
//     { name: "Rəşad", age: 30, city: "Gəncə" },
//     { name: "Leyla", age: 18, city: "Bakı" },
//     { name: "Kamal", age: 40, city: "Sumqayıt" }
// ];

// for (let i = 0; i < people.length; i++) {
//         if (people[i].city == "Bakı" && people[i].age >= 20) {
//             console.log(people[i].name);
            
//         }
//     }

// task10

let array1 = [1, 3, 5, 7];
let array2 = [2, 3, 6, 7, 8];
let arra = [];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j]) {     
             console.log(array1[i]);      
}  
  }  
}


// task11

// let array =[-10,12,-23,40,60,73,-6,-20];
// let HesilMin = 1;
// let HesilMax = 1;

// for (let i = 0; i < array.length; i++) {
//     if(array[i] < 0){
//         countMin++;
//     }
    
// }
// console.log(countMin);


// for (let i = 0; i < array.length; i++) {
//     if(array[i] > 0){
//         countMax++;
//     }
    
// }
// console.log(countMax);

// task12

// for (let i = 0; i < array.length; i++) {
//     if(array[i] < 0){
//         HesilMin *= array[i];
//     }
    
// }
// console.log(HesilMin);


// for (let i = 0; i < array.length; i++) {
//     if(array[i] > 0){
//         HesilMax *= array[i];
//     }
    
// }
// console.log(HesilMax);

// task13

// let array =[11,12,14,56];
// let arr = [];

// for (let i =  array.length-1; i >= 0; i--) {
//     arr.push(array[i])
    
// }
// console.log(arr);
