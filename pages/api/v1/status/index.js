function status(request, response) {
  response.status(200).json({ chave: "resposta" });
}

export default status;
