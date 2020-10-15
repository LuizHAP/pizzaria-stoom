const borders = [
  {
    name: "Borda Vulcão",
    recommended: true,
    imagem:
      "https://i.ytimg.com/vi/RrpThqIZPOs/maxresdefault.jpg",
    description:
      "Você já viu um vulcão? Agora imagina uma borda vulcão para sua pizza, com cheddar e catupiry?",
  },
  {
    name: "Borda Simples",
    recommended: false,
    imagem:
      "https://odia.ig.com.br/_midias/jpg/2020/06/24/pizza-17874446.jpg",
    description: "Pizza com borda simples, sem nenhum tipo de recheio",
  },
  {
    name: "Borda Catupiry",
    recommended: false,
    imagem:
      "https://media-cdn.tripadvisor.com/media/photo-s/06/a5/5b/23/babbo-giovanni.jpg",
    description: "Sabe aquele famoso catupiry? Já imaginou uma pizza com essa borda? Essa é a opção que você sonhou!",
  },
];

export default async (request, response) => {
  return response.status(201).json(borders);
};
