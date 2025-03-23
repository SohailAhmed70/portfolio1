function soh(){
    let user_p=document.getElementById("pass").value;
    let user_ccp=document.getElementById("cp").value;
    
    if(user_p!=user_ccp){
    document.getElementById("mg").innerHTML="Incorrect Password";
    return false;
    
    }
    }