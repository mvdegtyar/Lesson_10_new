import './style.css'

const MovieDetail = ({ description, image, opened }) => {

  if(!opened) {
    return <></>
  }

  return (
    <div className='detail-container'>
      <img src={image} alt='movie image'></img>
      <span>{description}</span>

    </div>
  )
}

export default MovieDetail;