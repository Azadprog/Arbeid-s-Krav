
/*
var potentialPostalCodes = ["231", "0186", "35012", "7011", "01304"]; // Array Liste med  verdier


var counter = 0;



while (potentialPostalCodes.length < 5 && counter < potentialPostalCodes.length) {
  
  if(potentialPostalCodes[counter] > bigone ) {
        bigone = potentialPostalCodes;
        console.log("Følgende nummer kvalifiserer som postnummer:" )
        
    counter++;
    
    }
    
} 

*/

var potentialPostalCodes = ["231", "0186", "35012a", "7011", "01304"]; // Array Liste med  verdier

/* For loop

for(var i = 0; i < potentialPostalCodes.length; i++) { 
    
    if (potentialPostalCodes[i].length === 4 ) {
        console.log("Følgende nummer kvalifiserer som postnummer:" + potentialPostalCodes[i]);
        
        
    } else {
        console.log("Følgende nummer kvalifiserer ikke som postnummer:" + potentialPostalCodes[i]);
        
}

}*/

/*  While Loop*/
var i = 0; // counter 

// While løkke kan bare være  true  
while(i < potentialPostalCodes.length){    
// hvis  variablen i er mindre enn potentialpoteialpostalCodes.length
    
    if (potentialPostalCodes[i].length === 4 ) { // hvis potentialPostalCodes[i].length  er lik 4
        
        console.log("Følgende nummer kvalifiserer som postnummer:" + potentialPostalCodes[i]);
        
        
    } else {
        console.log("Følgende nummer kvalifiserer ikke som postnummer:" + potentialPostalCodes[i]);}
    i++; // counter + 1
        
}
     

