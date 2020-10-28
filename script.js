function verificaEmail() {
  if ( document.forms["email"].email.value == ""
    || document.forms["email"].email.value.indexOf("@") == -1
     || document.forms["email"].email.value.indexOf(".") == -1
  ) {
    alert("E-mail invalido");
    return false;
  } else
   //alert("Bem vind@ " + document.getElementById("campo-email").value + " !");
   alert(`Bem vind@, ${document.getElementById("campo-email").value}!`);
  return true;
}


