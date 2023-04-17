import { useEffect, useState } from "react";
import { getCaracters } from "../helpers/getCharacter";


export const useFectch = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async() => {
    const newImages = await getCaracters( category );
    setImages(newImages);
    setIsLoading( false );
  }
  
  useEffect( () => {    
    getImages();
  }, [ ]);

    return {
        images,
        isLoading
    }
}
