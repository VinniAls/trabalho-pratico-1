// Função para normalizar texto
function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "_");
}

// Mapeamento de imagens
const imagemMap = {
    'curitiba': 'Curitiba.jpg',
    'foz_do_iguacu': 'foz-do-iguacu.jpg',
    'paranagua': 'paranagua.jpg',
    'balneario_camboriu': 'balneario.jpg',
    'florianopolis': 'floripa.jpg',
    'bombinhas': 'bombinhas.jpg',
    'porto_alegre': 'porto alegre.jpg',
    'bento_goncalves': 'bento_goncalves.jpg',
    'gramado': 'gramados.jpg'
};

// Estrutura de dados das cidades com informações melhoradas
const dadosCidades = {
    curitiba: {
        descricao: "Capital do Paraná, conhecida por sua arquitetura moderna, parques verticais e culinária renomada.",
        ponte_info: "População: ~1.9M | Altitude: 934m | Clima: Subtropical",
        pontosTuristicos: ["Jardim Botânico", "Ópera de Arame", "Parque Tanguá", "Memorial Árabe"],
        hoteis: ["Hotel Esplêndido", "Mercure Plaza", "Slaviero Full",  "Ibis Styles"],
        restaurantes: ["Madalosso", "Bar do Alemão", "Trecentos Pizzaria", "Portobello"]
    },
    foz_do_iguacu: {
        descricao: "Cidade conhecida pelas Cataratas do Iguaçu, uma das sete maravilhas naturais do mundo.",
        ponte_info: "População: ~270K | Tríplice Fronteira: Brasil, Argentina, Paraguai",
        pontosTuristicos: ["Cataratas do Iguaçu", "Parque Nacional", "Marco das Três Fronteiras", "Ecomuseu"],
        hoteis: ["Grand Hotel Iguazu", "Amerian", "Belmond das Cataratas", "Recanto"],
        restaurantes: ["Restaurante Cataratas", "Churrascaria Bufet", "Carmen Trattoria", "Fusion"]
    },
    paranagua: {
        descricao: "Porto histórico do Paraná com rica herança cultural, gastronomia litorânea e construções coloniais.",
        ponte_info: "População: ~144K | Maior porto brasileiro em movimentação de contêineres",
        pontosTuristicos: ["Centro Histórico", "Ilha do Mel", "Farol das Conchas", "Museu de Arte"],
        hoteis: ["Atlântico Hotel", "Praiaguá", "Marina Executive", "Costazul"],
        restaurantes: ["Restaurante Marinho", "Frutos do Mar", "Café da Manhã Colonial", "Perezoso"]
    },
    balneario_camboriu: {
        descricao: "Balneário famoso por praias ensolaradas, vida noturna vibrante e esportes aquáticos.",
        ponte_info: "População: ~140K | Praia com 6km | Destino de verão mais procurado",
        pontosTuristicos: ["Praia Central", "Morro do Careca", "Unipraias", "Acuário Marinho"],
        hoteis: ["Marambaia", "Aguazul", "Portobello Plaza", "Infinity"],
        restaurantes: ["Restaurante Praiano", "Frutos do Mar Premium", "Churrascaria Rodízio", "Sushi House"]
    },
    florianopolis: {
        descricao: "Capital de Santa Catarina, a Ilha da Magia com praias paradisíacas, gastronomia e natureza exuberante.",
        ponte_info: "População: ~500K | 42 praias | Conhecida como Ilha da Magia",
        pontosTuristicos: ["Lagoa da Conceição", "Praia Mole", "Centro Histórico", "Bom Abrigo"],
        hoteis: ["Jurere Beach Resort", "Laguna Divers", "Farol", "Costa Norte"],
        restaurantes: ["Ostradamus", "Frutos do Mar da Costa", "Catarinense Premium", "Açorda"]
    },
    bombinhas: {
        descricao: "Município com praias paradisíacas, mergulho em ilhas cristalinas e ambiente preservado.",
        ponte_info: "População: ~16K | Água cristalina | Parque Marinho",
        pontosTuristicos: ["Praia do Ribeiro", "Praia de Zimbros", "Ilha do Arvoredo", "Caverna Submarina"],
        hoteis: ["Bombinhas Praia", "Pousada da Vicentina", "Mar e Sol", "Coral"],
        restaurantes: ["Restaurante Praiano Bombas", "Peixe Fresco", "Café da Praia", "Mar Azul"]
    },
    porto_alegre: {
        descricao: "Capital do Rio Grande do Sul com forte identidade gaúcha, cultura e tradição.",
        ponte_info: "População: ~1.4M | Fundada em 1742 | Capital das Culturas",
        pontosTuristicos: ["Mercado Público", "Parque Farroupilha", "Usina do Gasômetro", "Catedral"],
        hoteis: ["Plaza São Rafael", "Augusto's", "Sheraton Porto Alegre", "Décor"],
        restaurantes: ["Restaurante Gaúcho Galpão", "Churrascaria Premium", "Pizzaria Braz", "Café Colombo"]
    },
    bento_goncalves: {
        descricao: "Cidade conhecida nacionalmente pela produção de vinhos finos e herança história italiana.",
        ponte_info: "População: ~145K | Rota dos Vinhos | Principal produtora de vinhos do Brasil",
        pontosTuristicos: ["Vale dos Vinhedos", "Parque Epopeia Italiana", "Museu do Imigrante", "Estação"],
        hoteis: ["Dalla Corte", "Vinho Hotel", "Anita Garibaldi", "Riverbend"],
        restaurantes: ["Restaurante Italiano Famiglia", "Vinhos e Massas", "Churrascaria Vale", "Trattoria"]
    },
    gramado: {
        descricao: "Cidade turística com arquitetura europeia, clima frio, chocolatarias e parques temáticos.",
        ponte_info: "População: ~35K | Altitude: 850m | Clima frio o ano todo",
        pontosTuristicos: ["Mini Mundo", "Rua Coberta", "Parque Knorr", "Borboletário"],
        hoteis: ["Gramado Parks Hotel", "Laje de Pedra", "Pousada das Flores", "Serrano"],
        restaurantes: ["Restaurante Alemão Fritz", "Chocolate Artesanal", "Café Colonial", "Pizzaria Chef"]
    }
};

const estados = {
    parana: { nome: "🏞️ Paraná", cidades: ["curitiba", "foz_do_iguacu", "paranagua"] },
    santa_catarina: { nome: "🏖️ Santa Catarina", cidades: ["balneario_camboriu", "florianopolis", "bombinhas"] },
    rio_grande_do_sul: { nome: "🤠 Rio Grande do Sul", cidades: ["porto_alegre", "bento_goncalves", "gramado"] }
};

// Função auxiliar para buscar destino
const getDestino = (cidade) => dadosCidades[cidade];

// ============================================
// Gerenciamento de Interface
// ============================================

// Variáveis globais
let currentDestiny = null;

// Função para normalizar nome de cidade para exibição
function formatarNomeCidade(texto) {
    return texto.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Sistema de busca otimizado com feedback
function buscarDestino() {
    const input = document.getElementById("searchInput").value.trim();
    
    if (!input) {
        alert("Por favor, digite um destino para buscar.");
        document.getElementById("searchInput").focus();
        return;
    }
    
    // Simular pequeno delay para feedback visual
    setTimeout(() => {
        const inputNorm = normalizarTexto(input);
        const cidades = Object.keys(dadosCidades);
        const encontrado = cidades.find(c => normalizarTexto(c) === inputNorm) || 
                           cidades.find(c => normalizarTexto(c).includes(inputNorm));
        
        if (encontrado) {
            atualizarConteudo(encontrado);
            document.getElementById("searchInput").value = '';
            // Anunciar para leitores de tela
            announceToScreenReader(`Destino: ${formatarNomeCidade(encontrado)} encontrado e carregado.`);
        } else {
            mostrarErro(`Destino não encontrado`, `Não temos informações sobre "${input}". Tente buscar por outro local.`);
            announceToScreenReader(`Nenhum destino encontrado para "${input}".`);
        }
    }, 300);
}

// Função para anunciar mudanças aos leitores de tela
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
}

// Mostrar mensagem de erro
function mostrarErro(titulo, mensagem) {
    const destinoEl = document.getElementById("destino");
    destinoEl.innerHTML = `
        <div class="error-message" role="alert">
            <h2 class="error-title">⚠️ ${titulo}</h2>
            <p class="error-text">${mensagem}</p>
        </div>
    `;
    document.getElementById("cardsContainer").innerHTML = "";
}

// Renderizar lista compactada com melhor semântica
const criarLista = (titulo, items) => {
    const itemsHTML = items.map(i => `<li class="card-item" tabindex="0">${i}</li>`).join('');
    return `
        <div class="card">
            <h3 class="card-title">${titulo}</h3>
            <ul class="card-list" role="list">
                ${itemsHTML}
            </ul>
        </div>
    `;
};

// Atualizar conteúdo principal
function atualizarConteudo(destino) {
    currentDestiny = destino;
    const dados = getDestino(destino);
    const nomeCidade = formatarNomeCidade(destino);
    const img = imagemMap[destino] ? 
        `<img src="imagens/${imagemMap[destino]}" alt="Vista de ${nomeCidade}" class="destino-image" loading="lazy">` 
        : '';

    const destinoHTML = `
        <h2 class="destino-title">${nomeCidade}</h2>
        <p class="destino-text">${dados.descricao}</p>
        <p class="destino-info" role="doc-subtitle">${dados.ponte_info}</p>
        ${img}
    `;
    
    document.getElementById("destino").innerHTML = destinoHTML;
    
    const cardsHTML = [
        { items: dados.pontosTuristicos, titulo: "🏛️ Pontos Turísticos" },
        { items: dados.hoteis, titulo: "🏨 Hotéis" },
        { items: dados.restaurantes, titulo: "🍽️ Restaurantes" }
    ].map(card => criarLista(card.titulo, card.items)).join('');
    
    document.getElementById("cardsContainer").innerHTML = cardsHTML;
    
    // Colocar foco na primeira seção
    document.getElementById("destino").focus();
}

// Mostrar estados com cidades
function mostrarEstados() {
    const destinoEl = document.getElementById("destino");
    destinoEl.innerHTML = `
        <h1 class="intro-title">Bem-vindo ao Guia de Viagens</h1>
        
    `;
    
    const cardsHTML = Object.entries(estados).map(([_, est]) => {
        const citiesHTML = est.cidades.map(c => {
            const img = imagemMap[c] ? 
                `<img src="imagens/${imagemMap[c]}" alt="Imagem de ${formatarNomeCidade(c)}" class="state-card-image" loading="lazy">` 
                : '';
            return `
                <li class="state-card-item" role="button" tabindex="0" data-city="${c}" aria-label="Selecionar ${formatarNomeCidade(c)}">
                    ${img}
                    <span>${formatarNomeCidade(c)}</span>
                </li>
            `;
        }).join('');
        
        return `
            <div class="state-card">
                <h3 class="state-card-title">${est.nome}</h3>
                <ul class="state-card-list" role="list">
                    ${citiesHTML}
                </ul>
            </div>
        `;
    }).join('');
    
    document.getElementById("cardsContainer").innerHTML = cardsHTML;
    
    // Adicionar event listeners para items de cidades
    document.querySelectorAll('.state-card-item').forEach(item => {
        item.addEventListener('click', () => atualizarConteudo(item.dataset.city));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                atualizarConteudo(item.dataset.city);
            }
        });
        item.addEventListener('focus', () => {
            item.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
        });
        item.addEventListener('blur', () => {
            item.style.backgroundColor = '';
        });
    });
    
    destinoEl.focus();
}

// ============================================
// Event Listeners
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    // Inicializar
    mostrarEstados();
    
    // Adicionar listeners ao botão da home
    const homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('click', mostrarEstados);
    homeBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            mostrarEstados();
        }
    });
    
    // Buscar ao pressionar Enter
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            buscarDestino();
        }
    });
    
    // Link "Voltar ao topo" no rodapé
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Acessibilidade - Tecla de atalho (Ctrl + /)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
            announceToScreenReader('Campo de busca focado. Digite para procurar uma cidade.');
        }
    });
});