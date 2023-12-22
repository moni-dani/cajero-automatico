let accounts = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "4321" }
  ];
  
  let selectedAccount = null;
  
  function login() {
      let accountIndex = document.getElementById("account").value;
      let password = document.getElementById("password").value;
  
      if (password === accounts[accountIndex].password) {
          selectedAccount = accounts[accountIndex];
          document.getElementById("actions").style.display = "block";
          document.getElementById("result").innerHTML = '';
      } else {
          document.getElementById("result").innerHTML = "Contraseña incorrecta. Inténtalo nuevamente.";
      }
  }
  
  function checkBalance() {
      document.getElementById("result").innerHTML = `Saldo actual: $${selectedAccount.saldo}`;
  }
  
  function deposit() {
      let amount = prompt("Ingrese el monto a depositar");
      amount = parseFloat(amount);
  
      if (isNaN(amount) || amount <= 0) {
          document.getElementById("result").innerHTML = "Ingrese monto valido ";
          return;
      }
  
      selectedAccount.saldo += amount;
      document.getElementById("result").innerHTML = `Se depositaron $${amount}. Nuevo saldo: $${selectedAccount.saldo}`;
  }
  
  function withdraw() {
      let amount = prompt("Ingrese el monto a retirar:");
      amount = parseFloat(amount);
  
      if (isNaN(amount) || amount <= 0 || amount > selectedAccount.saldo || (selectedAccount.saldo - amount) < 10 || (selectedAccount.saldo - amount > 990)) {
          document.getElementById("result").innerHTML = "Monto invalido o excede el limite permitido";
          return;
      }
  
      selectedAccount.saldo -= amount;
      document.getElementById("result").innerHTML = `Se retiraron $${amount}. Nuevo saldo: $${selectedAccount.saldo}`;
  }
  