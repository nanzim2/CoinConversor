
    const botao = document.getElementById("botao");
      botao.addEventListener("click", function () { //funcao embutida que exibe o valor do resultado, uma variavel vezes outra variavel
      valordolar = prompt("Digite um valor em dolar"); //valordolar = prompt("Digite um valor em dolar");
      umdolar = 5.91;
      alert("R$" + valordolar * umdolar);
    });

    const chk = document.getElementById('chk')

    chk.addEventListener('change', () => {
      document.body.classList.toggle('dark')
    })