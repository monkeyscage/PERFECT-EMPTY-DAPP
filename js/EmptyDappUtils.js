
function gup( name, url ) {
      if (!url) url = location.href;
      name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
      var regexS = "[\\?&]"+name+"=([^&#]*)";
      var regex = new RegExp( regexS );
      var results = regex.exec( url );
      return results == null ? null : results[1];
    }




function createIcon(divid,addr){


        var icona = 'url(' + blockies.create({ seed:addr ,size: 8,scale: 16}).toDataURL()+')';
        
        $(divid).css('background-image' , icona);
}

function setMsg(color,msg,action){
                $("#msg").css({"border":"solid 3px white","background":color});$("#msgclose").css("color",color);$("#msgclose").show();
		$("#msgcnt").html(msg);
		if(action=="start"){$("#loading").show();}
	        if(action=="stop"){$("#loading").hide();}
		$("#msg").show();
	}



 $("#wallets").change(function(){reloadWallet();});

      $("#msgclose").click(function(){$("#msg").hide();});



$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}


function checkTransaction(ob,hash,transaction,gas,endmessage){
$(ob).show();
    var t=1;
  
console.log("checking... "+hash);
    var obj;
    web3.eth.getTransactionReceipt(hash,function(error, obj) {
    if(error)console.log("Error: "+error);

    if(obj!=null)console.log(gas+" "+obj["blockHash"]);
    if(obj!=null)console.log(gas+" "+JSON.stringify(obj, null, 4));
    if(obj!=null){if((obj["blockHash"]=="0x0000000000000000000000000000000000000000000000000000000000000000")||(obj["blockHash"]==null)){
    //se transazione non minata
    t++;
    console.log("obj not null hash 0 or null");
    
    setTimeout(function() {checkTransaction(ob,hash,transaction,gas,endmessage);}, 4000);
    }else{
    console.log("obj not null hash not null");
    //se transazione minata
      
        if(obj["gasUsed"]==gas){
         //errore
         $("#msgclose").show();
         setMsg("red","some problem occured: <a href='http://testnet.etherscan.io/tx/"+hash+"' target='_blank'>"+hash+"</a>","stop");
        }else{
         $(ob).hide();
         checkWallet();
         
         //transazione minata con successo         
         setMsg("green",endmessage+"<br><br>transaction: <a href='http://testnet.etherscan.io/tx/"+hash+"' target='_blank'>"+hash+"</a>","stop");
         afterTransaction(transaction);
        }

    }
		  
//will check ONLY 120 times!		  
if(t>=120)t=0;
}else{setTimeout(function() {checkTransaction(ob,hash,transaction,gas,endmessage);}, 4000);}
});

//}


}


function  reloadWallet(){
     
     if($.urlParam('w')!=null){
     $("#address").text(escapeX($.urlParam('w')));
     createIcon("#DSocialwallet",$.urlParam('w'));
     web3.eth.defaultAccount=escapeX($.urlParam('w'));
     }else{
     web3.eth.defaultAccount = web3.eth.accounts[selectedwallet]; 
     selectedwallet=$("#wallets").val();
     $("#address").text(selectedwallet);
     createIcon("#DSocialwallet",selectedwallet);
     }
}


 function checkWallet(){
		var accounts = web3.eth.accounts;
		if(accounts.length>0){	                    
                   if($("#wallets").html()==""){
                           for(var i=0;i<accounts.length;i++)
                              $("#wallets").append('<option value="'+i+'">'+accounts[i]+'</option>');
                   }
                   selectedwallet=$("#wallets").val();
                   web3.eth.getBalance(web3.eth.accounts[selectedwallet],function(err,data){
                      if(err){console.log("Error: "+err);
                   }else{
                      var temp=""+web3.fromWei(data, "ether");
                      $("#balance").text(temp.substring(0, 8)+" ETH");
                      loadAvatar();
                   }
                   });
                   createIcon("#walletico",web3.eth.accounts[selectedwallet]);
		}else{
	           $("#noWalletAlert").show();
                   $("#my-coins").hide();
       
                }	
}


function loadAvatar(){
loadAltAlphaImage("#avatarimage",6,web3.eth.accounts[$("#wallets").val()],"img/avatar.jpg");
loadAltAlphaString("#username",1,web3.eth.accounts[$("#wallets").val()],"User Unknown");
}

function checkweb3(){


    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {

    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
    $("#problem").hide();
    checkWallet();
    console.log("starting...");
    start();
    } else if (typeof Web3 !== 'undefined') {

    // If there isn't then set a provider
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
    setTimeout(function(){location.reload(); }, 2000);

    }else if(typeof web3 == 'undefined' && typeof Web3 == 'undefined'){

    alert("Please Access Using MIST Browser Or Metamask");
    console.log('No web3? You should consider trying MetaMask!');
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

  }

 
   // If no accounts are present, show the floating baloon
   if ((!web3.eth.accounts || (web3.eth.accounts.length == 0))) {
   alert("Please Enable your Wallet");
   }else{}


}

$(document).ready(function(){

$("#avatarimage").click(function(){window.open('http://etherscape.io/alphalayer.html?str=1,6&w='+web3.eth.accounts[$('#wallets').val()],'_blank');});

$(".menuitem").click(function(event){$(".menuitem").css("border-bottom" , "solid 7px transparent"); $("#"+$(event.target).attr('id')).css("border-bottom" , "solid 7px white");menuClick($(event.target).attr('index'));});
});

