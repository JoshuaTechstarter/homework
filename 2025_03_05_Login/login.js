function onLogin() {
    const emailTI = document.getElementById("emailti").value;
    const password = document.getElementById("passwordti").value;
    console.log("My Credentials", emailTI, password);
    alert(
      `Email: ${emailTI} und Passwort ${password}.`
    );
  }