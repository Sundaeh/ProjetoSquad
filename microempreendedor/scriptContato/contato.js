  function comprar() {
    alert("PARABÉNS! COMPRA REALIZADA. OBRIGADA POR COMPRAR CONOSCO!")
 }

 function validar() {
  let campo_nome = formulario.nome;
  
  if(nome.value =="") {
     alert("Nome não informado");

    nome.focus();

  } else { 
   (nome.value ="")
    alert("Mensagem Enviada! Obrigada por entrar em contato conosco.");
    nome.focus();
  }
}