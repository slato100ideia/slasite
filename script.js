const products = [
    { name: "Arroz 1kg", expiryDate: "29-09-2024", price: "R$ 4,50", city: "rolante", market: "Mercado Viva Mais", image: "arroz.jpg" },
    { name: "Feijão 1kg", expiryDate: "30-09-2024", price: "R$ 5,50", city: "rolante", market: "Hiper Econômico", image: "feijao.jpeg" },
    { name: "Açúcar 1kg", expiryDate: "26-09-2024", price: "R$ 3,00", city: "rolante", market: "Super Prático", image: "acucar.jpg" },
    { name: "Macarrão 500g", expiryDate: "30-09-2024", price: "R$ 2,50", city: "rolante", market: "Mercado Viva Mais", image: "macarrao.png" },
    { name: "Óleo de Soja 900ml", expiryDate: "26-09-2024", price: "R$ 6,00", city: "rolante", market: "Hiper Econômico", image: "oleo.png" },
    { name: "Leite UHT 1L", expiryDate: "29-09-2024", price: "R$ 3,50", city: "rolante", market: "Super Prático", image: "leite.jpg" },
    { name: "Pão de Forma", expiryDate: "30-09-2024", price: "R$ 4,20", city: "rolante", market: "Mercado Viva Mais", image: "pao.jpg" },
    { name: "Margarina 250g", expiryDate: "04-10-2024", price: "R$ 3,80", city: "rolante", market: "Hiper Econômico", image: "margarina.jpg" },
    { name: "Biscoito Cream Cracker", expiryDate: "06-10-2024", price: "R$ 2,30", city: "rolante", market: "Super Prático", image: "biscoito.png" },
    { name: "Leite Condensado", expiryDate: "25-09-2024", price: "R$ 5,00", city: "rolante", market: "Mercado Viva Mais", image: "leite_condensado.png" },
    
    { name: "Feijão 1kg", expiryDate: "29-09-2024", price: "R$ 5,50", city: "taquara", market: "Ponto Certo Atacado", image: "feijao.jpeg" },
    { name: "Arroz Integral 5kg", expiryDate: "01-10-2024", price: "R$ 12,00", city: "taquara", market: "Essencial Supermercados", image: "arroz_integral.jpg" },
    { name: "Macarrão 500g", expiryDate: "01-10-2024", price: "R$ 3,50", city: "taquara", market: "Mundo das Compras", image: "macarrao.png" },
    { name: "Azeite 500ml", expiryDate: "26-09-2024", price: "R$ 14,00", city: "taquara", market: "Ponto Certo Atacado", image: "azeite.png" },
    { name: "Cereal Matinal", expiryDate: "25-09-2024", price: "R$ 8,50", city: "taquara", market: "Essencial Supermercados", image: "cereal_matinal.png" },
    { name: "Achocolatado 400g", expiryDate: "01-10-2024", price: "R$ 6,00", city: "taquara", market: "Mundo das Compras", image: "achocolatado.jpg" },
    { name: "Molho de Tomate", expiryDate: "26-09-2024", price: "R$ 2,80", city: "taquara", market: "Ponto Certo Atacado", image: "molho_tomate.png" },
    { name: "Leite Desnatado 1L", expiryDate: "04-10-2024", price: "R$ 2,60", city: "taquara", market: "Essencial Supermercados", image: "leite_desnatado.jpg" },
    { name: "Café Solúvel", expiryDate: "01-10-2024", price: "R$ 8,00", city: "taquara", market: "Mundo das Compras", image: "cafe_solvel.jpg" },
    { name: "Margarina 250g", expiryDate: "25-09-2024", price: "R$ 3,00", city: "taquara", market: "Ponto Certo Atacado", image: "margarina.jpg" },
    
    { name: "Biscoito Recheado 200g", expiryDate: "01-10-2024", price: "R$ 2,50", city: "igrejinha", market: "Ponto Certo Atacado", image: "biscoito_recheado.jpg" },
    { name: "Pão de Forma", expiryDate: "25-09-2024", price: "R$ 4,00", city: "igrejinha", market: "Supermercado Raízes", image: "pao.jpg" },
    { name: "biscoito Cream Cracker", expiryDate: "30-09-2024", price: "R$ 3,20", city: "igrejinha", market: "Mercadão Popular", image: "biscoito.png" },
    { name: "Arroz 1kg", expiryDate: "25-09-2024", price: "R$ 4,50", city: "igrejinha", market: "Ponto Certo Atacado", image: "arroz.jpg" },
    { name: "Suco de Laranja 1L", expiryDate: "04-10-2024", price: "R$ 5,00", city: "igrejinha", market: "Supermercado Raízes", image: "suco_laranja.jpg" },
    { name: "Achocolatado 400g", expiryDate: "06-10-2024", price: "R$ 6,20", city: "igrejinha", market: "Mercadão Popular", image: "achocolatado.jpg" },
    { name: "Café 500g", expiryDate: "02-10-2024", price: "R$ 8,50", city: "igrejinha", market: "Ponto Certo Atacado", image: "cafe_500g.png" },
    { name: "Bolacha de Água 200g", expiryDate: "26-09-2024", price: "R$ 3,00", city: "igrejinha", market: "Supermercado Raízes", image: "bolacha_agua.jpg" },
    { name: "Arroz Parboilizado 1kg", expiryDate: "02-10-2024", price: "R$ 5,00", city: "igrejinha", market: "Mercadão Popular", image: "arroz_parboilizado.jpg" },

    { name: "Arroz 1kg", expiryDate: "29-09-2024", price: "R$ 4,00", city: "riozinho", market: "Mercado Viva Mais", image: "arroz.jpg" },
    { name: "Feijão 1kg", expiryDate: "01-10-2024", price: "R$ 5,20", city: "riozinho", market: "SuperMax", image: "feijao.jpeg" },
    { name: "Açúcar 1kg", expiryDate: "02-10-2024", price: "R$ 3,60", city: "riozinho", market: "MegaMix Supermercados", image: "acucar.jpg" },
    { name: "Macarrão 500g", expiryDate: "01-10-2024", price: "R$ 3,20", city: "riozinho", market: "Mercado Viva Mais", image: "macarrao.png" },
    { name: "Óleo de Soja 900ml", expiryDate: "30-09-2024", price: "R$ 7,00", city: "riozinho", market: "SuperMax", image: "oleo.png" },
    { name: "Leite UHT 1L", expiryDate: "06-10-2024", price: "R$ 3,50", city: "riozinho", market: "MegaMix Supermercados", image: "leite.jpg" },
    { name: "Pão de Forma", expiryDate: "29-09-2024", price: "R$ 4,50", city: "riozinho", market: "Mercado Viva Mais", image: "pao.jpg" },
    { name: "Margarina 250g", expiryDate: "27-09-2024", price: "R$ 4,00", city: "riozinho", market: "SuperMax", image: "margarina.jpg" },
    { name: "Biscoito Cream Cracker", expiryDate: "26-09-2024", price: "R$ 2,70", city: "riozinho", market: "MegaMix Supermercados", image: "biscoito.png" },
    { name: "Leite Condensado", expiryDate: "29-09-2024", price: "R$ 5,50", city: "riozinho", market: "Mercado Viva Mais", image: "leite_condensado.png" },

    { name: "Arroz 1kg", expiryDate: "04-10-2024", price: "R$ 4,50", city: "santo-antonio", market: "SuperCenter Total", image: "arroz.jpg" },
    { name: "Feijão 1kg", expiryDate: "27-09-2024", price: "R$ 5,50", city: "santo-antonio", market: "Mercado Bom Gosto", image: "feijao.jpeg" },
    { name: "Açúcar 1kg", expiryDate: "26-09-2024", price: "R$ 3,00", city: "santo-antonio", market: "Supermercado do Bairro", image: "acucar.jpg" },
    { name: "Macarrão 500g", expiryDate: "30-09-2024", price: "R$ 2,50", city: "santo-antonio", market: "SuperCenter Total", image: "macarrao.png" },
    { name: "Óleo de Soja 900ml", expiryDate: "01-10-2024", price: "R$ 6,00", city: "santo-antonio", market: "Mercado Bom Gosto", image: "oleo.png" },
    { name: "Leite UHT 1L", expiryDate: "26-09-2024", price: "R$ 3,50", city: "santo-antonio", market: "Supermercado do Bairro", image: "leite.jpg" },
    { name: "Pão de Forma", expiryDate: "01-10-2024", price: "R$ 4,20", city: "santo-antonio", market: "SuperCenter Total", image: "pao.jpg" },
    { name: "Margarina 250g", expiryDate: "02-10-2024", price: "R$ 3,80", city: "santo-antonio", market: "Mercado Bom Gosto", image: "margarina.jpg" },
    { name: "Biscoito Cream Cracker", expiryDate: "26-09-2024", price: "R$ 2,30", city: "santo-antonio", market: "Supermercado do Bairro", image: "biscoito.png" },
    { name: "Leite Condensado", expiryDate: "02-10-2024", price: "R$ 5,00", city: "santo-antonio", market: "SuperCenter Total", image: "leite_condensado.png" }
    
];

function displayProducts(city, market) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    const filteredProducts = products.filter(product => (city === "all" || product.city === city) && (market === "all" || product.market === market));

    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Data de Validade: ${product.expiryDate}</p>
                <p>Preço: ${product.price}</p>
                <p>Mercado: ${product.market}</p>
            </div>
        `;
        productList.appendChild(productElement);
    });
}

function filterMarkets() {
    const cityFilter = document.getElementById("cityFilter").value;
    const marketFilter = document.getElementById("marketFilter");
    marketFilter.innerHTML = '<option value="all">Selecione o Mercado</option>';

    const markets = [...new Set(products.filter(product => product.city === cityFilter).map(product => product.market))];

    markets.forEach(market => {
        const option = document.createElement("option");
        option.value = market;
        option.textContent = market;
        marketFilter.appendChild(option);
    });

    displayProducts(cityFilter, "all");
}

document.getElementById("marketFilter").addEventListener("change", function() {
    const city = document.getElementById("cityFilter").value;
    const market = this.value;
    displayProducts(city, market);
});
