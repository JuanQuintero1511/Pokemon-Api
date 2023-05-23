import { useState } from "react";


export const SearchBar = (onSearch) => {

    const [id, setId] = useState;

    const handleChange = (event) => {
        setId(event.tarjet.value);
    }

    return (
        <div>
            <input type="search" onChange={ handleChange } value={ id }/>
            <button onClick={() => { onSearch (id); setId ('')}}>Add</button>
        </div>
    )
}