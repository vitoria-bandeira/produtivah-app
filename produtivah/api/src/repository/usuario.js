import { connection } from '../repository/connection.js'


export async function login(email, senha) {

    const comando =
    `select
  id_usuario
    from usuarios
    where email = ?
    and senha   = ?
    `;

    const [linhas] = await connection.query(comando, [email, senha])
    return linhas[0];

}

 export async function deletarperfil (id)
{
    const comando = 
    `
    DELETE FROM USUARIOS
    WHERE ID_USUARIO = ?
    `;
    const [resposta] = await connection.query(comando,[id])
    return resposta.affectedRows;
}

export async function fazerCadastro(usuario)
{
    const comando = 
    `
    INSERT INTO USUARIOS ( EMAIL, SENHA)
     VALUES (?,?)
    `;
    const [resposta] = await connection.query(comando, [usuario.email, usuario.senha]);

    usuario.id_usuario = resposta.insertId;

    return usuario;
}

