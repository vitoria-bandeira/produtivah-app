import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: '127.0.0.1',
    port: '3300',
    user: 'root',
    password: '1714',
    database: 'produtivah',
})

console.log("bd conectado")
export {connection} 