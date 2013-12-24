//var cookieName;
//function getCookie(c_name)
//{
//var c_value = document.cookie;
//var c_start = c_value.indexOf(" " + c_name + "=");
//if (c_start == -1)
//{
//c_start = c_value.indexOf(c_name + "=");
//}
//if (c_start == -1)
//{
//c_value = null;
//}
//else
//{
//c_start = c_value.indexOf("=", c_start) + 1;
//var c_end = c_value.indexOf(";", c_start);
//if (c_end == -1)
//{
//c_end = c_value.length;
//}
//c_value = unescape(c_value.substring(c_start,c_end));
//}
//return c_value;
//};

//function setCookie(c_name,value,exdays)
//{
//var exdate=new Date();
//exdate.setDate(exdate.getDate() + exdays);
//var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
//document.cookie=c_name + "=" + c_value;
//};

//function checkCookie()
//{
//var username=getCookie("username");
//if (username!=null && username!="")
//  {
//  alert("Welcome again " + username);
//  }
//else 
//  {
//  username=prompt("Please enter your name:","");
//  if (username!=null && username!="")
//    {
//    setCookie("username",username,365);
//    }
//  }
//};

function set(){
localStorage.currentGame = 1;
};

function reset(){
localStorage.currentGame = 0;
document.getElementById("game").style.display='none';
document.getElementById("creationStart").style.display='block';
};

function clan(i,n){
set();
localStorage.clanName=i;
localStorage.clanId=n;
document.getElementById("game").style.display='block';
document.getElementById("creationStart").style.display='none';
document.getElementById("clanName").innerHTML= "Clan: " + localStorage.clanName;
};













var blood = 0;
var herd = 0;


function Drink(number){
blood = blood + number;
document.getElementById("bloodbank").innerHTML = blood;
};

function buyHerd(){
var herdCost = Math.floor(10*Math.pow(1.1,herd));
if(blood >= herdCost){
herd += 1;
blood -= herdCost;
document.getElementById('totalHerd').innerHTML = herd;
document.getElementById('bloodbank').innerHTML = blood;
};
var nextCost = Math.floor(10*Math.pow(1.1,herd));
document.getElementById('herdCost').innerHTML = nextCost;
};













window.setInterval(function(){
Drink(herd);
}, 1000);

