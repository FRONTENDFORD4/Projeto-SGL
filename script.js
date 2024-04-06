const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoints

// Usuários

app.get('/usuarios', (req, res) => {
  res.json(db.usuarios);
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  db.usuarios.push(usuario);
  res.json(usuario);
});

// Livros

app.get('/livros', (req, res) => {
  res.json(db.livros);
});

app.post('/livros', (req, res) => {
  const livro = req.body;
  db.livros.push(livro);
  res.json(livro);
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
