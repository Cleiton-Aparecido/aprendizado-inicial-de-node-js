// usando require para importar o modulo nativo http
const http = require("http");
// definir a porta de comunicação do servidor local criado
const port = 3030;

const rotas = {
    '/':'Curso de Node',
    '/livros':'Entrei na pagina de livros',
    '/leitores':'Pagina para os leitores'
}

//usando o metodo do http, createServer, para fazer a criação do servidor, 
//na onde precisa da requisição e resposta
const server = http.createServer((requisicao,resposta)=>{   
    resposta.writeHead(200,{'Content-Type':'text/plain'});
    resposta.end(rotas[requisicao.url]);
}).listen(port,()=>{
    console.log(`Servidor local sendo executado no http://localhost: ${port}`)
})

// O server.listen escuta executa a requisicao e resposta.

// server.listen(port, hostname, backlog, callback); parametros para o listen

// server.listen(port,() => {
// })