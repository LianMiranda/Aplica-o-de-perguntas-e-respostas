const sequelize = require("sequelize");
const connection = require("./database");

const pergunta = connection.define('pergunta', {
    titulo: {
        type: sequelize.STRING,
        allowNull: false,
    },
    descricao:{
        type: sequelize.STRING,
        allowNull: false,
    }
});

pergunta.sync({force:false}).then(()=>{
    console.log("Tabela criada");
})

module.exports = pergunta