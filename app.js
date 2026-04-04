// Função para normalizar texto
function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "_");
}

// Mapeamento de imagens
const imagemMap = {
    'curitiba': 'Curitiba.jpg', 'foz_do_iguacu': 'foz-do-iguacu.jpg', 'paranagua': 'paranagua.jpg',
    'balneario_camboriu': 'balneario.jpg', 'florianopolis': 'floripa.jpg', 'bombinhas': 'bombinhas.jpg',
    'porto_alegre': 'porto alegre.jpg', 'bento_goncalves': 'bento_goncalves.jpg', 'gramado': 'gramados.jpg'
};

// Estrutura compactada de dados
const dadosCidades = {
    curitiba: {
        descricao: "Capital do Paraná, conhecida por sua arquitetura e parques.",
        pontosTuristicos: ["Jardim Botânico", "Ópera de Arame", "Parque Tanguá"],
        hoteis: ["Hotel X", "Hotel Y", "Hotel Z"],
        restaurantes: ["Madalosso", "Bar do Alemão", "Restaurante Italiano"],
        atividades: ["Passeio no Jardim Botânico", "Visita à Ópera de Arame", "Explorar o Mercado Municipal"]
    },
    foz_do_iguacu: {
        descricao: "Cidade conhecida pelas Cataratas do Iguaçu, uma das maravilhas do mundo.",
        pontosTuristicos: ["Cataratas do Iguaçu", "Parque Nacional do Iguaçu", "Marco das Três Fronteiras"],
        hoteis: ["Hotel Iguaçu 1", "Hotel Iguaçu 2", "Hotel Iguaçu 3"],
        restaurantes: ["Restaurante Cataratas", "Churrascaria", "Comida Internacional"],
        atividades: ["Visitar as Cataratas", "Passear no Parque", "Explorar as Fronteiras"]
    },
    paranagua: {
        descricao: "Porto histórico do Paraná, com rica cultura e culinária.",
        pontosTuristicos: ["Centro Histórico", "Ilha do Mel", "Farol das Conchas"],
        hoteis: ["Hotel Paranaguá 1", "Hotel Paranaguá 2", "Hotel Paranaguá 3"],
        restaurantes: ["Restaurante Marinho", "Frutos do Mar", "Café Colonial"],
        atividades: ["Explorar o Centro Histórico", "Visitar a Ilha do Mel", "Passear pelo Porto"]
    },
    balneario_camboriu: {
        descricao: "Balneário famoso por suas praias e vida noturna.",
        pontosTuristicos: ["Praia Central", "Morro do Careca", "Unipraias"],
        hoteis: ["Hotel Camboriú 1", "Hotel Camboriú 2", "Hotel Camboriú 3"],
        restaurantes: ["Restaurante Praiano", "Frutos do Mar", "Churrascaria"],
        atividades: ["Relaxar na Praia", "Subir o Morro do Careca", "Explorar a Praia Central"]
    },
    florianopolis: {
        descricao: "Capital de Santa Catarina, conhecida por suas ilhas e praias.",
        pontosTuristicos: ["Lagoa da Conceição", "Praia Mole", "Centro Histórico"],
        hoteis: ["Hotel Floripa 1", "Hotel Floripa 2", "Hotel Floripa 3"],
        restaurantes: ["Restaurante Catarinense", "Frutos do Mar", "Pizza"],
        atividades: ["Passear na Lagoa", "Relaxar na Praia Mole", "Explorar o Centro"]
    },
    bombinhas: {
        descricao: "Município conhecido por suas praias paradisíacas e mergulho.",
        pontosTuristicos: ["Praia do Ribeiro", "Praia de Zimbros", "Ilha do Arvoredo"],
        hoteis: ["Hotel Bombinhas 1", "Hotel Bombinhas 2", "Hotel Bombinhas 3"],
        restaurantes: ["Restaurante Praiano", "Peixe Fresco", "Café"],
        atividades: ["Mergulhar nas Praias", "Explorar as Ilhas", "Relaxar na Praia"]
    },
    porto_alegre: {
        descricao: "Capital do Rio Grande do Sul, com cultura gaúcha.",
        pontosTuristicos: ["Mercado Público", "Parque Farroupilha", "Usina do Gasômetro"],
        hoteis: ["Hotel POA 1", "Hotel POA 2", "Hotel POA 3"],
        restaurantes: ["Restaurante Gaúcho", "Churrasco", "Pizza"],
        atividades: ["Comprar no Mercado Público", "Passear no Parque", "Visitar a Usina"]
    },
    bento_goncalves: {
        descricao: "Cidade conhecida pela produção de vinhos e cultura italiana.",
        pontosTuristicos: ["Vale dos Vinhedos", "Parque Epopeia Italiana", "Museu do Imigrante"],
        hoteis: ["Hotel Bento 1", "Hotel Bento 2", "Hotel Bento 3"],
        restaurantes: ["Restaurante Italiano", "Vinhos e Massas", "Churrascaria"],
        atividades: ["Visitar Vinícolas", "Explorar o Vale", "Conhecer a História Italiana"]
    },
    gramado: {
        descricao: "Cidade turística conhecida por sua arquitetura europeia e clima frio.",
        pontosTuristicos: ["Mini Mundo", "Rua Coberta", "Parque Knorr"],
        hoteis: ["Hotel Gramado 1", "Hotel Gramado 2", "Hotel Gramado 3"],
        restaurantes: ["Restaurante Alemão", "Chocolate", "Café Colonial"],
        atividades: ["Visitar o Mini Mundo", "Passear na Rua Coberta", "Explorar o Parque"]
    }
};

const estados = {
    parana: { nome: "Paraná", cidades: ["curitiba", "foz_do_iguacu", "paranagua"] },
    santa_catarina: { nome: "Santa Catarina", cidades: ["balneario_camboriu", "florianopolis", "bombinhas"] },
    rio_grande_do_sul: { nome: "Rio Grande do Sul", cidades: ["porto_alegre", "bento_goncalves", "gramado"] }
};

// Função auxiliar para buscar destino
const getDestino = (cidade) => dadosCidades[cidade];

// Sistema de busca otimizado
function buscarDestino() {
    const input = document.getElementById("searchInput").value.trim();
    if (!input) return alert("Digite um destino.");
    
    const inputNorm = normalizarTexto(input);
    const cidades = Object.keys(dadosCidades);
    const encontrado = cidades.find(c => normalizarTexto(c) === inputNorm) || 
                       cidades.find(c => normalizarTexto(c).includes(inputNorm));
    
    if (encontrado) atualizarConteudo(encontrado);
    else {
        document.getElementById("destino").innerHTML = `<h2>Destino não encontrado</h2><p>Não temos informações sobre "${input}".</p>`;
        document.getElementById("cardsContainer").innerHTML = "";
    }
}

// Renderizar lista compactada
const criarLista = (titulo, items) => `<div class="bg-white bg-opacity-95 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white border-opacity-20 flex-1 min-w-64 max-w-sm hover:shadow-2xl transition"><h3 class="text-2xl font-semibold text-gray-800 text-center mb-4">${titulo}</h3><ul class="list-none p-0">${items.map(i => `<li class="py-2 text-gray-700 hover:text-indigo-600 hover:translate-x-1 transition">${i}</li>`).join('')}</ul></div>`;

// Atualizar conteúdo otimizado
function atualizarConteudo(destino) {
    const dados = getDestino(destino);
    const img = imagemMap[destino] ? `<img src="imagens/${imagemMap[destino]}" alt="${destino}" class="w-full max-w-sm max-h-52 rounded-xl shadow-xl mb-6 object-cover mx-auto">` : '';
    
    document.getElementById("destino").innerHTML = `<h2 class="text-5xl font-light text-white mb-3 drop-shadow-lg">${destino.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2><p class="text-xl text-white text-opacity-90 max-w-2xl mx-auto">${dados.descricao}</p>${img}`;
    document.getElementById("cardsContainer").innerHTML = [dados.pontosTuristicos, dados.hoteis, dados.restaurantes, dados.atividades]
        .map((items, i) => criarLista(["Pontos Turísticos", "Hotéis", "Restaurantes", "Atividades"][i], items)).join('');
}

// Mostrar estados com cidades
function mostrarEstados() {
    document.getElementById("destino").innerHTML = `<h2 class="text-5xl font-light text-white mb-3 drop-shadow-lg">Bem-vindo ao Guia de Viagens no Sul do Brasil</h2><p class="text-xl text-white text-opacity-95">Selecione o local desejado!</p>`;
    document.getElementById("cardsContainer").innerHTML = Object.entries(estados).map(([_, est]) => `
        <div class="bg-white bg-opacity-95 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white border-opacity-20 w-72 hover:shadow-2xl transition">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">${est.nome}</h3>
            <ul class="list-none p-0">${est.cidades.map(c => `<li class="py-3 px-2 cursor-pointer text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition flex items-center" onclick="atualizarConteudo('${c}')">
                ${imagemMap[c] ? `<img src="imagens/${imagemMap[c]}" alt="${c}" class="w-12 h-8 rounded object-cover shadow mr-3">` : ''}
                <span>${c.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            </li>`).join('')}</ul>
        </div>
    `).join('');
}

window.onload = mostrarEstados;