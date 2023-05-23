import  CardsContainer from "../../components/CardsContainer/CardContainer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../Actions/actions";

const Home = () => {
   
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getPokemons());
        console.log("funciono")
     }, [dispatch])
    
     
    return (
        <div>
            <h1>Esta es la vista de Home</h1>
            <CardsContainer/>
        </div>
    )
}

export default Home;