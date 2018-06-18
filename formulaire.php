
<!DOCTYPE html>
<html lang=fr dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/recapform.css">

    <title>récapitulatif du formulaire</title>

  </head>
  <body class="page">
    <div class= "recap">
      <?php

            $civilite = $_POST['civilite'];
            $nom = htmlspecialchars($_POST['nom'], ENT_QUOTES);
            $prenom = htmlspecialchars($_POST['prenom'], ENT_QUOTES);
            $email = htmlspecialchars($_POST['email'], ENT_QUOTES);

echo "<h1> Votre formulaire:</h1>";
echo "<p> Merci " .$civilite." ".$nom." ".$prenom." d'avoir jouer.</p>";
echo "<p> Votre mail est : ".$email.".</p>";

?>
    <p> Pour modifier votre formulaire, cliquez <a href="formulaire.html">ici</a>.</p>
    <p> Allez, on y retourne ?<a href="index.html"><button type ="button" class ="bouton">Rejouer</button></a></p>
  </div>

  </body>
</html>
