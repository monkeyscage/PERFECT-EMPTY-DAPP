$(document).ready(function (){
 checkweb3();    
});


//start is always triggered once checkweb3() is done
function start(){
       
       // your code here
}


function menuClick(menu){
$(".tab").hide();
if(menu==1){$("#home").show();}
if(menu==2){$("#faq").show();}
}
