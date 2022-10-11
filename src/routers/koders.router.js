import express from 'express';
import * as kodersUseCase from '../useCases/koders.use.js'

const router = express.Router();

router.get('/', async (request,response) => {
    try{
        const allKoders = await kodersUseCase.getAll()
        
        response.json({
            success: true,
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})

router.get('/:idKoder', async (request,response) => {
    try{
        const id = request.params.idKoder
        const koder = await kodersUseCase.getById(id)

        response.json({
            success: true,
            data: {
                koders: koder
            }
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})


router.patch('/:idKoder', async (request,response) => {
    try{
        const id = request.params.idKoder
        const newDataKoder = request.body
        const updatedKoder = await kodersUseCase.patch(id,newDataKoder)
        
        response.json({
            success: true,
            data: {
                koders: updatedKoder
            }
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})

router.delete('/:idKoder', async (request,response) => {
    try{
        const id = request.params.idKoder
        const koder = await kodersUseCase.deleteById(id)

        response.json({
            success: true,
            data: {
                koders: koder
            }
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})

router.post('/', async (request,response) => {
    try{
        const newDataKoder = request.body
        const newKoder = await kodersUseCase.postElement(newDataKoder)

        response.json({
            success: true,
            data: {
                koders: newKoder
            }
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})

export default router