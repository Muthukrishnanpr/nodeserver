import React from 'react';
import sliderpic from 'C:/Users/91978/Desktop/Study Materials/Practices/cilent/src/Responsive Website Design/images/sliderImg.jpg'

const Slider = () => {
    return (
       <>
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={sliderpic} className="d-block w-100" style={{height : "65vh"}} alt="Slider1" />
    </div>
    <div className="carousel-item">
      <img src={sliderpic} className="d-block w-100" style={{height : "65vh"}} alt="Slider2" />
    </div>
    <div class="carousel-item">
      <img src={sliderpic} className="d-block w-100" style={{height : "65vh"}} alt="Slider3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </>
    );
};

export default Slider;