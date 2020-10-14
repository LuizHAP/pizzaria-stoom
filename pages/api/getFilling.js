const fillings = [
  {
    name: "Margherita",
    imagem:
      "https://www.zonasul.com.br/content/images/20190711_pizza-margherita.jpg?1",
    description:
      "A clássica pizza, com queijo, tomate e manjericão",
  },
  {
    name: "4 queijos",
    imagem:
      "https://www.pizzaprime.com.br/wp-content/uploads/2018/12/pizza-quatro-queijos-imagem-destacada.jpg",
    description: "A famosa pizza de 4 queijos, com muçarela, gorgonzola, catupiry e parmesão",
  },
  {
    name: "Escarola",
    imagem:
      "https://boaforma.abril.com.br/wp-content/uploads/sites/2/2016/10/pizza-escarola-queijo_0.jpg?quality=90&strip=info",
    description: "A nossa opção vegetariana, a pizza de escarola com muçarela",
  },
];

export default async (request, response) => {
  return response.status(201).json(fillings);
};
