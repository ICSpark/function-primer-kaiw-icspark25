function functionIntiate(){
    console.log("********************");
    console.log("PROGRAM INITIALIZED");
    console.log("********************");    
}

function banker(dollars){
    console.log("$" + dollars + " is worth " + dollars * 4 + " quarters");
}

functionIntiate();
 
banker(4);

banker(10);

functionIntiate();

banker(2);

functionIntiate();
banker(0);