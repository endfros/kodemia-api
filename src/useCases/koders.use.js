import {Koder} from '../models/koders.model.js';

function getAll(){
    return Koder.find({}) // regresa la promesa
}

function getById(id){
    return Koder.findById(id)
}

function patch(id,newDataKoder){
    return Koder.findByIdAndUpdate(id, newDataKoder, {new: true})
}

function deleteById(id){
    return Koder.findByIdAndDelete(id)
}

function postElement(newDataKoder){
    return Koder.create(newDataKoder)
}

export {
    getAll,
    getById,
    patch,
    deleteById,
    postElement
}

// Este caso de uso se utiliza en un router
