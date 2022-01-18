import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'usuario',
    password: '1234',
    database: 'node-sql'
});

connection.connect(e => {
    if (e) {
        console.log(e);
        return e;
    }

    return console.log('Abriu a conexao com o BD!');

});

export default connection;