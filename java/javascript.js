function ajustarAltura(textarea) {
  textarea.style.height = "auto"; // Redefine a altura para auto
  textarea.style.height = textarea.scrollHeight + "px"; // Define a altura com base no conteúdo
}