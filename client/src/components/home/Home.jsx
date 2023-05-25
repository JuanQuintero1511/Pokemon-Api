import React from 'react'
import s from './Home.module.css'
import Form from '../form/Form'
import Cards from '../cards/Cards'
import { useSelector } from 'react-redux'
import Loading from '../loanding/Loading'

export default function Home({onClose,navHome}) {
  const { pokemons,homeNav } = useSelector(s=>s)
  return (
    <div className={s.all}>
      {!pokemons.length?<div><Loading /><span className={s.span_1}>No se tienen aun pokemons</span></div>:<>
        {!homeNav?null:<Form navHome={navHome}/>}
        {homeNav?null:<Cards pokemons={pokemons} onClose={onClose}/>}
      </>}
    </div>
  )
}