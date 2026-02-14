function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

document.addEventListener("DOMContentLoaded", function () {

  const idade = calcularIdade("2001-02-05");

  const idadeTexto = document.getElementById("idade-texto");
  if (idadeTexto) {
    idadeTexto.textContent = idade;
  }

  const subtitle = document.querySelector(".subtitle");
  
  if (subtitle) {
    const textoCompleto = `Desenvolvedor Back-End Java | ${idade} anos`;
    subtitle.textContent = "";

    let i = 0;

    function typeEffect() {
      if (i < textoCompleto.length) {
        subtitle.textContent += textoCompleto.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
      }
    }

    typeEffect();
  }

});
