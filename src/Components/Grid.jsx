import { CharacterItem } from "./CharacterItem";
import { useFectch } from "../hooks/useFectch";


export const Grid = ({ category }) => {

  const { images, isLoading } = useFectch( category );
  
  return (
    <>

      <div data-aos="fade-right" data-aos-duration="500" className="title-categ">
        <h3> { category } </h3>
      </div>
      
      {
        isLoading && ( <div className="loading"> <h2>Cargando...</h2> </div>  )
      }

      <div className="card-grid">
        {
          images.map( ( image ) => (
            <CharacterItem 
            key={ image.id }
            { ...image }
            />
            
          ))
        }
      </div>
    </>
  )
}
