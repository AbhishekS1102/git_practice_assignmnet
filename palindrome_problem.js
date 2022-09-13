let str="abcba"
let bag="";
   for(let i=str.length-1;i>=0;i--){
       bag=bag+str[i];
   }
   
   if(bag==str){
       console.log("Yes it ia Palindrome");
   }else{
       console.log("No it is not a Palindrone");
   }