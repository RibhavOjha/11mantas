import React, { Component } from 'react';
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const options = {
    margin: 60,
    loop: true,
    autoplay: true,
    center: false,
    items: 3,
    //dots: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    nav: true,
    navText:["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
        0:{ 
           
            items:1,
            loop:true,
        },
        768:{
            items:1,
            loop: true

        },
        1170:{
            items:1,
            loop:true
        }
    }


}
class Clients extends Component {
    //state = {  } 
    render() { 
        return (
            
            <React.Fragment>
                {/* <h3 class='text-center'>What Clients Say</h3>
                <p class='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <section class="testimonial_section">
                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='about_content'>
                            <div class="background_layer"> </div>
                                <div className='layer_content'>
                                    <div className='section_title'>
                                    <h5>CLIENTS</h5>
                                        <h2>Happy with <br/> <strong>Customers &  Clients</strong></h2>
                                        <div class="heading_line"><span></span></div>
                                        <p>If you need any industrial solution we are available for you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                    <a href="#top">Contact Us<i class="icofont-long-arrow-right"></i></a>

                                    
                                </div>
                            
                            </div>
                             */}
                        {/* </div> */}
                        {/* <OwlCarousel className='owl-theme' {...options}>
                        <div className='col-md-7'>
                        <div class="testimonial_box">
                                <div class="testimonial_container">
                                    <div class="background_layer"></div>
                                    <div class="layer_content">
                                        <div class="testimonial_owlCarousel owl-carousel">
                                            <div class="testimonials"> 
                                                <div class="testimonial_content">
                                                    <div class="testimonial_caption">
                                                        <h6>Robert Clarkson</h6>
                                                        <span>CEO, Axura</span>
                                                    </div>
                                                    <p>The team at Tectxon industry is very talented, dedicated, well organized and knowledgeable. I was most satisfied with the quality of the workmanship. They did excellent work.</p>
                                                </div>
                                                <div class="images_box">
                                                    <div class="testimonial_img">
                                                        <img class="img-center" src="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332__340.jpg" alt="images not found"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="testimonials"> 
                                                <div class="testimonial_content">
                                                    <div class="testimonial_caption">
                                                        <h6>Robert Clarkson</h6>
                                                        <span>CEO, Axura</span>
                                                    </div>
                                                    <p>The team at Tectxon industry is very talented, dedicated, well organized and knowledgeable. I was most satisfied with the quality of the workmanship. They did excellent work.</p>
                                                </div>
                                                <div class="images_box">
                                                    <div class="testimonial_img">
                                                        <img class="img-center" src="https://media.istockphoto.com/photos/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-picture-id1329031407?b=1&k=20&m=1329031407&s=170667a&w=0&h=J6qRqj9hbKtSVwIfMJhcRXf3AEyAOshph2IAbPHwNUo=" alt="images not found"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="testimonials"> 
                                                <div class="testimonial_content">
                                                    <div class="testimonial_caption">
                                                        <h6>Robert Clarkson</h6>
                                                        <span>CEO, Axura</span>
                                                    </div>
                                                    <p>The team at Tectxon industry is very talented, dedicated, well organized and knowledgeable. I was most satisfied with the quality of the workmanship. They did excellent work.</p>
                                                </div>
                                                <div class="images_box">
                                                    <div class="testimonial_img">
                                                        <img class="img-center" src="https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_960_720.jpg" alt="images not found" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </OwlCarousel>
                         */}

                        
            {/* //         </div> */}
            {/* //     </div> */}
            {/* // </section> */}
            <div className='containerClient'>
            <OwlCarousel className='owl-theme' {...options}>
                        
                <div class="card card-block d-flex"> 
                    <div class="testimonial_content">
                        <div class="testimonial_caption">
                            
                            <div class="card-body align-items-center d-flex justify-content-center"><h6>Robert Clarkson</h6></div>
                            <span>CEO, Axura</span>
                            <br></br>
                            The team at Tectxon industry is very talented, dedicated, well organized and knowledgeable. I was most satisfied with the quality of the workmanship. They did excellent work.                    
                            <img class="img-center" src="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332__340.jpg" alt="images not found"/>
                               
                        </div>
                            
                    </div>
                </div>
                <div class="card card-block d-flex"> 
                    <div class="testimonial_content">
                        <div class="testimonial_caption">
                            
                            <div class="card-body align-items-center d-flex justify-content-center"><h6>Rafeal Ramiro</h6></div>
                            <span>CEO, Axura</span>
                            <br></br>
                            The team at Tectxon industry is very talented, dedicated, well organized and knowledgeable. I was most satisfied with the quality of the workmanship. They did excellent work.                    
                            <img class="img-center" src="https://media.istockphoto.com/photos/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-picture-id1329031407?b=1&k=20&m=1329031407&s=170667a&w=0&h=J6qRqj9hbKtSVwIfMJhcRXf3AEyAOshph2IAbPHwNUo=" alt="images not found"/>
                               
                        </div>
                            
                    </div>
                </div>
                <div class="card card-block d-flex"> 
                    <div class="testimonial_content">
                        <div class="testimonial_caption">
                            
                            <div class="card-body align-items-center d-flex justify-content-center"><h6>Gareth Houghton</h6></div>
                            <span>CEO, Axura</span>
                            <br></br>
                            The team at Tectxon industry is very talented, dedicated, well organized and knowledgeable. I was most satisfied with the quality of the workmanship. They did excellent work.                    
                            <img class="img-center" src="https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_960_720.jpg" alt="images not found"/>
                               
                        </div>
                            
                    </div>
                </div>
                                        
                        </OwlCarousel>
                </div>
            </React.Fragment>

        );
    }
}
 
export default Clients ;