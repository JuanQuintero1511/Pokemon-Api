import Card from '../Card/Card';
import { useSelector } from "react-redux";


const CardsContainer = () => {
    const pokemons = useSelector( state => state.pokemons) 

    return (
        <div>
            {pokemons.map(pokemon => {
                console.log(pokemon);
                return <Card 
                key = {pokemon[0].id}
                name = {pokemon[0].name.toUpperCase()}
                img = {pokemon[0].img}
                hp = {pokemon[0].hp}
                atack = {pokemon[0].atack}
                defending = {pokemon[0].defending}

                />
            })}
            
        </div>
    )
}

export default CardsContainer
