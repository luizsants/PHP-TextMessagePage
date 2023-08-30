
  <?php
  $hostname = "localhost";
  $bancodedados = "trabalho web";
  $usuario = "root";
  $senha = "";

  $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);
  if ($mysqli->connect_errno) {
    echo " .$mysqli->connect_errno. ";
  } else {
    if (isset($_POST['submit'])) {
      $nome = $_POST['nome'];
      $email = $_POST['email'];
      $telefone = $_POST['telefone'];
      $mensagem = $_POST['mensagem'];

      if (!empty($nome) && !empty($email) && !empty($telefone) && !empty($mensagem)) {
        $sql = "INSERT INTO trabalho (nome, email, telefone, menssagem) VALUES (?, ?, ?, ?)";
        $stmt = $mysqli->prepare($sql);

        if ($stmt) {
          $stmt->bind_param("ssss", $nome, $email, $telefone, $mensagem);
          if ($stmt->execute()) {
            echo "Data inserted successfully.";
          } else {
            echo "Error: " . $sql . "<br>" . $stmt->error;
          }
          $stmt->close();
        } else {
          echo "Error in prepare: " . $mysqli->error;
        }
      }else{
        echo "All fields necessary! ";
      }
    }

    $mysqli->close();
  }
  ?>
