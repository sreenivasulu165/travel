import React,{useEffect} from 'react'
import './Main.css'
import './main.scss'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiClipboard } from 'react-icons/fi'

import img from '../../Assets/img(1).jpg'
 import img2 from '../../Assets/img2.jpg'
 import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
 import img7 from '../../Assets/img7.jpg'
 import img8 from '../../Assets/img8.jpg'

 
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'new zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'the epitome of roamce,Bora Bora is one of the best travel desinations in the world.this place is know for its luxurious stays and adventurous activities '
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'srinu',
    location: 'new zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: 'Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic land...'
  },


  {
    id: 3,
    imgSrc: img3,
    destTitle: 'coorg',
    location: 'Coorg',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people....'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Andaman',
    location: 'Andaman',
    grade: 'CULTURAL RELAX',
    fees: '$1200',
    description:'Replete with turquoise blue water beaches and a bit of history, Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India. Port Blair, the capital of this union territory, has a major airport and seaport connected with the rest of t...'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Lakshadweep',
    location: 'Lakshadweep',
    grade: 'CULTURAL RELAX',
    fees: '$1300',
    description: 'Formerly known as Laccadive Islands, Lakshadweep translates to one hundred thousand islands in Malayalam. Home to a few of the most beautiful and exotic islands and beaches of India, Lakshadweep lies 400km off the southwest coast of the Arabian Sea. The smallest union territory of India has&n... '
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Goa',
    location: 'Goa',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Lying on the western coast, Goa is India s smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture. Spread across just 3,702 km, Goa lies in the Konkan region. It is a far cry from the hippie haven or ... '
  },


  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Allepy',
    location: 'Allepy',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Officially called Alappuzha, Alleppey is known for its network of canals and lagoons with beautiful backwaters and the houseboats offering overnight stays. Located in the southern part of Kerala, the coastline of Alleppey offers some of the best beaches with water sports during the dry sea... '
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Simla',
    location: 'Simla',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Officially called Alappuzha, Alleppey is known for its network of canals and lagoons with beautiful backwaters and the houseboats offering overnight stays. Located in the southern part of Kerala, the coastline of Alleppey offers some of the best beaches with water sports during the dry sea...'
  },
]
const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos='fade-right' className='title'>Most Visited Destination</h3>
      </div>
      <div className='secContent grid'>

        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos='fade-up' className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>

                {/* <div className='cardInfo'>
                <h4 className='destTitle'>{destTitle}</h4>
              </div> */}

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <FiClipboard className='icon' />
                  </button>
                </div>

              </div>

            )
          })
        }


      </div>

    </section>
  )
}

export default Main