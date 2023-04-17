export const getCaracters = async(category) => {
  
    let url1 
    if(category != '') {
      url1 = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${ category }&limit=20&ts=1&apikey=8ca3b507dd531f8c3327d9fd128f51f8&hash=e09cdf92b7df3e592f699682a6639707`
    } else {
      url1 =  `https://gateway.marvel.com:443/v1/public/characters?hash=e09cdf92b7df3e592f699682a6639707&ts=1&apikey=8ca3b507dd531f8c3327d9fd128f51f8`
    }
    const resp = await fetch( url1 );
    const { data } = await resp.json();
  
    const character = data.results.map( img => ({
      id: img.id,
      name: img.name,
      url: img.thumbnail.path,
      ext: img.thumbnail.extension,
      description: img.description
    }))
    return character;
  }