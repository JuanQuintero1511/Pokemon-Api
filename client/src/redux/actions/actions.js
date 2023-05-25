import { ADD_POKEMON,ADD_POKEMONS,GET_POKEMON_BY_ID,GET_POKEMON_BY_NAME,GET_TYPES,CREATE_POKEMON, REMOVE, NEXT, BACK, FORCE_CURRENT, RESET, HOME_NAV, FILTER, FILTER_TYPE, ORDER_POKEMONS } from './types.js';
import axios from 'axios';

export const addPokemons = (pokemons)=>{
  return{
    type:ADD_POKEMONS,
    payload:pokemons
  }
};
export const addPokemon = (pokemon)=>{
  return{
    type:ADD_POKEMON,
    payload:pokemon
  }
};
export const getPokemonId = (id)=>{
  return{
    type:GET_POKEMON_BY_ID,
    payload:id
  }
};
export const remove = (id)=>{
  const endPoint = `http://localhost:3001/pokemon/${id}`
  return async (dispatch)=>{
    await axios.delete(endPoint)
    .then(({data})=>{
      console.log(data)
      return dispatch({
        type:REMOVE,
        payload:id
      })
    })
  }
};
export const getPokemonByName = (pokemon)=>{
  return{
    type:GET_POKEMON_BY_NAME,
    payload:pokemon
  }
};
export const nextP = ()=>{
  return{
    type:NEXT
  }
};
export const backP = ()=>{
  return{
    type:BACK
  }
};
export const forceCurrent = (num)=>{
  return{
    type:FORCE_CURRENT,
    payload:num
  }
};
export const getTypes = ()=>{
  const endPointType = 'http://localhost:3001/types'
  return async (dispatch)=>{
    await axios.get(endPointType)
    .then(({data})=>{
      return dispatch({
        type:GET_TYPES,
        payload:data
      })
    })
  }
};
export const createPokemon = (pokemon)=>{
  const endPoint = 'http://localhost:3001/pokemon/create'
  return async (dispatch)=>{
    await axios.post(endPoint,pokemon)
    .then(({data})=>{
      return dispatch({
        type:CREATE_POKEMON,
        payload:data
      })
    })
  }
};
export const homeNav = (flag)=>{
  return{
    type:HOME_NAV,
    payload:flag
  }
}
//filtros de ordenamiento
export const resetHome = ()=>{
  return{
    type:RESET
  }
};
export const filterBy = (f)=>{
  return{
    type:FILTER,
    payload:f
  }
};
export const filterType = (f)=>{
  return{
    type:FILTER_TYPE,
    payload:f
  }
};
export const orderPokemons = (o)=>{
  return{
    type:ORDER_POKEMONS,
    payload:o
  }
};
