import first from '../assets/images/first.jpg'
import second from '../assets/images/second.jpg'
import third from '../assets/images/third.png'

export default function Home() {
  return (
    <>
    <div id="countrySlide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type='button'
          data-bs-target="#countrySlide"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="First slide"
        ></button>
        <button type='button'
          data-bs-target="#countrySlide"
          data-bs-slide-to="1"
          aria-label="Second slide"
        ></button>
        <button type='button'
          data-bs-target="#countrySlide"
          data-bs-slide-to="2"
          aria-label="Third slide"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={first}
            className="w-100 d-block"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={second}
            className="w-100 d-block"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src={third}
            className="w-100 d-block"
            alt="Third slide"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#countrySlide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#countrySlide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    

    </>
  )
}
