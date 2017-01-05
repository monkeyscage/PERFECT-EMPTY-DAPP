

$(document).ready(function (){
 checkweb3();    //don't remove
});


//start is always triggered once checkweb3() is done
function start(){
       
       // your code here

}


function menuClick(menu){
   $(".tab").hide();
   if(menu==1){$("#home").show();}
   if(menu==2){$("#faq").show();}
}



//we read from contract miniDapp.sol, calling the function getsimpleString()
function get(){
   $("#trans2").show();
   contracts['miniDapp'].contract.getsimpleString(function(err,data){
    if(err){console.log("Error: "+err);}else{
    $("#textoutput").text(escapeX(data));
    $("#trans2").hide();
    }
   });
}

//we write to contract miniDapp.sol, calling the function setsimpleString() we also specify the wallet we use and the gas, and we prepare the onscreen messages and trigger the transaction manager
function set(){console.log(web3.eth.accounts[selectedwallet]+" "+$("#wallets").val()+" "+selectedwallet+" "+$("#textinput").val());
   contracts['miniDapp'].contract.setsimpleString($("#textinput").val(),{from:""+web3.eth.accounts[selectedwallet], gas: 699999},function(err,transactionHash){
    if(err){console.log("Error: "+err);}else{
    //we show a "loading..." icon
    $("#trans1").show();
    //we add an on-screen message using the msg panel - this is optional
    setMsg("orange","mining transaction: <a href='http://testnet.etherscan.io/tx/"+transactionHash+"' target='_blank'>"+transactionHash+"</a>","start");
    //we start the transaction
    checkTransaction("#trans1",transactionHash,"SetSimpleString",699999,"thanks!");
    //the transaction manager will later remove the loading...icon and set a "thanks" message
    }
   });
}





//this is always triggered once checkTransaction is done
function afterTransaction(transaction){

       // your code here

if(transaction=="SetSimpleString")alert("string stored!");

}


