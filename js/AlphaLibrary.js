contracts = {};
ctrAddresses = {};



contracts["AlphaLayer"] = {
	interface: [ { "constant": false, "inputs": [ { "name": "labeltype", "type": "uint256" }, { "name": "labelindex", "type": "uint256" }, { "name": "label", "type": "string" }, { "name": "creator", "type": "address" }, { "name": "exposed", "type": "bool" } ], "name": "setLabel", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "o", "type": "address" } ], "name": "setOwner", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "d", "type": "address" }, { "name": "addr", "type": "address" }, { "name": "index", "type": "uint256" }, { "name": "quant", "type": "uint256" } ], "name": "addUint", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" }, { "name": "index", "type": "uint256" } ], "name": "readBool", "outputs": [ { "name": "", "type": "bool", "value": false }, { "name": "", "type": "string", "value": "" }, { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "t", "type": "uint256" }, { "name": "u", "type": "uint256" } ], "name": "exposed", "outputs": [ { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "a", "type": "address" }, { "name": "d", "type": "address" }, { "name": "u", "type": "uint256" } ], "name": "readPermissions", "outputs": [ { "name": "", "type": "address", "value": "0x" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "d", "type": "address" }, { "name": "addr", "type": "address" }, { "name": "index", "type": "uint256" }, { "name": "info", "type": "string" } ], "name": "addString", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "d", "type": "address" }, { "name": "addr", "type": "address" }, { "name": "index", "type": "uint256" }, { "name": "addr2", "type": "address" } ], "name": "addAddress", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "d", "type": "address" }, { "name": "addr", "type": "address" }, { "name": "index", "type": "uint256" }, { "name": "check", "type": "bool" } ], "name": "addBool", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x05065ccbf3084c3feb291f9f116b4185154c203b" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "c", "type": "address" } ], "name": "setController", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "records", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" }, { "name": "index", "type": "uint256" } ], "name": "readUint", "outputs": [ { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "string", "value": "" }, { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "a", "type": "address" }, { "name": "u", "type": "uint256" }, { "name": "b", "type": "bool" } ], "name": "allow", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "i", "type": "uint256" } ], "name": "readLog", "outputs": [ { "name": "", "type": "address" }, { "name": "", "type": "string" }, { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" }, { "name": "index", "type": "uint256" } ], "name": "readAddress", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "", "type": "string", "value": "" }, { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" }, { "name": "index", "type": "uint256" } ], "name": "readString", "outputs": [ { "name": "", "type": "string", "value": "" }, { "name": "", "type": "string", "value": "" }, { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" }, { "name": "t", "type": "uint256" }, { "name": "index", "type": "uint256" } ], "name": "readString", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "address" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "init", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "controller", "outputs": [ { "name": "", "type": "address", "value": "0x05065ccbf3084c3feb291f9f116b4185154c203b" } ], "payable": false, "type": "function" }, { "inputs": [ { "name": "control", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "control", "template": "elements_input_address", "value": "0x05065cCBF3084c3FEB291f9f116B4185154c203b" } ], "payable": false, "type": "constructor" } ],
	address: "0xb03E6fc8627BFEf96efE0B1A41d79d019D38c5E6"
};
contracts["AlphaLayer"].contractClass = web3.eth.contract(contracts["AlphaLayer"].interface);
contracts["AlphaLayer"].contract = contracts["AlphaLayer"].contractClass.at(contracts["AlphaLayer"].address);
if (!ctrAddresses["AlphaLayer"]){ ctrAddresses["AlphaLayer"] = [] }ctrAddresses["AlphaLayer"].push("0xb03E6fc8627BFEf96efE0B1A41d79d019D38c5E6");

var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};

function escapeX(string) {
  return String(string).replace(/[<>"']/g, function (s) {
    return entityMap[s];
  });
}

function loadAlphaString(ob,layer,addr){

contracts['AlphaLayer'].contract.readString(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
$(ob).text(escapeX(data[0]));
}
});
}

function loadAltAlphaString(ob,layer,addr,alt){

contracts['AlphaLayer'].contract.readString(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
   if(data[0]==""){
      $(ob).text(alt);
   }else{
      $(ob).text(escapeX(data[0]));
   }
  }
});
}

function loadAlphaUint2String(ob,layer,addr){

contracts['AlphaLayer'].contract.readUint(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
$(ob).text(escapeX(data[0]));
}
});
}

function loadAltAlphaUint2String(ob,layer,addr,alt){

contracts['AlphaLayer'].contract.readUint(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
   if(data[0]==""){
      $(ob).text(alt);
   }else{
      $(ob).text(escapeX(data[0]));
   }
  }
});
}

function loadAlphaUint(ob,layer,addr){

contracts['AlphaLayer'].contract.readUint(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
$(ob).text(parseInt(data[0]));
}
});
}

function loadAltAlphaUint(ob,layer,addr,alt){

contracts['AlphaLayer'].contract.readUint(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
   if(data[0]==""){
      $(ob).val(alt);
   }else{
      $(ob).val(parseInt(data[0]));
   }
  }
});
}


function loadAlphaBool2String(ob,layer,addr){

contracts['AlphaLayer'].contract.readBool(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
$(ob).text(escapeX(data[0]));
}
});
}

function loadAltAlphaBool2String(ob,layer,addr,alt){

contracts['AlphaLayer'].contract.readBool(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
   if(data[0]==""){
      $(ob).text(alt);
   }else{
      $(ob).text(escapeX(data[0]));
   }
  }
});
}

function loadAlphaAddress2String(ob,layer,addr){

contracts['AlphaLayer'].contract.readAddress(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
$(ob).text(escapeX(data[0]));
}
});
}

function loadAltAlphaAddress2String(ob,layer,addr,alt){

contracts['AlphaLayer'].contract.readAddress(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
   if(data[0]==""){
      $(ob).text(alt);
   }else{
      $(ob).text(escapeX(data[0]));
   }
  }
});
}


function loadAlphaImage(ob,layer,addr){

contracts['AlphaLayer'].contract.readString(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
$(ob).attr("src" , escapeX(data[0]));
}
});
}


function loadAltAlphaImage(ob,layer,addr,alt){
contracts['AlphaLayer'].contract.readString(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
        if(data[0]==""){
           $(ob).attr("src" , alt);
        }else{
           $(ob).attr("src" , escapeX(data[0]));
        }
     }
});
}


function loadAlphaBackground(ob,layer,addr){
contracts['AlphaLayer'].contract.readString(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
         $(ob).css("background-image" , "url("+escapeX(data[0])+")");
   }
});
}


function loadAltAlphaBackground(ob,layer,addr,alt){
contracts['AlphaLayer'].contract.readString(addr,layer,function(err,data){
if(err){console.log("Error: "+err);}else{
   if(data[0]!=""){
      $(ob).css("background-image" , "url("+escapeX(data[0])+")");
   }else{
      $(ob).css("background-image" , "url("+alt+")");
   }
  }
});
}
