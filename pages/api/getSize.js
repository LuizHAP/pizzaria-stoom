const sizes = [
  {
    name: "Pizza Trem",
    imagem:
      "https://lh3.googleusercontent.com/A9GroDcucwuTNC6EbXTwaegYX6GfLkM_xb5vHzgGBTTaaSqvyfV2L2_z5HYxJwnhQmnPwxu0OQ=w1080-h608-p-no-v0",
    description:
      "Já viu aquela pizza que cabe a família inteira? Essa pizza serve até 30 pedaços",
  },
  {
    name: "Pizza Gigante",
    imagem:
      "https://3.bp.blogspot.com/-INqgGxPy_wo/TbWZw4kIEQI/AAAAAAAAAE8/He22gRAdaHQ/s1600/9PEDACOS.jpg",
    description: "Pizza de tamanho gigante com 9 fatias.",
  },
  {
    name: "Pizza Médio",
    imagem:
      "https://4.bp.blogspot.com/-nBhegm0zCVs/TyWPJuLN1nI/AAAAAAAAAcU/2esy6vXIpTg/s1600/pizza3.jpg",
    description: "Pizza de tamanho médio com 6 fatias",
  },
];

export default async (request, response) => {
  return response.status(201).json(sizes);
};
