# Guia de Viagens no Sul do Brasil

Um site front-end simples para guias de viagens focado nos estados do Sul do Brasil, onde o usuário pode explorar estados e cidades com informações sobre pontos turísticos, hotéis, restaurantes e atividades.

## Funcionalidades

- Exibição inicial de cards para os 3 estados do Sul: Paraná, Santa Catarina e Rio Grande do Sul
- Ao clicar em um estado, mostra as cidades principais
- Ao clicar em uma cidade, exibe detalhes (pontos turísticos, hotéis, restaurantes, atividades)
- Busca por destino
- Design responsivo

## Como usar

1. Abra o `index.html` em um navegador.
2. Veja os cards dos estados disponíveis na tela inicial.
3. Clique em um card de estado para ver as cidades.
4. Clique em uma cidade para ver detalhes.
5. Ou digite o nome de uma cidade no campo de busca e clique em "Buscar".

## Cidades Disponíveis

- **Paraná**: Curitiba, Foz do Iguaçu, Paranaguá
- **Santa Catarina**: Balneário Camboriú, Florianópolis, Bombinhas
- **Rio Grande do Sul**: Porto Alegre, Bento Gonçalves, Gramado

## Tecnologias

- HTML
- CSS
- JavaScript

## Melhorias Futuras

- Integração com APIs reais para dados dinâmicos (ex: Google Places API, OpenTripMap API)
- Adição de mais cidades e estados
- Funcionalidade de mapa

## Como integrar uma API

Para buscar dados reais, você pode usar uma API como a OpenTripMap (gratuita para uso básico). Adicione uma chave de API e modifique o `app.js` para fazer fetch de dados.

Exemplo:
```javascript
async function buscarDadosAPI(destino) {
    const response = await fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${destino}&apikey=YOUR_API_KEY`);
    const data = await response.json();
    // Processar dados...
}
```

Certifique-se de lidar com CORS e chaves de API adequadamente.

- HTML
- CSS
- JavaScript

## Melhorias Futuras

- Integração com APIs reais para dados dinâmicos (ex: Google Places API, OpenTripMap API)
- Adição de mais destinos
- Funcionalidade de mapa

## Como integrar uma API

Para buscar dados reais, você pode usar uma API como a OpenTripMap (gratuita para uso básico). Adicione uma chave de API e modifique o `app.js` para fazer fetch de dados.

Exemplo:
```javascript
async function buscarDadosAPI(destino) {
    const response = await fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${destino}&apikey=YOUR_API_KEY`);
    const data = await response.json();
    // Processar dados...
}
```

Certifique-se de lidar com CORS e chaves de API adequadamente.</content>
<parameter name="filePath">c:\Users\vinic\OneDrive\Área de Trabalho\TrabFrontEnd\README.md