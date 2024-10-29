
    let salary = +prompt("Emek haqqınızı daxil edin:");
    let desiredAmount = +prompt("İstədiyiniz məbləği daxil edin:");
    let duration = +prompt("İstədiyiniz müddəti (ay) daxil edin:");

let credit = desiredAmount;

    if (credit < salary * 10) {
        if(duration > 0 && duration < 12){
            creditInMonth = (desiredAmount + desiredAmount * 0.13) / duration;
            credit = desiredAmount + desiredAmount * 0.13;   
if (creditInMonth > salary * 0.45 ) {
    console.log(creditInMonth + ' in ' + duration + ' months');  
}else{
    console.log("size bu shertlerle kredit dushmur");
    
}
        }else if(duration > 12 && duration < 24){
            creditInMonth = (desiredAmount + desiredAmount * 0.15) / duration;
            credit = desiredAmount + desiredAmount * 0.15;  
            if (creditInMonth > salary * 0.45 ) {
                console.log(creditInMonth + ' in ' + duration + ' months');  
            }else{
                console.log("size bu shertlerle kredit dushmur");
                
            }   
        }else if(duration > 24 && duration < 36){
            creditInMonth = (desiredAmount + desiredAmount * 0.17) / duration;
            credit = desiredAmount + desiredAmount * 0.17; 
            if (creditInMonth > salary * 0.45 ) {
                console.log(creditInMonth + ' in ' + duration + ' months');  
            }else{
                console.log("size bu shertlerle kredit dushmur");
                
            }
       }
    }else{
        console.log("size bu shertlerle kredit dushmur");
        
    }
    
