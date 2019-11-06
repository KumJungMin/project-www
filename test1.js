'use strict'

const Web3 = require('web3');
// npm install web3 --save
var contract = require("truffle-contract");
//npm install truffle-contract@3 --save
const fs = require('fs');
const util = require('util');
const assert = require('assert')
//require('truffle-test-utils').init();

var web3Provider = new Web3.providers.HttpProvider('http://localhost:22000');
var web3 = new Web3(web3Provider);

const tt_contract_json = fs.readFileSync('/home/admin/git/project-www/build/contracts/UserCrud.json', 'utf-8');
const abi = JSON.parse(tt_contract_json);

Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;

const myaddr = '0xed9d02e382b34818e88b88a309c7fe71e65f419d'

//console.log('abi', abi)
var tt_contract = contract(abi);
tt_contract.setProvider(web3Provider);


async function test2() {
	const crudInstance = await tt_contract.deployed();
	// const accounts = await web3.eth.getAccounts()
	const account = await web3.eth.personal.newAccount('!@superpassword')
	console.log('account ==>', account);
	
	web3.eth.personal.unlockAccount(account, "!@superpassword", 600)
		.then(console.log('Account unlocked!'));

	/*var event = crudInstance.LogNewUser({_from:web3.eth.coinbase},{fromBlock: 0, toBlock: 'latest'});

	event.watch(function(error, result){
	    if (!error)
	        console.log("==================================")
	        console.log(result);
	});
	
	var event2 = crudInstance.LogUpdateUser({_from:web3.eth.coinbase},{fromBlock: 0, toBlock: 'latest'});

	event2.watch(function(error, result){
	    if (!error)
	        console.log("==================================");
	        console.log(result);
	});
	
	var event3 = crudInstance.LogDeleteUser({_from:web3.eth.coinbase},{fromBlock: 0, toBlock: 'latest'});

	event3.watch(function(error, result){
	    if (!error)
	        console.log("==================================");
	        console.log(result);
	});*/
	// await web3.eth.getAccounts()
    try {
		await crudInstance.insertUser(account, "c@a.com", "정휘선", 1000, { from: myaddr, gas: 4500000 })
    }
    catch (exception) {
        console.log(exception);
    }

	var user = await crudInstance.getMyaddr("c@a.com", { from: myaddr })
		.then(async (result) => {
			return console.log('c@a.com ===> ', await crudInstance.getUser(result));
		})
    // var total = await crudInstance.getUserCount();
    // console.log('user total', total.toNumber());

	// await crudInstance.updateUserPoint(0x1d342d4f1ff9a12c52d6a715f910a47ad111369a, -1000, { from: myaddr })

	// var user = await crudInstance.getUser(0x1d342d4f1ff9a12c52d6a715f910a47ad111369a);
    // console.log('user ==> ', user);
    // var total = await crudInstance.getUserCount();
    // console.log('user total ==>', total.toNumber());
}
test2()