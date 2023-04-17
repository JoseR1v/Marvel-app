import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <div className="input-categ">
            <form onSubmit={ onSubmit } >
                <input 
                type="text" 
                placeholder="Coloca el nombre de tu personaje" 
                value={ inputValue }
                onChange={ onInputChange } />  
                <button onClick={ onSubmit } >Buscar</button>          
            </form>
        </div>
    )
}
