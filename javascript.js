//JS DO CADASTRO JQUERY
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cpf = document.getElementById("cpf");
const data = document.getElementById("data");
const cep = document.getElementById("cep");
const telefone = document.getElementById("telefone");

function verificar(){
  if(nome.value==""){
  window.alert("Você esqueceu de preencher o nome")
  return false;
}

else if(email.value==""){
  window.alert("Você esqueceu de preencher o email")
  return false;
}

else if(pass.value==""){
  window.alert("Você esqueceu de preencher a senha")
  return false;
}

else if(cpf.value==""){
  window.alert("Você esqueceu de preencher o cpf")
  return false;
}
else if(cep.value==""){
  window.alert("Você esqueceu de preencher o cep")
  return false;
}
else if(data.value==""){
  window.alert("Você esqueceu de colocar a data")
  return false;
}

else if(telefone.value==""){
  window.alert("Você esqueceu de preencher o telefone")
  return false;
}

else{
  window.alert("Cadastro concluído")
  return true;
}
}

//JS DO LOGIN






//MASCARA JQUERY
$('#cpf').mask("999.999.999-99");
$('#telefone').mask('(99) 99999-9999');
$("#cep").mask("99.999-999");





// document.getElementById('olho').addEventListener('mousedown', function() {
//   document.getElementById('pass').type = 'text';
// });

// document.getElementById('olho').addEventListener('mouseup', function() {
//   document.getElementById('pass').type = 'password';
// });

// // Para que o password não fique exposto apos mover a imagem.
// document.getElementById('olho').addEventListener('mousemove', function() {
//   document.getElementById('pass').type = 'password';
// });


  
//   //javascript da LATERALBAR//*
//   function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }


//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }


//   function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }


//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//   }

//   function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//   }

//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     document.body.style.backgroundColor = "white";
//   }

