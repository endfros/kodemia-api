/*
    Generar una funcion que nos permita conectarnos a la base de datos
*/

import mongoose from "mongoose";
import * as dotenv from "dotenv"

dotenv.config()

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect(){
    return mongoose.connect(URL) //Metodo de mongoose para conectarse, regresa promesa
}

export default connect