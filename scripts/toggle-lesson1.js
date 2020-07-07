document.getElementById("a1").addEventListener("click",function(){
    if(document.getElementById("b1").style.display == "none")
        document.getElementById("b1").style.display = "block";
    else document.getElementById("b1").style.display = "none";
});
document.getElementById("b1").style.display = "none";

document.getElementById("a2").addEventListener("click",function(){
    if(document.getElementById("b2").style.display == "none")
        document.getElementById("b2").style.display = "block";
    else document.getElementById("b2").style.display = "none";
});
document.getElementById("b2").style.display = "none";