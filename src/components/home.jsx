import React from 'react'
import '../css/home.css';
const home = () => {
  return (
    <div className='full_outer_div'>
      <div className='out_div_home_container mt-5 pt-5' id='homemain'>
        <div className="home_img_container">
            <img src="https://artlogic-res.cloudinary.com/w_2000,h_2000,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0399/usr/images/pages/slideshow_data/1/_j7a1420.jpg" alt='not found' className='home_img'/>
        </div>
      </div>
      <div className='p-5'>
        <div>
            <h5 className='text-start mb-4'>RECENT EXHIBITIONS</h5>
            <div className='d-flex flex-row justify-content-center'>
                <div className='d-flex flex-column card_1_exbitions'>
                    <div className='exbitions_card1_img mb-3'>
                    </div>
                    <div className='text-start'>
                        <p>Joya Mukerjee Logue | those who walk before me</p>
                        <p>D-53 Defence Colony, New Delhi Joya Mukerjee Logue</p>
                        <p>27 AUGUST</p>
                    </div>
                </div>
                <div className='d-flex flex-column card_1_exbitions'>
                    <div className='exbitions_card2_img mb-3'>
                    </div>
                    <div className='text-start'>
                        <p>Chameli Ramachandran | Offering </p>
                        <p>D-40 Defence Colony, New Delhi</p>
                        <p>27 August - 16 September 2024</p>
                    </div>
                </div>
                <div className='d-flex flex-column card_1_exbitions'>
                    <div className='exbitions_card3_img mb-3'>
                    </div>
                    <div className='text-start'>
                        <p>DELHI CONTEMPORARY ART WEEK</p>
                        <p>F-35 SBI Colony, GOA</p>
                        <p>1 SEPTEMBER</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='p-5'>
        <div>
            <div className='ml-5'>
                <h1 className='main_heading text-start'>Events & Programs</h1>
            </div>
            <div className='d-flex flex-row'>
                <div className='d-flex flex-row mt-5 p-3'>
                    <div className='d-flex flex-column justify-content-center'>
                        <img src='https://htmlbeans.com/html/muzze/images/img11.jpg' alt='' className='event_img_1'></img>
                    </div>
                    <div className='text-start p-4'>
                        <h5>Gallery Talk</h5>
                        <p className='main_heading heading_event_card'>Rough Cut: Independent <br/>Japanese Antiquity</p>
                        <p>12:30pm - 1:00pm/32 Quincy Street, Cambridge, MA</p>
                        <button className='btn btn-primary'>Details</button>
                    </div>
                </div>
                <div className='d-flex flex-row mt-5 p-3'>
                    <div className='d-flex flex-column justify-content-center'>
                        <img src='https://htmlbeans.com/html/muzze/images/img12.jpg' alt='' className='event_img_1'></img>
                    </div>
                    <div className='text-start p-4'>
                        <h5>Gallery Talk</h5>
                        <p className='main_heading heading_event_card'>Rough Cut: Independent <br/>Japanese Antiquity</p>
                        <p>12:30pm - 1:00pm/32 Quincy Street, Cambridge, MA</p>
                        <button className='btn btn-primary'>Details</button>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-row'>
                <div className='d-flex flex-row mt-5 p-3'>
                    <div className='d-flex flex-column justify-content-center'>
                        <img src='https://htmlbeans.com/html/muzze/images/img13.jpg' alt='' className='event_img_1'></img>
                    </div>
                    <div className='text-start p-4'>
                        <h5>Gallery Talk</h5>
                        <p className='main_heading heading_event_card'>Rough Cut: Independent <br/>Japanese Antiquity</p>
                        <p>12:30pm - 1:00pm/32 Quincy Street, Cambridge, MA</p>
                        <button className='btn btn-primary'>Details</button>
                    </div>
                </div>
                <div className='d-flex flex-row mt-5 p-3'>
                    <div className='d-flex flex-column justify-content-center'>
                        <img src='https://artlogic-res.cloudinary.com/w_470,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0399/usr/images/exhibitions/main_image_override/234/_j7a0691-1-.jpg' alt='' className='event_img_1'></img>
                    </div>
                    <div className='text-start p-4'>
                        <h5>Gallery Talk</h5>
                        <p className='main_heading heading_event_card'>Rough Cut: Independent <br/>Japanese Antiquity</p>
                        <p>12:30pm - 1:00pm/32 Quincy Street, Cambridge, MA</p>
                        <button className='btn btn-primary'>Details</button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container-fluid featured_class">
        <div className="row d-flex flex-row justify-content-center">
            <div className="featured_collection col-4">
                <h1 className='main_heading'>Featured<br/>Collection</h1>
                <p className="featured_para1">So fish under The given own replenish. Greater land every very cattle replenish set unto. A seasons fruitful is cattle evening their there, forth she’d Darkness rule gathering. Midst it you’re gathered yielding without shall is beast.</p>
                <br/>
                <p className='featured_para2'>Life spirit firmament likeness fill moveth i appear good waters evening there image given his without meat, them don’t also fish life replenish, two, lesser divide dry moved it void of. A for.</p>
            </div>
            <div className='featured_collection_img_1 col-4 d-flex flex-column '>
                <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/Pumainframewith3deffect.jpg" className='featured_img_1' alt="not found"></img>
            </div>
            <div className='d-flex flex-column justify-content-end col-2'>
                <img src='https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/Elephantinframewith3deffect.jpg' alt='not found'></img>
            </div>
        </div>
      </div>
      

    </div>
  )
}

export default home
