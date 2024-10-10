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
/chat // Importa los módulos necesarios
const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

// Configura la aplicación Express
const app = express();
app.use(express.json());
app.use(cors());

// Configura la clave API de OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Asegúrate de configurar esta variable en Render
});
const openai = new OpenAIApi(configuration);

// Define la ruta para manejar solicitudes desde ManyChat
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const reply = completion.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

// Inicia el servidor en el puerto especificado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
