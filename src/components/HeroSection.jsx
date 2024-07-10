import myImage from '../assets/fdbdd.jpg'
import { TypeAnimation } from 'react-type-animation';
function HeroSection() {
  return (
    <div className="text-white flex items-center justify-center md:py-9 " id='HeroSection'>
      <div className="flex justify-around items-center gap-3 w-full md:px-10 py-3 md:py-10 px-7 pr-7  flex-col md:flex-row ">
        {/* left section */}
        <div className=" md:w-1/2 py-10  order-2 ">
          <div className="md:text-5xl text-3xl font-bold md:leading-15">
            Hii, I am <br/>Pooja <span className='text-blue-500'>Goyal</span> <br/>
            <TypeAnimation
      sequence={[
       
        'I am Fronted Developer',
        1000, 
        'I am UI/UX Designer',
        1000,
        'I am Programmer',
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '0.8em' , color:'rgb(51, 153, 255)' }}
      repeat={Infinity}
    />
   
          </div>
          <div className='text-lg py-5'>
    I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
    </div>
    <button className=' btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://drive.google.com/file/d/16MM5oVQQGqWHCTmSM4Sj3PO5NwDU91Ek/view'>Download CV</a></button>

        </div>
        {/* right section */}
        <div className=" flex md:w-1/4 order-1 ">
         <div className='flex m-auto justify-center z-10 relative'>
         <img src={myImage} alt="My Image"  className='flex justify-center items-center rounded-full  min-h-80 z-10 shadow-xl shadow-blue-800 md:animate-bounce-custom' />

         </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
