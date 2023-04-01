import React,{useEffect} from 'react'
import './footer.css'
import './footer.scss'

import { BsFillSendFill } from 'react-icons/bs'
import { MdTravelExplore } from 'react-icons/md'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

import video2 from '../../Assets/video(2).mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos='fade-up' className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>
          <div className='inputDiv flex'>
            <input data-aos='fade-up' type='text' placeholder='Enter Email Adress' />
            <button data-aos='fade-up' className='btn flex' type='submit'>
              SEND <BsFillSendFill className='btn flex' />
            </button>
          </div>
        </div>
        <div className='footerCard flex'>
          <div className='footerInfo flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdTravelExplore className='icon' /> Travel</a>

            </div>

           <div data-aos='fade-up' className='footerParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et recusandae numquam aut. Aperiam doloremque placeat consequatur beatae culpa. Quae animi accusamus hic nemo natus impedit, in ipsum veniam omnis?</div>


            <div data-aos='fade-up' className='footerSocials flex'>
              <AiFillTwitterCircle className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className='footerLinks grid'>
            <div data-aos='fade-up'
            data-aos-duration='3000' className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                payment
              </li>
            </div>

            <div data-aos='fade-up'
            data-aos-duration='4000' className='linkGroup'>
              <span className='groupTitle'>
                PARTENER
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                HostelWorld
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                FaTripadvisor
              </li>

            </div>

              <div data-aos='fade-up'
              data-aos-duration='5000' className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             London
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             California
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             Indonesia
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
             Eroupe
            </li>

            <li className='footerList flex'>
              <FiChevronRight className='icon'/>
                Ocenia
            </li>

              </div>
              </div>
                  <div className='footerDiv flex'>
                      <small>BEST TRAVEL WEBSITE THEME</small>
                      <small>COPYRIGHTS RESERVED-ISRATECH2023</small>  
                  </div>
          
        </div>
      </div>
    </section>
  )
}

export default Footer