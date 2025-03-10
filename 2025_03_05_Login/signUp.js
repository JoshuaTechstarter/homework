function onSignup(){
    const userEmail = document.getElementById("emailti").value ;
    const userPassword = document.getElementById("passwordti").value ;
    const userPasswordAgain = document.getElementById("repeatPasswordti").value ;
    const userFirstName = document.getElementById("firstName").value ;
    const userLastName = document.getElementById("lastName").value ;

    if (userEmail && userPassword && userPasswordAgain && userFirstName && userLastName == undefined){
        if (userEmail.indexOf("@") !== -1) {
        } else {alert("Gib eine richtige E-Mail ein.")}
        if (userPassword === userPasswordAgain){  
            alert(`Nutzer erfolgreich angelegt\n E-Mail: ${userEmail}\n Passwort ${userPassword}\n First Name ${userFirstName}\n Last Name ${userLastName}`
            ) 
        } else {alert("Das Passwort stimmt nicht überein")}
    } else { 
        alert("Bitte fülle alle Felder aus")
     } 
    



    
}