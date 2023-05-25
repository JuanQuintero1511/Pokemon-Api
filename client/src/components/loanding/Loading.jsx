import React from 'react'
import style from './Loading.module.css'


export default function Loading() {
  return (
    <div className={style.container_all}>   
      <div className={style.loader}>
        <span  className={style.loader_text}>loading</span>
        <span  className={style.load}></span>
    </div>

    </div>
  )
}