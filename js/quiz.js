// Armazena as respostas do usuário
const respostas = {};

// Ordem das perguntas
const ordem = ['p1', 'p2', 'p3', 'p4'];

function responder(pergunta, valor) {
    // Salva a resposta
    respostas[pergunta] = valor;

    // Esconde a pergunta atual
    document.getElementById(pergunta).classList.remove('ativa');

    // Descobre qual é a próxima pergunta
    const indiceAtual = ordem.indexOf(pergunta);
    const proxima = ordem[indiceAtual + 1];

    if (proxima) {
        // Mostra a próxima pergunta
        document.getElementById(proxima).classList.add('ativa');
    } else {
        // Acabou as perguntas — mostra o resultado
        mostrarResultado();
    }
}

function mostrarResultado() {
    const { p1, p2, p3, p4 } = respostas;

    let perfil = '';
    let mensagem = '';

    // Lógica de perfil
    if (p1 === 'sim-muito') {
        // Usuário experiente — grau provavelmente alto
        perfil = 'Usuário experiente com grau estabelecido';
        mensagem = 'Para o seu perfil, recomendamos lentes de alta performance com tratamento especializado, garantindo conforto e clareza total no seu dia a dia.';
    } else if (p1 === 'nao') {
        // Primeiro óculos
        perfil = 'Primeiro óculos';
        mensagem = 'Temos a lente ideal para quem está começando, com ótimo custo-benefício e qualidade garantida.';
    } else {
        // Usuário recente
        perfil = 'Usuário em adaptação';
        mensagem = 'Para o seu perfil, temos lentes modernas que vão se encaixar perfeitamente na sua rotina.';
    }

    // Agrega tratamentos com base nas respostas
    let tratamentos = [];

    if (p3 === 'sim') {
        tratamentos.push('antirreflexo para telas');
    }
    if (p4 === 'sim') {
        tratamentos.push('proteção solar');
    }
    if (p2 === 'dia-todo') {
        tratamentos.push('lente leve para uso prolongado');
    }

    let textoTratamentos = '';
    if (tratamentos.length > 0) {
        textoTratamentos = ` Também identificamos que você pode se beneficiar de: ${tratamentos.join(', ')}.`;
    }

    // Texto final do resultado
    const textoFinal = `${mensagem}${textoTratamentos}`;
    document.getElementById('texto-resultado').innerText = textoFinal;

    // Monta a mensagem pro WhatsApp
    const msgWhats = `Olá Eliza! Fiz o quiz no site e meu perfil é: *${perfil}*. ${textoFinal} Gostaria de saber mais!`;

    // Número da Eliza — TROCAR PELO NÚMERO REAL
    const numero = '5581997607151';

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(msgWhats)}`;
    document.getElementById('btn-whatsapp').href = link;

    // Mostra o resultado
    document.getElementById('resultado').classList.add('ativa');
setTimeout(() => {
    const contato = document.getElementById('contato-final');
    contato.style.display = 'block';
    contato.scrollIntoView({ behavior: 'smooth' });
}, 800);
}

function irParaQuiz() {
    document.getElementById('aviso').style.display = 'flex';
    document.getElementById('aviso').scrollIntoView({ behavior: 'smooth' });
}

function continuarQuiz() {
    document.getElementById('aviso').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth' });
}