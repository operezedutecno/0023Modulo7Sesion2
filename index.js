const { Client } = require("pg")

const conexion = new Client({
    host: 'localhost',
    database: 'supermercado',
    user: 'postgres',
    password: 'postgres',
    port: 5432
})
conexion.connect()


const consulta = "SELECT * FROM clientes1";

//Consultas con Callback
//Opción 1
// conexion.query(consulta, (error, resultado) => {
//     if(error){
//         console.log(error.message);
//         return conexion.end()
//     }

//     console.log("Resultado de la consulta")
//     console.log(resultado.rows);
// })


//Consultas con Callback
//Opción 2
// conexion.query(consulta)
//         .then(resp => {
//             console.log("Respuesta",resp.rows);
//         }).catch(error => {
//             console.log(error.message);
//         }).finally(() => {
//             console.log("Se ejecutó el finally");
//             conexion.end()
//         })


//Consultas con Async/Await
(async () => {
    try {
        const respuesta = await conexion.query(consulta)
        console.log(respuesta.rows);
    } catch (error) {
        console.log(error.message);
    } finally {
        conexion.end()
    }

})()