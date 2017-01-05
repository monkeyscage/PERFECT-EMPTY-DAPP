contract miniDapp{

   //use this variable in ALL your contracts! STANDARD
   address public owner;

   //a basic storage
   string simpleString;

   function miniDapp(){
      owner=msg.sender;
   }

   function setsimpleString(string s) returns(bool){
      if(msg.sender!=owner)throw;
      simpleString=s;
      return true;
   }

   function getsimpleString()constant returns(string){
      return simpleString;
   }


}
