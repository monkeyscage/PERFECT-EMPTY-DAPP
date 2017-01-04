

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
          
		if(color=="green"){$("#msg").css({"border":"solid 0px #afa","background":"#dfd"});$("#msgclose").css("color","#green");$("#msgclose").show();}
		if(color=="red"){$("#msg").css({"border":"solid 0px #faa","background":"#fdd"});$("#msgclose").css("color","#red");$("#msgclose").show();}
		if(color=="orange"){$("#msg").css({"border":"solid 0px #FFAE00","background":"#FFD16E"});$("#msgclose").css("color","#orange");$(".jump").hide();$("#msgclose").show();}
		
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


function checkTransaction(ob,hash,type,n){
$(ob).show();
    var t=1;
  
console.log("checking... "+hash);
    var obj;
    web3.eth.getTransactionReceipt(hash,function(error, obj) {
    if(error)console.log("Error: "+error);

    if(obj!=null)console.log(n+" "+obj["blockHash"]);
    if(obj!=null)console.log(n+" "+JSON.stringify(obj, null, 4));
    if(obj!=null){if((obj["blockHash"]=="0x0000000000000000000000000000000000000000000000000000000000000000")||(obj["blockHash"]==null)){
    //se transazione non minata
    t++;
    console.log("obj not null hash 0 or null");
    
    setTimeout(function() {checkTransaction(ob,hash,type,n);}, 4000);
    }else{
    console.log("obj not null hash not null");
    //se transazione minata
      
        if(obj["gasUsed"]==n){
         //errore
         $("#msgclose").show();
         setMsg("red","some problem occured: <a href='http://testnet.etherscan.io/tx/"+hash+"' target='_blank'>"+hash+"</a>","stop");
        }else{
         $(ob).hide();
         checkWallet();
         //transazione minata con successo         
         setMsg("green","transaction: <a href='http://testnet.etherscan.io/tx/"+hash+"' target='_blank'>"+hash+"</a>","stop");
        }

    }
if(t>=120)t=0;
}else{setTimeout(function() {checkTransaction(ob,hash,type,n);}, 4000);}
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
                   }
                   });
                   createIcon("#walletico",web3.eth.accounts[selectedwallet]);
		}else{
	           $("#noWalletAlert").show();
                   $("#my-coins").hide();
                }	
}

function checkweb3(){


    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {

    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
    $("#problem").hide();
    //$.getScript('deploymentpan.js');
    console.log("dep found");
    checkWallet();
    start();
    } else if (typeof Web3 !== 'undefined') {

    // If there isn't then set a provider
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
    setTimeout(function(){location.reload(); }, 2000);

    }else if(typeof web3 == 'undefined' && typeof Web3 == 'undefined'){

    alert("Please Access Using MIST Browser Or Metamask");
    console.log('No web3? You should consider trying MetaMask!');
    alert("No web3? You should consider trying MetaMask!");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

  }

 
   // If no accounts are present, show the floating baloon
   if ((!web3.eth.accounts || (web3.eth.accounts.length == 0))) {
   alert("Please Enable your Wallet");
   }else{}


}
