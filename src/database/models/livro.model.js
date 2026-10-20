const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Livro = sequelize.define(
    "Livro",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        autorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "autor_id",
        },
        titulo: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        isbn: {
            type: DataTypes.STRING(13),
            allowNull: false,
            unique: true,
        },
        editora: {
            type: DataTypes.STRING(80),
            allowNull: true,
        },
        paginas: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        anoPublicacao: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: "ano_publicacao",
        },
        categoria: {
            type: DataTypes.ENUM(
                "FANTASIA",
                "TERROR",
                "FICCAO_CIENTIFICA",
                "ROMANCE",
                "TECNICO",
            ),
            allowNull: false,
        },
    },
    {
        tableName: "livros",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        indexes: [{ fields: ["autor_id"] }],
    },
);

Livro.associate = (models) => {
    Livro.belongsTo(models.Autor, {
        foreignKey: "autorId",
        as: "autor",
    });
    Livro.hasMany(models.Emprestimo, {
        foreignKey: "livroId",
        as: "emprestimos",
    });
};

module.exports = Livro;
