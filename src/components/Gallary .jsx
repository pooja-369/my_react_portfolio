// import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { SlArrowRight , SlArrowLeft } from "react-icons/sl";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css'
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
import Image1 from '../assets/image1.jpeg'
import Image2 from '../assets/image2.jpeg'
import Image3 from '../assets/image3.jpeg'
import Image4 from '../assets/image4.jpeg'
import Image5 from '../assets/communication2.jpeg'
import Image6 from '../assets/Project-management.jpg'
import { useState } from 'react';


function Gallary () {

   

    let links=[
       Image1,Image2,Image3,Image4
    ]


    let logo=[
        Image6 ,
      Image5,
      Image5,
      Image6 
    ]

    const [category, setCategory] = useState(links);

    const chooseCategory = () => {
        setCategory(links)
    }

    const chooseAnotherCategory=()=>{
        setCategory(logo)
    }
  return (
    <>
     <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center ">
          Cover Flow
        </h1>

   <div className='flex justify-center gap-10'>
    <button onClick={chooseCategory}>Designs</button>
    <button onClick={chooseAnotherCategory}>Logo</button>
   </div>

     <Swiper 
     effect={'coverflow'}
     grabCursor={true}
     spaceBetween={30}
     slidesPerView={3}
     centeredSlides={true}
     loop={true}
     sliderPerView={'auto'}
     coverflowEffect={
        {
            rotate:0,
            stretch:0,
            depth:100,
            modifier:2.5,
        }
     }
    pagination={{el:'.swiper-pagination', clickable:true}}
    navigation={{ 
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable:true ,
    }}
     modules={[EffectCoverflow,Pagination,Navigation]}
     className="pt-[1rem] pb-[2rem] lg:mx-auto max-w-6xl mx-[1.5rem]"
     >
     {category.map(link=>(
        <SwiperSlide key={link.name}>
            <img src={link} alt={link.name} />
        </SwiperSlide>
     ))}


        <div className='slider-controller'>
         <div className=' slider-arrow swiper-button-white md:bg-black  hidden md:block'>
         <SlArrowLeft className='swiper-button-prev p-2 rounded-full '/>

         </div>
         

         <div className=' slider-arrow swiper-button-white  md:bg-white rounded-full hidden md:block '>
         <SlArrowRight className='swiper-button-next p-2 rounded-full '/>

         </div>
       <div className='swiper-pagination'></div>
        </div>

     </Swiper>
    </>
  )
}

export default Gallary 