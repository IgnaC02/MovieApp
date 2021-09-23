import {ADD_DETALLES, ADD_PELICULAS } from './varAcciones';
import  movies  from '../components/movies.json';

export function addPelicula () {
    return {
        type: ADD_PELICULAS,
        payload: movies
    }
} 
export function addDetalles (id) {
    return {
        type: ADD_DETALLES,
        payload:id
    }
} 