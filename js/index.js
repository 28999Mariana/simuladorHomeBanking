//Inicio de sesión

function login() {
  //Validación de datos
  if (username == "admin" && password == "password") {
    //Mostrar información de la cuenta
    showAccountInfo();
    //Consulta de movimientos
    showMovements();
    //Transferencias
    transferMoney();
    //Pagos de servicios
    payServices();
    //Cambio de contraseña
    changePassword();
    //Cierre de sesión
    logout();
  } else {
    //Mostrar mensaje de error
    console.log("Usuario o contraseña incorrectos");
  }

}


//Información de la cuenta

function showAccountInfo() {
  console.log("Saldo disponible: $10000");
  console.log("Nombre de la cuenta: 1234-5678-9012-3456");
  console.log("Nombre del titular: Mariana Velázquez");

}


//Consulta de movimientos

function showMovements() {
  console.log("Transacciones: $500");
  console.log("Depósitos: $200");
  console.log("Retiros: $100");
  console.log("Pagos: $150");

}


//Transferencias

function transferMoney() {
  //Validación de datos
  if (amount > 0 && amount <= balance) {
    //Realizar transferencia
    console.log("Transferencia realizada con éxito");
  } else {
    //Mostrar mensaje de error
    console.log("Error al transferir dinero");
  }

}


//Pagos de servicios

function payServices() {
  //Validación de datos
  if (amount > 0 && amount <= balance) {
    //Realizar pago
    console.log("Pago realizado con éxito");
  } else {
    //Mostrar mensaje de error
    console.log("Error al pagar el servicio");
  }

}


//Cambio de contraseña

function changePassword() {
  //Validación de datos
  if (newPassword == confirmNewPassword) {
    //Cambiar contraseña
    console.log("Contraseña cambiada con éxito");
  } else {
    //Mostrar mensaje de error
    console.log("Error al cambiar la contraseña");
  }

}


//Cierre de sesión

function logout() {
  console.log("Sesión cerrada con éxito");

}


//Validación de datos

function validateData(data) {
  //Implementar validación de datos

}


//Seguridad

function encryptPassword(password) {
  //Implementar encriptación de contraseña

}


//Errores

function handleError(error) {
  //Mostrar mensaje de error
  console.log(error);

}


//Registro de actividades

function logActivity(activity) {
  //Registrar actividad

}