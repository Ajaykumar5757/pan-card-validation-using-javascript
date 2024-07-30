function verify(){
    let msg = document.getElementById("pan").value;
    let reg = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    if(msg.lengthy==10){

        if(reg.test(msg)){
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

// if(((msg[0],msg[1],msg[2],msg[3],msg[4],msg[9])>='A' && (msg[0],msg[1],msg[2],msg[3],msg[4],msg[9])<='Z') && ((msg[5],msg[6],msg[7],msg[8])>=0 && (msg[5],msg[6],msg[7],msg[8])<=9)){
//     alert("Verification successfull");
// }
// else{
//     alert("Invalid pan number");
// }
