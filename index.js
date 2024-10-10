const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('El servidor está funcionando correctamente');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
