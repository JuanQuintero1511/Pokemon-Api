import style from './Landing.module.css'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className = {style.conteinerLanding} >
            <button className = {style.Lading_Btn}>
                <Link to = '/home'>Welcome</Link>
            </button>
        </div>
    )
}

export default Landing;
