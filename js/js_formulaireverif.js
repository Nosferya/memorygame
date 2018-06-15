/*********FONCTION VERIFICATION DU FORMULAIRE******/

function verif (){
    var homme = document.getElementById("homme").checked;
    var femme = document.getElementById("femme").checked;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;

    if (homme == "" && femme == "")
      {
        alert ("veuillez cocher une case, merci");
        return false;
      }

    if (nom == "")
    {
      alert ("veuillez entrer votre nom, merci");
      document.getElementById("nom").focus();
      return false;
    }

    if (prenom == "")
    {
      alert ("veuillez entrer votre prenom, merci");
      document.getElementById("prenom").focus();
      return false;
    }

    if (email =="")
    {
      alert ("veuillez entrer votre Email, merci");
      document.getElementById("email").focus();
      return false;
    }

    else
    {
      alert("merci");
      return true;
    }
  }
