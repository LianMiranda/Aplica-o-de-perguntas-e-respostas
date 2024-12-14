const sequelize = require("sequelize");
const connection = require("./database");


const respostas = connection.define('resposta', {
    corpo: {
        type: sequelize.TEXT,
        allowNull: false,
    },
    perguntaId:{
        type: sequelize.INTEGER,
        allowNull: false,
    },
})

respostas.sync({force:false}).then(()=>{
    console.log("Tabela criada");
}).catch((err) => {
    console.error("errO", err) })

module.exports = respostas
  
