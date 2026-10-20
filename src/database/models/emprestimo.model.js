const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Emprestimo = sequelize.define(
    "Emprestimo",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        leitorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "leitor_id",
        },
        livroId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "livro_id",
        },
        dataEmprestimo: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "data_emprestimo",
        },
        dataPrevista: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: "data_prevista",
        },
        dataDevolucao: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            field: "data_devolucao",
        },
    },
    {
        tableName: "emprestimos",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        indexes: [
            { fields: ["leitor_id"] },
            { fields: ["livro_id"] },
            {
                unique: true,
                fields: ["livro_id"],
                where: { data_devolucao: null },
            },
        ],
    },
);

Emprestimo.associate = (models) => {
    Emprestimo.belongsTo(models.Leitor, {
        foreignKey: "leitorId",
        as: "leitor",
    });
    Emprestimo.belongsTo(models.Livro, {
        foreignKey: "livroId",
        as: "livro",
    });
};

module.exports = Emprestimo;