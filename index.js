const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/perguntaModel");
const respostaModel = require("./database/respostaModel");  

//database
connection.authenticate().then(() =>{
    console.log("Logou pra krl");
}).catch((err) => {
    console.log(err);
    
})

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public')); //Definindo que a aplicação usará arquivos estaticos

app.listen(3000, function(req,res){
    console.log("rodando na porta 3000");
})

app.get("/", (req, res) => {
    perguntaModel.findAll({raw: true, order:[ 
        ['createdAt','DESC'] //Ordenando para as perguntas mais recentes aparecerem primeiro
    ]}).then(perguntas => {
        console.log(perguntas);
        res.render('index', {
            perguntas: perguntas,
        })
    });
})

app.get("/perguntar", (req,res) =>{
    res.render("newQuestion");
})

app.post("/savequestion", (req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res) =>{
    var id = req.params.id;

    perguntaModel.findOne({
        where:{
            id,
        }
    }).then(pergunta => {
        if(pergunta != undefined && pergunta != null){

            respostaModel.findAll({
                where:{perguntaId: pergunta.id},
                order: [['id', "DESC"]]
            }).then(respostas =>{
                res.render('question', {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        }else{
            res.render("notFoundQuestion")
        }
    })
})

app.post("/saveResponse", (req, res) =>{
    var corpo = req.body.corpo;
    var perguntaId = req.body.perguntaId;

    respostaModel.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect(`/pergunta/${perguntaId}`)
    })
})