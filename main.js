function a(n){
    let val= document.getElementById("para").innerText;
    val = n;
    console.log(val);
    document.getElementById("para").innerText+=val;
}
function d(){
    document.getElementById("para").innerText="";

}
function b(){
    let expression=document.getElementById("para").innerText;
    let ans=eval(expression);
    document.getElementById("para").innerText=ans;
}
function c(){
    let v= document.getElementById("para").innerText;
    //console.log(typeof(v));
    let num=v.length-1;
    let y=v.substring(0,num);
    console.log(y);
    document.getElementById("para").innerText=y;
}
function e(){
    // var x = Math.floor(Math.random()*100);
    // var y = Math.floor(Math.random()*100);
    // var z = Math.floor(Math.random()*100);
    //document.getElementById("cnt").style.backgroundColor.random();
    // document.getElementsByClassName("disp").style.backgroundColor="rgb("+y+","+y+","+y+")";
    // document.getElementsByClassName("btn").style.backgroundColor="rgb("+z+","+z+","+z+")";
    alert("THANKS FOR USING THIS CALCULATOR!!");

}