 //creating a variable 

 let age = 20
 //if the person is less than 2 years old , print a message that the person is a baby
 if(age < 2){
    console.log("you are a Baby");
    
 }
 //if the person is at least 2 years old but less than 4 prints a message that the person is a toddler
 else if(age >= 2 && age < 4){
    console.log("you are a toddler");
    
 }
 //if the person is at least 4  years old but less than 13, print a message that the person is a kid
 else if(age >= 4 && age < 13 ){
    console.log("you are a kid");
    
 }
 //if the person is at least 13 years old but less than 20, print a messsage that the person is teenager
 else if(age >= 13 && age < 19){
    console.log("you are a teenager");
 }
 //if the person is at least 20 years old but less than 65, print a message that the person is adult
 else if(age >= 20 && age < 65){
    console.log("you are an adult");
    
 }
 //if the person age 65 or older,print a message that the person is an elder
 else if (age >= 65){
    console.log(" you are an elder");
    
 }