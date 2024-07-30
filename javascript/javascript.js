function verify(){
    let msg=document.getElementById("pan").value;
    if(msg.length==10){
        if(((msg[0],msg[1],msg[2],msg[3],msg[4],msg[9])>='A' && (msg[0],msg[1],msg[2],msg[3],msg[4],msg[9])<='Z') && ((msg[5],msg[6],msg[7],msg[8])>='0' && (msg[5],msg[6],msg[7],msg[8]))){
            alert("Verification successfull");
        }
        else{
            alert("Invalid pan number");
        }
    }
    else{
        alert("Invalid pan number\npan number must contain 6 characters and 4 digits");
    }
}