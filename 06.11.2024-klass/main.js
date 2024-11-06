// task 1

// class Person {
//     constructor(name,age,country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;


//     }
// }
// const Person1 = new Person("Nihad",  20, "Japan");
// console.log(Person1);

// task2

class CustomMatch {
    constructor(num) {
         this.num = num;
    }

    plus(value) {
       this.num += value
        return this;
    }

    minus(value) {
        this.num -= value;
        return this;
    }


    multiply(value) {
        this.num *= value;
        return this;
    }

    divide(value) {
        this.num /= value;
        return this;
    }
}
var result = new CustomMatch(50)
  .plus(6)         
  .minus(30)       
  .multiply(3)    
  .divide(2);  

console.log(result);

