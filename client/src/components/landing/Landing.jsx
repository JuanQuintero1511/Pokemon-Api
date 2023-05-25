import style from './Landing.module.css';
import { Link } from 'react-router-dom';

export default function Landing() {

  return (
    <div className={style.container_all}>
      <div className={style.container}>
          <Link to='/home'>
            <button className={style.button_home}>Welcome</button>
          </Link>
        </div>
    </div>
    
      
  
  )
}
