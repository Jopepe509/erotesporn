var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

var idade = document.getElementById("idade")

function idade(){
  if(idade.value != 18) {
    alert("Você é menor mano então sai antes que eu ligue pros seus pais")
  }
}
