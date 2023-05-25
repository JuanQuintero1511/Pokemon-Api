import React from 'react'
import style from './NotFound.module.css'
import pokeimg from '../../pokemonsimg/pokeimg.js'

export default function notFound() {
  return (
    <div className={style.container_404}>
      <h2>404</h2>
      <img src={pokeimg.img[73]} alt='not found' />
      <h3>Not Found!</h3>
    </div>
  )
}
