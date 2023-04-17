export const CharacterItem = ( { name, url, ext, description} ) => {

  return (
  
      <div className='card' data-aos="fade-up" data-aos-duration="500">
        <img src={`${url}.${ext}`} alt={name} />
        <div className="info">
          <h2>{ name }</h2>
        </div>
        <div className="description-info">
          <p> { description } </p>
        </div>
      </div>

  )
}
