// configurando o servidor
const express = require("express") // require - importar arquivo.js

const server = express()


server.set("view engine", "njk") // moto de vizualização

// configurando a template engine
const nunjucks = require("nunjucks") 
nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})


// configura a apresentação da página
server.get("/", function(req,res) {
    return res.render("courses")
})

server.get("/about", function(req,res) {
    return res.render("about")
})

// configurando para arquivos estaticos (estilização css)
server.use(express.static('public'))

// página não encontrada
server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(3000, function() {
    console.log("Server is running")
})

