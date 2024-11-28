import { connection } from '../repository/connection.js'


export async function criarTarefa(tarefa) {

    const comando =
    `INSERT INTO TAREFAS ( titulo, descricao, status, id_usuario)
     VALUES (?,?,?,?) `    ;

     const [resposta] = await connection.query(comando, [tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.id_usuario]);

     tarefa.id = resposta.insertId;
 
     return tarefa;
}

export async function alterarTarefa(id,tarefa){
    const comando =
    `
    UPDATE tarefas 
    SET TITULO= ?, 
    DESCRICAO = ?, 
    STATUS = ?, 
    ID_USUARIO   = ?
  WHERE ID_TAREFA = ?
    `

    const [resposta] = await connection.query (comando, [tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.id_usuario, id])
    return resposta.affectedRows;
}


export async function consultarTarefa(id){
    const comando = 
    `
    SELECT id_tarefa	id,
        id_usuario      usuario,
        titulo      titulo,
	   descricao		nome,
       status		descricao
  FROM tarefas
  WHERE id_tarefa = ? 
  `;
    const [linhas] = await connection.query(comando, [id]);
    return linhas;
}

export async function exibirTarefas(id){
	const comando = `
	SELECT id_tarefa			   id,
       id_usuario                  usuario,
	  titulo                  titulo,
       descricao                  descricao,
       status                status
  FROM tarefas WHERE id_usuario		= ?`
	const [linhas] = await connection.query(comando, id)
	return linhas
}



export async function buscarPorStatus(status){
    const comando = 
    `
    SELECT id_tarefa	id,
    id_usuario      usuario,
    titulo			titulo,
    descricao	    descricao,
    status	    	status
    FROM tarefas
    WHERE status like ?   
    `;
    const [linhas] = await connection.query(comando, [`%${status}%`]);
    return linhas;
}

export async function buscarPorStatusNull(status){
    const comando = 
    `
    SELECT id_tarefa	id,
    id_usuario      usuario,
    titulo			titulo,
    descricao	    descricao,
    status	    	status,
    FROM tarefas
    WHERE status is null   
    `;
    const [linhas] = await connection.query(comando, [`%${status}%`]);
    return linhas;
}



export async function ApagarTarefa (id){
     const comando =
     `
     DELETE FROM tarefas 
      WHERE id_tarefa = ?
     `;
     
     const [resposta] = await connection.query  (comando, [id])

     return resposta.affectedRows;
}
