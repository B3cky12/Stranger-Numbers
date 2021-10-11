var numbershhh = parseInt(Math.random() * 101);
// console.log(numbershhh);
var resultado = document.getElementById("resultado");

var tentativas = 5;
var atualizarTentativas = document.getElementById("tentativas");
// console.log(tentativas > 0);
atualizarTentativas.innerHTML = tentativas;
// console.log(atualizarTentativas);

var teimoso = document.getElementById("teimoso");
var dica = document.getElementById("dica");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  // console.log(chute);

  if (tentativas > 0) {
    if (chute >= 0 && chute <= 100) {
      if (chute == numbershhh) {
        // console.log(chute);
        // console.log("acertou");
        var premio =
          "Você é o verdadeiro adivinhador! O número " +
          chute +
          " está correto!!";
        resultado.innerHTML = premio;
      } else {
        // console.log("errou!");
        var premio =
          "Tente de novo, quem sabe com a prática você tenha alguma chance.";
        resultado.innerHTML = premio;
        tentativas = tentativas - 1;
        atualizarTentativas.innerHTML = tentativas;

        if (numbershhh > chute) {
          dica.innerHTML = "Tente para mais..";
        } else {
          dica.innerHTML = "Tente para menos..";
        }
      }
    } else {
      var mensagemAoTeimoso =
        "Você deve digitar um número de 0 a 100. Não seja teimoso";
      // console.log(mensagemAoTeimoso);
      teimoso.innerHTML = mensagemAoTeimoso;
    }
  } else {
    resultado.innerHTML =
      "Poxa.. suas tentativas acabaram. O número era " + numbershhh + ".";
  }
}

function reiniciar() {
  numbershhh = parseInt(Math.random() * 101);
  teimoso.innerHTML = "Digite um número de 0 a 100";
  dica.innerHTML = "";
  tentativas = 5;
  atualizarTentativas.innerHTML = tentativas;
  resultado.innerHTML = "";

  console.log(numbershhh);
}