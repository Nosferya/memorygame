
<!DOCTYPE html>
<html lang=fr dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="">
    <title></title>

  </head>
  <body>
    <?php
       /*if(isset($_POST['envoyer'])) {*/
            $civilite = $_POST['civilite'];
            $nom = htmlspecialchars($_POST['nom'], ENT_QUOTES);
            $prenom = htmlspecialchars($_POST['prenom'], ENT_QUOTES);
            $email = htmlspecialchars($_POST['email'], ENT_QUOTES);

        /*  }*/

echo "<h1> Votre formulaire:</h1>";
echo "<p> Merci d'avoir jouer " .$civilite." ".$nom." ".$prenom.".</p>";
echo "<p> Votre mail est : ".$email.".</p>"
?>

    <p> pour modifier votre formulaire, cliquez <a href="formulaire.html">ici</a>.</p>
  </body>
</html>
