import './App.css';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from './images/uni.jpg';
//import img2 from './images/artsBuilding.jpg'

const options = {
  loop: true,
      center: true,
      items: 3,
      margin: 60,
      autoplay: true,
      dots:true,
      autoplayTimeout: 4000,
      smartSpeed: 1500,
      animateOut: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }

}
class App extends Component {
  render() { 
    return (
    <div>
      <main className='container'> 
      <OwlCarousel className="slider-items owl-carousel" {...options}>
      <div className='card' >
        <section class='blogs'>
          <div class = 'row'>
            <div class = 'col-sm-12'>
              
              <div class="card card-block d-flex" >
              <div class="card-body align-items-center d-flex justify-content-center">EMILIANO AQUILANI</div>
                            <div class="shadow-effect">
                                <img class="card-img-top" src={img1} alt={"Hi"}/>
                                <div class="card-body align-items-center d-flex justify-content-center"><a href='#top'>Blog Header</a></div>
                                <div class="card-body align-items-center d-flex justify-content-center"><p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p> </div>
                            </div>
                        </div>
              </div>

              
              
            </div>
          
        </section>
        </div>
        <div className='card'>
        <section class='blogs'>
          <div class = 'row'>
            <div class = 'col-sm-12'>
              
              <div class="card card-block d-flex">
              <div class="card-body align-items-center d-flex justify-content-center">LARA ATKINSON </div>
                            <div class="shadow-effect">
                                <img src={img1} alt={"Hi"}/>
                                <div class="card-body align-items-center d-flex justify-content-center"><a href='#top' >Blog Header</a> </div>
                                <div class="card-body align-items-center d-flex justify-content-center"> <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p> </div>
                            </div>
                        </div>

              </div>
              
            </div>
          
        </section>
        </div>
        <div className='card'>
        <section class='blogs'>
          <div class = 'row'>
            <div class = 'col-sm-12'>
              
              <div class="card card-block d-flex">
              <div class="card-body align-items-center d-flex justify-content-center">ANNA ITURBE</div>
                    <div class="shadow-effect">
                        <img src={img1} alt={"Hi"}/>
                        <div class="card-body align-items-center d-flex justify-content-center">  <a href='#top'>Blog Header</a> </div>
                        <div class="card-body align-items-center d-flex justify-content-center"><p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p> </div>
                    </div>
                </div>
              </div>
              
              
            </div>
          
        </section>
        </div>


        

      </OwlCarousel>
      </main>
      
    </div>
  );
}
}

export default App;
