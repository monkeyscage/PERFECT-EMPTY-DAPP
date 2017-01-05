
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

