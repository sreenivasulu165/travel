import React,{useEffect} from 'react'
import './home.css'
import './home.scss'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { TbAppsFilled } from 'react-icons/tb'
import video from '../../Assets/video.mp4'


import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} autoPlay loop muted type='video/mp4' ></video>
      <div className='homeContent container'>
        <div className='textDiv'>
          <span data-aos='fade-up' className='smallText'>our Packages</span>
          <h1 data-aos='fade-up' className='homeTitle'>Search Your Holiday </h1>
        </div>

         <div data-aos='fade-up' className='carDiv grid'>
         <div className='destinationInput'>
          <label htmlFor='city'>Search Your destination</label>
          <div className='input flex'>
            <input type='text' placeholder='enter name here....' />
            <GrLocation className='icon' />
          </div> 
          </div>

          <div className='date Input'>
            <label htmlFor='city'>Search Your date:</label>
            <div className='input flex'>
              <input type='date' />
            </div>
          </div>

          {/* <div className='date Input'>
            <label htmlFor='city'>Search Your date:</label>
            <div className='input flex'>
              <input type='date' />
            </div>
          </div> */}
          

          <div className='price Input'>
            <div className='lable total flex'>
              <label htmlFor='price'>max Price:</label>
              <h3 className='total'>$5000</h3>
            </div>
            <div className='input flex'>
              <input type='range' max='5000' min='1000' />
            </div>
          </div>

          <div className='searchOptions flex'>
            <HiFilter className='icon' />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos='fade-up' className='homeFooterIcons flex'>

          <div className='rightIcons'>
            <FiFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
            <FaTripadvisor className='icon' />
          </div>

          <div className='leftIcons'>
            <AiOutlineUnorderedList className='icon' />
            <TbAppsFilled className='icon' />
          </div>

        </div>
      
      </div>
    </section>
  )
}

export default Home