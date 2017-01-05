
contracts["miniDapp"] = {
	interface: [ { "constant": true, "inputs": [], "name": "getsimpleString", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "s", "type": "string" } ], "name": "setsimpleString", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x05065ccbf3084c3feb291f9f116b4185154c203b" } ], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" } ],
	address: "0xe6d8e335373EA7Bae6f10dF4190e63a1e8732F36"
};
contracts["miniDapp"].contractClass = web3.eth.contract(contracts["miniDapp"].interface);
contracts["miniDapp"].contract = contracts["miniDapp"].contractClass.at(contracts["miniDapp"].address);
if (!ctrAddresses["miniDapp"]){ ctrAddresses["miniDapp"] = [] }ctrAddresses["miniDapp"].push("0xe6d8e335373EA7Bae6f10dF4190e63a1e8732F36");
