/* 
    index.js
    Es el punto de inicio de la aplicacion
    El entrypoint

    - Conectar a la base de datos
    - Levantar el server
*/

import dbConnect from "./src/libs/db.js"
import {server} from "./src/server.js"

dbConnect()
    .then(() => {
        console.log('DB connection established :D ;D')

        server.listen(8080, () => {
            console.log('Server listening on port 8080')
        })
    })
    .catch((error) => {
        console.error('Error:', error)
    })