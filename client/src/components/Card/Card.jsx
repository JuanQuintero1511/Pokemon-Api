const Card = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.name} />
            <p>Name:{props.name}</p>
            <p>Hp: {props.hp}</p>
            <p>Atack: {props.atack}</p>z
            <p>Defending: {props.defending}</p>
        </div>
    )
}

export default Card