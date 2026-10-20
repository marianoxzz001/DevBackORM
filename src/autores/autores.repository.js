const { Autor } = require("../database/models");

async function listar() {
    return Autor.findAll({ order: [["nome", "ASC"]] });
}

async function buscarPorId(id) {
    return Autor.findByPk(id);
}

async function criar(dados) {
    return Autor.create(dados);
}

async function atualizar(id, dados) {
    const autor = await Autor.findByPk(id);
    if (!autor) return null;
    return autor.update(dados);
}

async function deletar(id) {
    const autor = await Autor.findByPk(id);
    if (!autor) return null;
    await autor.destroy();
    return autor;
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar,
};
