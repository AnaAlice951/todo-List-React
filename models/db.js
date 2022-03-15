const Sequelize = require ('sequelize')
//Conexão com o banco de dados MySql
const sequelize = new Sequelize(process.env.DB_NAME, process.env.HOST, process.env.DB_PASS,{
    host: "localhost", 
    dialect: "mysql"
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}