module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define("Livro", {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        total_paginas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        autor: {
            type: DataTypes.INTEGER(200),
            allowNull: false
        },
        ano_lancamento: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        estoque: {
            type: DataTypes.INTEGER(20),
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
    {
        tablena: "livros",
        timestamps: true
    });
    return Livro
}