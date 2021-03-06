// ----------- contagem regressiva ------------

// Set the date we're counting down to
var countDownDate = new Date("Jun 11, 2022 16:45:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //display the result
  for(let i = 0; i < 2; i++){
    document.getElementsByClassName("div-dias")[i].innerHTML = days;
    document.getElementsByClassName("div-horas")[i].innerHTML = hours;
    document.getElementsByClassName("div-minutos")[i].innerHTML = minutes;
    document.getElementsByClassName("div-segundos")[i].innerHTML = seconds;
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    for(let i = 0; i < 2; i++){
      document.getElementsByClassName("div-dias")[i].innerHTML = "0";
      document.getElementsByClassName("div-horas")[i].innerHTML = "0";
      document.getElementsByClassName("div-minutos")[i].innerHTML = "0";
      document.getElementsByClassName("div-segundos")[i].innerHTML = "0";
    }
    document.getElementById("contagem-final").style.display = "block";
  }
  
}, 1000);

// ------- Copiar pix para área de transferência -----------------
//garante que a frase "pix copiado" não está exibida
document.getElementById("pix-copiado").style.display = "none";

// funcao que exibe por um tempo a frase "pix copiado"
function copiarPix(){  
  let pixCopiado = document.getElementById("pix-copiado");
  const pix = "48781278802";
  if(navigator.clipboard){
    navigator.clipboard.writeText(pix);
    pixCopiado.style.display = "inline";

    countDownSeconds();
    }   
}

function countDownSeconds(){
  let  timeleft = 2;
  let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("pix-copiado").style.display = "none";
  }
  timeleft -= 1;
  }, 1000);
}




