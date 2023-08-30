document.addEventListener("DOMContentLoaded", function () {
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var telefone = document.getElementById("telefone");
  var mensagem = document.getElementById("mensagem");
  var loadingOverlay = document.getElementById("loadingOverlay");
  var form = document.getElementById("myForm");
  
  // here
  form.addEventListener("submit", function (event) {
    // Show loading overlay
    loadingOverlay.style.display = "flex";

    setTimeout(function () {
      loadingOverlay.style.display = "none";

      // Submit the form
      form.submit();
    }, 3000); // 3000ms (3 seconds) delay, adjust as needed
  });

  mensagem.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent new line
      form.submit(); // Submit the form
    }
  });

  nome.addEventListener("input", function () {
    var nomeValue = nome.value.replace(/[^A-Za-z\s]/g, "");
    nome.value = nomeValue; // Update the value with replaced characters
    if (nomeValue.length < 3 || !/^[A-Za-z\s]+$/.test(nomeValue)) {
      nome.setCustomValidity("Nome should have at least 3 letters and contain only letters.");
    } else {
      nome.setCustomValidity("");
    }
  });

  email.addEventListener("input", function () {
    var emailValue = email.value.trim();
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(emailValue) || emailValue.length > 20) {
      email.setCustomValidity("Invalid email format or length.");
    } else {
      email.setCustomValidity("");
    }
  });

  telefone.addEventListener("input", function () {
    var telefoneValue = telefone.value.replace(/\D/g, ""); // Remove non-numeric characters
    telefone.value = telefoneValue; // Update the value with replaced characters

    if (telefoneValue.length < 10 || telefoneValue.length > 11 || !/[0-9]/.test(telefoneValue)) {
      telefone.setCustomValidity("Telefone should have 10 or 11 digits and only numbers.");
    } else {
      telefone.setCustomValidity("");
    }
  });

  mensagem.addEventListener("input", function () {
    const mensagemValue = mensagem.value;
    const charCount = mensagemValue.length;

    if (charCount < 10) {
      mensagem.setCustomValidity("A mensagem deve conter pelo menos 10 palavras.");
    } else {
      mensagem.setCustomValidity("");
    }
  });

});
