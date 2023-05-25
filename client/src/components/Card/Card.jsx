import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
import PokeType from '../pokeType/PokeType'
import NotFound from '../notFound/NotFound'

export default function Card(pokemon) {
  const {onClose} = pokemon
  return (
    <div>
      {
        !pokemon.id?<NotFound />:<div className={style.container_card}>
          <button onClick={()=>onClose(pokemon.id)} className={style.button_close}>x</button>
          <Link to={`detail/${pokemon.id}`}>
            <img src={pokemon.img} alt={pokemon.name} className={style.img_card}/>
            <h2 className={style.title}>{pokemon.name}</h2>
          </Link>
          <div className={style.type_container}>
            {
              <PokeType type={pokemon.type||pokemon.types}/>
            }
          </div>
        </div>
      }
    </div>
  )
}
