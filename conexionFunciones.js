const { Client } = require("pg")
const conexion = new Client({
    host: 'localhost',
    port: 5432,
    database: 'supermercado',
    user: 'postgres',
    password: 'postgres'
})
conexion.connect()

const ejecutarConsulta = (consulta) => {

    return new Promise((resolve, reject) => {
        conexion.query(consulta)
            .then(resp => resolve(resp))
            .catch(err=> reject(err.message))
            // .finally(() => conexion.end())
    })
}

//Opcion1 Consultas con Asincronía
// (async () => {
//     const consultaClientes = "SELECT * FROM clientes";
//     const consultaColaboradores = "SELECT * FROM colaboradores";

//     const clientes = await ejecutarConsulta(consultaClientes)
//     const colaboradores = await ejecutarConsulta(consultaColaboradores)

//     console.log("********** Listado de Clientes **********");
//     console.table(clientes.rows);
//     console.log("********** Listado de Colaboradores **********");
//     console.table(colaboradores.rows);
// })()


//Opcion2 Consultas con Asincronía
(async () => {
    const consultaClientes = "SELECT * FROM clientes";
    const consultaColaboradores = "SELECT * FROM colaboradores";

    const clientes = ejecutarConsulta(consultaClientes)
    const colaboradores = ejecutarConsulta(consultaColaboradores)

    const [respCliente, respColaboradores]  = await Promise.all([clientes, colaboradores])

    console.log("********** Listado de Clientes **********");
    console.table(respCliente.rows);
    console.log("********** Listado de Colaboradores **********");
    console.table(respColaboradores.rows);
})()