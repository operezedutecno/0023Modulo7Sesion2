const { Client } = require("pg")
const conexion = new Client({
    host: 'localhost',
    port: 5432,
    database: 'supermercado',
    user: 'postgres',
    password: 'postgres'
})

conexion.connect();

//Opción 1 consultas de tipo string(No recomendado)
// (async() => {
//     const id=6
//     const apellido="Romero"
//     const actualizacion = `UPDATE clientes SET cl_apellido='${apellido}' WHERE cl_id=${id}`;
//     const resp = await conexion.query(actualizacion)
//     console.log(resp);
//     console.log("Modificado con éxito");
//     conexion.end();
// })()


// Opción 2 Consulta parametrizada (Recomendado)
// (async() => {
//     const id=6
//     const apellido="González"
//     const actualizacion = `UPDATE clientes SET cl_apellido=$1 WHERE cl_id=$2`;
//     // const resp = await conexion.query(actualizacion,["Ramírez", 5])
//     const resp = await conexion.query(actualizacion,[apellido, id])
//     console.log(resp);
//     console.log("Modificado con éxito");
//     conexion.end();
// })()



// Opción 3 Consulta parametrizada con objeto (Recomendado)
(async() => {
    const id=6
    const apellido="Morales"

    const consulta = {
        text: "UPDATE clientes SET cl_apellido=$1 WHERE cl_id=$2",
        values: [apellido, id]
    }
    
    const resp = await conexion.query(consulta)
    console.log(resp);
    console.log("Modificado con éxito");
    conexion.end();
})()