document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
})
document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao document.getElementById('aumentar-fonte');
    const diminuiFonteBotao document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

})
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
  