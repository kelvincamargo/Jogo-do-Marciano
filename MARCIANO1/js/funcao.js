tiro = 0;
marciano = Math.floor(Math.random() * (6 - 1 + 1) + 1);

function ATIRAR(arvore) {
  if (tiro < 3) {
    tiro++
    if (arvore == marciano) {
      document.getElementById("arvore" + arvore).src = "IMG/marcianotop.jpg";
      document.getElementById("titulo").innerHTML ="<h3> Acertou!</h3><br><button onclick='Iniciar()'> RESET</button>";
      tiro=3;

    }else{
      if(tiro==3){
document.getElementById("arvore"+arvore).src= "IMG/Arvore e X.png";
document.getElementById("titulo").innerHTML = "<h3>GAME OVER!!</h3><br><button onclick='Iniciar()'>RESET</button>";
      }else{
      document.getElementById("arvore" + arvore).src = "IMG/Arvore e X.png";
      document.getElementById("titulo").innerHTML = "<h3> ERRO!</h3>";
    }
  }
}
}
function Iniciar(){
tiro=0;
marciano=Math.floor(Math.random()* (6 - 1 + 1) + 1);
document.location.reload(true);
}
