import { criarTarefa, alterarTarefa, consultarTarefa, exibirTarefas, buscarPorStatus, buscarPorStatusNull, ApagarTarefa} from "../repository/tarefa.js"


import { Router } from "express";
const server = Router();

server.post('/tarefa', async (req, resp) =>{

    try {
        const TarefaCriada = req.body;

        const tarefa = await criarTarefa(TarefaCriada);

        resp.send(tarefa);

    } catch (err) {
        resp.status(200).send({
            erro: err.message
        })
    }

})



server.get('/tarefa/busca', async (req, resp) => {
    try {
        const {status} = req.query;

        if (status === 'urgente' || status === 'nao_urgente') {
            const resposta = await buscarPorStatus(status);
        } else if (status === 'null') {
            const resposta = await buscarPorStatusNull(status);
        } else {
            return resposta.status(400).json({ error: "Status inválido. Deve ser 'urgente', 'nao_urgente' ou 'null'." });
        }

        
        resp.send(resposta);
         
         
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }    
})

server.get('/tarefa/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await consultarTarefa(id);
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }    
})

server.get('/tarefa/usuario/:id', async (req,resp) => {
	try{
		const {id_usuario} = req.params;
		const resposta = await exibirTarefas(id_usuario);
		if(!resposta) throw new Error('Tarefa não encotrada')
		else
		resp.status(200).send(resposta);
	} catch(err){
        resp.status(400).send({
            erro: err.message
        })
	}
})

server.put('/alterar/:id', async (req,resp) => {
    
    try {
        const {id}  = req.params;
        const tarefa = req.body;

        const resposta = await alterarTarefa(id, tarefa);
        if(resposta != 1){
            throw new Error('A tarefa não pode ser alterado!');
        }
        else {
            resp.status(204).send()
        }

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.delete('/tarefa/:id', async (req,resp) => {
    try {
        const {id} = req.params;
        const resposta = await ApagarTarefa(id);

        if(resposta != 1){
            throw new Error('Não foi possivel deletar tarefa') 
        }
         resp.status(204).send()
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;