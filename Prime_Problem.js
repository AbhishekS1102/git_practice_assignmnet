let num=14;
let count=0;
for(let i=1;i<=num;i++){
    if(num%i==0){
        count+=1;
    }

}
if(count==2){
    console.log("Yes it is a Prime number");
}else{
    console.log("No it not a Prime Number");
}