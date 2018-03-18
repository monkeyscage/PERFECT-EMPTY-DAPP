connect(){
contracts["miniDapp"] = {
	interface: [ { "constant": true, "inputs": [], "name": "getsimpleString", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "s", "type": "string" } ], "name": "setsimpleString", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "" } ], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" } ],
	address: "0x039517104A0422522A2aE73134F06973C7419353"
};
contracts["miniDapp"].contractClass = web3.eth.contract(contracts["miniDapp"].interface);
contracts["miniDapp"].contract = contracts["miniDapp"].contractClass.at(contracts["miniDapp"].address);
if (!ctrAddresses["miniDapp"]){ ctrAddresses["miniDapp"] = [] }ctrAddresses["miniDapp"].push("0x039517104A0422522A2aE73134F06973C7419353");
}
