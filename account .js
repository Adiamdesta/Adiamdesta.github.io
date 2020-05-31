"user strict";
(function(){


window.onload =function(){
let makeAccount=document.getElementById("submit");
makeAccount.onclick = show;
}
let mkAccount = function (){
let accountName = document.getElementById("name");
let deposit = document.getElementById("balance");
let getName= accountName.value;
let getBalance= deposit.value;
return{
name:function(){return getName},
balance:function(){return getBalance}
};
};

function show(){

let account =mkAccount();
let accountdisplay = document.getElementById("display");
let currentAccount = accountdisplay.value;
accountdisplay.value = currentAccount+"\n Account Name: "+account.name()+" Balance: "+account.balance();

}

})();
