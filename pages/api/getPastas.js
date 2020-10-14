const pastas = [
  {
    name: "Massa Napolitana",
    imagem:
      "https://bellamais.correiodopovo.com.br/image/policy:1.350375:1562690689/Pizza-Cinque-358.jpeg?f=2x1&$p$f=53970fa&w=720&$w=3b33d2d",
    description:
      "O modo napolitano de preparo é considerado um Patrimônio Cultural Imaterial da Humanidade pela Unesco. Acima de tudo,  a massa napolitana deve atender a um conjunto muito específico. Seu sabor e textura únicos, precisam ser assados em um forno a lenha com cúpula. ",
  },
  {
    name: "Massa Siciliana",
    imagem:
      "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2012/07/Pizza_sicilianooo.jpg",
    description:
      "A pizza siciliana é conhecida por sua massa grossa em forma de retângulo, geralmente com mais de um centímetro de espessura. A saber, pode ser feita em qualquer formato de assadeira untada com azeite, o que a deixa bem crocante no fundo.",
  },
  {
    name: "Massa Nova Iorquina",
    imagem:
      "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2012/07/Pizza_sicilianooo.jpg",
    description:
      "A pizza siciliana é conhecida por sua massa grossa em forma de retângulo, geralmente com mais de um centímetro de espessura. A saber, pode ser feita em qualquer formato de assadeira untada com azeite, o que a deixa bem crocante no fundo.",
  },
];

export default async (request, response) => {
  return response.status(201).json(pastas);
};
