// Função para exibir o conteúdo selecionado (Disciplinas ou Conteúdos)
function mostrarConteudos(tipo) {
    // Esconde todas as seções de conteúdo
    let allContents = document.querySelectorAll('.content');
    allContents.forEach(content => {
      content.style.display = 'none';
    });
  
    // Exibe a seção selecionada
    document.getElementById(tipo).style.display = 'block';
  }
  