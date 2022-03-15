const db = require('./db')
const Post = db.sequelize.define('lista_ToDos',{
    titulo: {
        type: db.Sequelize.STRING
    },
    marcado: {
        type: db.Sequelize.BOOLEAN,
        defaultValue: false
    }
})

Post.sync({force: true})  //(USAR SOMENTE UMA VEZ)

module.exports = Post