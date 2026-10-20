const express = require("express");
const autoresRoutes = require("./src/autores/autores.routes");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(autoresRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
