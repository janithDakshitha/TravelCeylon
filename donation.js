
let DonationInfo=document.getElementById("donationInfo")
let Submit = document.getElementById("Submit1")
let fn= document.getElementById("FN")
let add=document.getElementById("Add")
let Card=document.getElementById("card")
let noc=document.getElementById("NOC")
let cn=document.getElementById("CN")
let cvv=document.getElementById("CVV")
let Donationamount=document.getElementById("Donation-amount")
let donationyear=document.getElementById("donation-year")
let donationmonth=document.getElementById("donation-month")
let popupmessage=document.getElementById("popup-message")
let Closepopupmessage=document.getElementById("closepopupmessage")
let submitbtn=document.getElementById("submit-btn")
let Button=document.getElementById("button")
let Message=document.getElementById("message")
//submitbtn.addEventListener("click",showpopup);

DonationInfo.addEventListener("submit",showpopup);

function showpopup(event){

event.preventDefault();
let name= fn.value ;
let donationAmount=Donationamount.options[Donationamount.selectedIndex].value ;
let address = add.value;
let Noc=noc.value ;
let CN= cn.value ;
let CVV=cvv.value ;
Message.innerHTML= `Hi ${name}, You have donated ${donationAmount} `;
if(name!="" && 
donationAmount!=""&&
address!="" &&
Noc!="" &&
CN!="" &&
CVV!=""){
popupmessage.classList.add("openpopup-message")

}
Closepopupmessage.addEventListener("click",Closepopup);
function Closepopup(){
    location.reload();
    popupmessage.classList.remove("openpopup-message")}
}
    
