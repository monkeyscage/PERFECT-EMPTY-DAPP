contract miniDapp{
//use this variable in ALL you contracts! STANDARD
address public owner;

//a basic storage
string simpleString;

//an indexed storage
mapping(uint => string)mainMemory;

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

function setMemory(uint index,string s) returns(bool){
   if(msg.sender!=owner)throw;
   mainMemory[index]=s;
   return true;
}

function getString(uint index)constant returns(string){
   return mainMemory[index];
}

}
