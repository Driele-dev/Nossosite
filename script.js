function aumentarFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (tamanhoAtual + 2) + "px";
    });
}

function diminuirFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (tamanhoAtual - 2) + "px";
    });
}

function toggleAltoContraste() {
    const html = document.documentElement;

    // Ativa o modo contraste se já estiver salvo
    if (localStorage.getItem('contrasteAtivo') === 'true') {
        html.classList.add('contraste-ativo');
    }

    const botaoContraste = document.getElementById('alto-contraste');
    botaoContraste.addEventListener('click', function () {
        html.classList.toggle('contraste-ativo');
        const contrasteAtivo = html.classList.contains('contraste-ativo');
        localStorage.setItem('contrasteAtivo', contrasteAtivo);
    });
}

document.addEventListener('DOMContentLoaded', toggleAltoContraste);