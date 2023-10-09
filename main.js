function validarContraseña() {
    // Obtenemos los valores de los select
    var digito1 = document.getElementById("digito1").value;
    var digito2 = document.getElementById("digito2").value;
    var digito3 = document.getElementById("digito3").value;
  
    // Validamos la contraseña
    var contraseña = digito1 + digito2 + digito3;
    if (contraseña === "911") {
      document.getElementById("resultado").innerHTML = "password 1 correcto";
    } else if (contraseña === "714") {
      document.getElementById("resultado").innerHTML = "password 2 correcto";
    } else {
      document.getElementById("resultado").innerHTML = "password incorrecto";
    }
  }
  