// Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Ação para os botões "Saiba Mais" nos cartões
const botoesSaibaMais = document.querySelectorAll('.btn-saibamais');

botoesSaibaMais.forEach(botao => {
    botao.addEventListener('click', () => {
        // Pega o título do projeto correspondente ao botão clicado
        const tituloProjeto = botao.parentElement.querySelector('h3').innerText;
        alert(`Você demonstrou interesse no projeto: ${tituloProjeto}!\nEm breve teremos uma página detalhada para ele.`);
    });
});