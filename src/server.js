import express from 'express';
import kodersRouter from './routers/koders.router.js'

const server = express();

server.use(express.json())

server.use('/koders', kodersRouter)

export {server}