const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Autor = sequelize.define(
    "Autor",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        nacionalidade: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        anoNascimento: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: "ano_nascimento",
        },
    },
    {
        tableName: "autores",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
);

Autor.associate = (models) => {
    Autor.hasMany(models.Livro, {
        foreignKey: "autorId",
        as: "livros",
    });
};

module.exports = Autor;
