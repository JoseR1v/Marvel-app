import { useState } from "react";
import { AddCategory, Grid } from "./Components";

export const App = () => {
    const [categories, setCategories] = useState(['']);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory ]);
    }

  return (
    <>
        <div className="title-wrap">
            <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="Logo Marvel" />
        </div>

        
        <div className="add-categ">
            <h1> Busca tu personaje favorito: </h1>
            <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
            />
        </div>
        
        <div>
            { 
            categories.map( category => ( 
            <Grid 
            key={ category } 
            category={ category }/> 
            ))
            }
        </div>
    </>
  )
}
