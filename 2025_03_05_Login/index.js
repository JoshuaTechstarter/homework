function onClickButton() {
    const boxDiv = document.getElementById("box");
    boxDiv.innerHTML = "<button>Im a button</button>";
    const currentBgColor = boxDiv.style.backgroundColor;
    console.log("box div background", currentBgColor);
    boxDiv.style.backgroundColor = "green";
  }
  
  function onLogin() {
    const emailTI = document.getElementById("emailti").value;
    const password = document.getElementById("passwordti").value;
    console.log("My Credentials", emailTI, password);
    alert(
      `Der Benutzer hat sich erfolgreich mit ${emailTI} und ${password} angemeldet`
    );
  }
  