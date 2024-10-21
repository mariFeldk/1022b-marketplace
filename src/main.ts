import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/produtos", async (req, res) => {

    try {
        const conexao = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            database: process.env.dbname ? process.env.dbname : "banco1022b",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        })

        const [result, fields] = await conexao.query("SELECT * FROM produtos")
        await conexao.end()


        res.send(result)
    } catch (e) {
        res.status(500).send("erro do servidor")
    }

})

/*app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})*/

//Criando a rota de usuarios
app.get("/usuarios", async (req, res) => {

    try {
        const conexao = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            database: process.env.dbname ? process.env.dbname : "banco1022b",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        })

        const [result, fields] = await conexao.query("SELECT * FROM usuarios")
        await conexao.end()


        res.send(result)
    } catch (e) {
        res.status(500).send("erro do servidor")
    }
    
    
})
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})
