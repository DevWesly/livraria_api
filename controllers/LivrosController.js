const {
    Livro
} = require("../models");

module.exports = {
    mostrarTudo: async (req, res) => {
        try {
            const livros = await Livro.findAll();
            return res.status(200).json(livros);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error
            });
        }
    },
    mostrarLivro: async (req, res) => {
        let id = req.params.id;
        const livro = await Livro.findByPk(id)
        try {
            return res.status(200).json(livro);

        } catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            })
        }
    },
    guardar: async (req, res) => {
        try {
            const {
                titulo,
                total_paginas,
                autor,
                ano_lancamento,
                estoque
            } = req.body
            const novoLivro = await Livro.create({
                titulo,
                total_paginas,
                autor,
                ano_lancamento,
                estoque
            })
           return res.status(201).json(novoLivro);
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)

        }
    }

}