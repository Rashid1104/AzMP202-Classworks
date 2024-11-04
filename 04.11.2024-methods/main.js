// task1

// function findWordIndex(sentence, word) {
//     const index = sentence.indexOf(word);
//     return index;
// }

// console.log(findWordIndex("hello world i am steve","steve"));

// task2

// function sentenceCapitalization(sentence) {
//     const words = sentence.split(' ');
    
//     let longestWord = '';
    
//     for (let i = 0; i < words.length; i++) {
//         const cleanWord = words[i].replace(/[.,!?;]$/, '');
        
//         if (cleanWord.length > longestWord.length) {
//             longestWord = cleanWord;
//         }
//     }
    

//     return longestWord;
// }
// console.log(sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores."));


// task3

// function Annagrammas(str1,str2){
//     const norm1 = str1.toLowerCase();
//     const norm2 = str2.toLowerCase();

//     if (norm1.length !== norm2.length) {
//         return false;
//     }

//     const word1 = norm1.split('').sort().join('');
//     const word2 = norm2.split('').sort().join('');

//     return word1 === word2;
// }

// console.log(Annagrammas("hello","olleh"));


