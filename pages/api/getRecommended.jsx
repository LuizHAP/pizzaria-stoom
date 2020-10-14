const recommended = {
  recommended: "Escarola",
};

export default async (request, response) => {
  return response.status(201).json(recommended);
};
