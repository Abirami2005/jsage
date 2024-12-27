// let age=document.getElementById("rt").value;
// var l=Number(age)
// var res=document.getElementById("ress");
document.getElementById("de").onclick=function(){
let age=document.getElementById("rt").value;
let l=Number(age);
let res=document.getElementById("ress");
if(l>=100){
    res.textContent="you are too old not eligible";
}
else if(l>=18){
    res.textContent="you are eligible to enter the site";
}
else if(l==0){
    res.textContent="you are just born not eligible to enter the site";
}
else if(l<18){
    res.textContent="not eligible to enter the site";
}
else{
    res.textContent="enter the correct input";
}
}