function calcul(){
    var p = document.getElementById("width").value;;
    var n= document.getElementById("length").value;
    var sur =  Surfac(n, p);
}
function Surfac(n,p){
    var surfac = parseInt(n) * parseInt(p);
    document.getElementById("surface").innerText = surfac;
}