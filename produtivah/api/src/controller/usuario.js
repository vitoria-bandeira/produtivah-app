import {login, deletarperfil, fazerCadastro } from '../repository/usuario.js'

import { Router } from 'express';
const server = Router();

server.post('/usuario/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        
        const resposta = await login(email, senha);
        if (!resposta) {
            throw new Error('Credenciais inválidas');
        }

        resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})


server.post('/cadastro', async (req, resp) => {
    try {
        const cadastro = req.body;

        const fazerCad = await fazerCadastro(cadastro);

        if(!cadastro.email)
            throw new Error('Email é obrigatório!')
        if(!cadastro.senha)
            throw new Error('Senha é obrigatória!')        
        

        resp.send(fazerCad);

        if (!fazerCad) {
            throw new Error('nao foi possivel cadastrar');
        }
        

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }

})


 server.delete('/deletarperfil/:id', async (req,  resp ) => { 
     try {

        const {id} = req.params;
        const resposta = await deletarperfil(id)

        if(resposta != 1){
            throw new Error (' O perfil não pode ser deletado');
        }
        resp.status(204).send 
         
     } catch (err) {
         resp.status(404).send
     }
 }) 



 export default server;