var express = require('express');
var app = express();
// npm install --save body-parser
const PORT = 8081;

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var listaContatos = [{
    nome: 'Ivan',
    sobrenome: 'Hoinacki',
    telefone: '991921699',
    cor: 'yellow',
    dataNascimento: new Date(),
    operadora: {
        id: 1,
        nome: 'Vivo',
        categoria: 'Celular',
        valor: 2
    }
}, {
    nome: 'Ana',
    sobrenome: 'da silva',
    telefone: '99944455',
    cor: 'red',
    dataNascimento: new Date(),
    operadora: {
        id: 2,
        nome: 'Claro',
        categoria: 'Celular',
        valor: 2
    }
}, {
    nome: 'Pedro',
    sobrenome: 'nunes',
    telefone: '88566458',
    cor: '#C1C1C1',
    dataNascimento: new Date(),
    operadora: {
        id: 1,
        nome: 'Vivo',
        categoria: 'Celular',
        valor: 2
    }
}];

var listaOperadoras = [{
    nome: 'Vivo',
    id: 1,
    categoria: 'Movel',
    valor: 96
}, {
    nome: 'Nextel',
    id: 6,
    categoria: 'Fixo',
    valor: 85
}, {
    nome: 'Claro',
    id: 2,
    categoria: 'Movel',
    valor: 85
}, {
    nome: 'Tim',
    id: 3,
    categoria: 'Movel',
    valor: 65
}, {
    nome: 'Oi',
    id: 4,
    categoria: 'Movel',
    valor: 50
}, {
    nome: 'GVT',
    id: 5,
    categoria: 'Fixo',
    valor: 2
}];

app.get('/contatos', function(req, res) {
    res.json(listaContatos);
});

app.post('/contatos', function(req, res) {
    listaContatos.push(req.body);
    res.json(true);
});

app.get('/operadoras', function(req, res) {
    res.json(listaOperadoras);
});

app.listen(PORT, function() {
    console.log('server iniciado na porta ' + PORT);
});
