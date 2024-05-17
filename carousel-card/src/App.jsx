
import './App.css'
import { testimonials } from './data'
import Slider from "react-slick";

const CustomNavButton = ({ type, onClick, name}) => {
  return (
    <button type="button" onClick={onClick} className={`arrow_btn ${name}`}>
            <span className="material-symbols-outlined arrow">
              {type}
            </span>
          </button>
  )
}

function App() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    prevArrow: <CustomNavButton type={"keyboard_double_arrow_left"} to="prev" name="prev_arrow" />,
    nextArrow: <CustomNavButton type={"keyboard_double_arrow_right"} to="next" name="next_arrow" />,
  };
  

  return (
    <div className='cards-main'>
      <h2 className="heading">Here is what our alumni say about freeCodeCamp:</h2>
      <div className="navigator-con">
          
        </div>
      <Slider {...settings}>
        {testimonials.map((tes) => (
          <div key={tes.name} className="card">
          <div className="card_img_container">
            <img src={tes.image} alt={tes.name} />
          </div>
          <div className="card-description">
            <div className="name_location">
              <h2 className="author_name">{tes.name}</h2>
              <p className="location">{tes.location}</p>
            </div>
            <h3 className="job">{tes.job}</h3>
            <p className="testimony">
             {tes.testimony}
            </p>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  )
}

export default App
