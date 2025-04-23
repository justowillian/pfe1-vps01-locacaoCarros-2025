const carros = [
    {
      "id": 1,
      "modelo": "Onix LT 1.0",
      "marca": "Chevrolet",
      "ano": 2022,
      "imagem": "img/onix.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Manual",
      "valor_diaria": 120.00
    },
    {
      "id": 2,
      "modelo": "HB20 Vision",
      "marca": "Hyundai",
      "ano": 2023,
      "imagem": "img/HB20.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 150.00
    },
    {
      "id": 3,
      "modelo": "Renegade Longitude",
      "marca": "Jeep",
      "ano": 2023,
      "imagem": "img/jeep2.jpg",
      "combustivel": "Gasolina",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 210.00
    },
    {
      "id": 4,
      "modelo": "Corolla XEi",
      "marca": "Toyota",
      "ano": 2022,
      "imagem": "img/corolla.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 250.00
    },
    {
      "id": 5,
      "modelo": "Civic Touring",
      "marca": "Honda",
      "ano": 2021,
      "imagem": "img/civic.jpg",
      "combustivel": "Gasolina",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 230.00
    },
    {
      "id": 6,
      "modelo": "Fiat Mobi Like",
      "marca": "Fiat",
      "ano": 2022,
      "imagem": "img/mobi.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Manual",
      "valor_diaria": 90.00
    },
    {
      "id": 7,
      "modelo": "Kwid Zen",
      "marca": "Renault",
      "ano": 2023,
      "imagem": "img/kwid.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Manual",
      "valor_diaria": 95.00
    },
    {
      "id": 8,
      "modelo": "Gol Trendline",
      "marca": "Volkswagen",
      "ano": 2021,
      "imagem": "img/gol.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Manual",
      "valor_diaria": 100.00
    },
    {
      "id": 9,
      "modelo": "Compass Limited",
      "marca": "Jeep",
      "ano": 2022,
      "imagem": "img/jeep.jpg",
      "combustivel": "Diesel",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 270.00
    },
    {
      "id": 10,
      "modelo": "Tracker Premier",
      "marca": "Chevrolet",
      "ano": 2023,
      "imagem": "img/tracker.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 220.00
    }
    ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const carList = document.getElementById("car-list");
    const modal = document.getElementById("car-modal");
    const carDetails = document.getElementById("car-details");
    const closeModal = document.querySelector(".close");
    const selectCarro = document.getElementById("carro-select");
  
    carros.forEach((carro) => {
      const card = document.createElement("div");
      card.className = "car-card";
      card.innerHTML = `
        <img src="./assets/${carro.imagem}" alt="${carro.modelo}">
        <h3>${carro.modelo}</h3>
        <p>${carro.marca} - ${carro.ano}</p>
        <p>R$ ${carro.valor_diaria.toFixed(2)}/dia</p>
        <button onclick="verDetalhes(${carro.id})">Ver Detalhes</button>
      `;
      carList.appendChild(card);

      const option = document.createElement("option");
      option.value = carro.id;
      option.textContent = `${carro.modelo} - R$${carro.valor_diaria}/dia`;
      selectCarro.appendChild(option);
    });
  
    closeModal.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }
  
    document.getElementById("rental-form").addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nome = document.getElementById("cliente").value;
      const cpf = document.getElementById("cpf").value;
      const inicio = document.getElementById("inicio").value;
      const fim = document.getElementById("fim").value;
      const carroId = parseInt(document.getElementById("carro-select").value);
  
      if (cpf.length !== 11 || isNaN(cpf)) {
        alert("CPF inválido. Digite 11 números.");
        return;
      }
  
      const locacoes = JSON.parse(localStorage.getItem("locacoes") || "[]");
      locacoes.push({ nome, cpf, inicio, fim, carroId });
      localStorage.setItem("locacoes", JSON.stringify(locacoes));
  
      alert("Locação registrada com sucesso!");
      e.target.reset();
    });
  });
  
  function verDetalhes(id) {
    const carro = carros.find(c => c.id === id);
    const modal = document.getElementById("car-modal");
    const detalhes = document.getElementById("car-details");
  
    detalhes.innerHTML = `
      <h2>${carro.modelo}</h2>
      <img src="./assets/${carro.imagem}" alt="${carro.modelo}" style="width: 100%; height: auto;" />
      <p><strong>Marca:</strong> ${carro.marca}</p>
      <p><strong>Ano:</strong> ${carro.ano}</p>
      <p><strong>Combustível:</strong> ${carro.combustivel}</p>
      <p><strong>Portas:</strong> ${carro.portas}</p>
      <p><strong>Transmissão:</strong> ${carro.transmissao}</p>
      <p><strong>Valor da diária:</strong> R$ ${carro.valor_diaria.toFixed(2)}</p>
    `;
    modal.style.display = "flex";
  }
  