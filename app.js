const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  {
    id: 1,
    description: 'Hacer la compra',
    completed: false,
  },
  {
    id: 2,
    description: 'Hacer ejercicio',
    completed: true,
  },
  {
    id: 3,
    description: "viajas mañana",
    completed: false,
  },
  {
    id: 4,
    description: "estoy haciendo mis actividades",
    completed: true,
  }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});