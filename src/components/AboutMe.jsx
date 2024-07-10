import myImage from '../assets/beautiful-girl-photo_13.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'
function AboutMe() {
  return (
    <section id="AboutUs">
<div className='md:py-10 '>
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>About Us </div>
      <div className='flex justify-center text-lg py-5 z-20 text-center px-5'>My education has been a journey of self-discovery and growth. My educational details are as follows.</div>
    </div>
<div className=' w-4/5 m-auto flex gap-5 items-center md:px-10 py-3 md:py-10 px-7 pr-7  flex-col lg:flex-row lg:justify-between'>
{/* left section */}
  <div className='lg:w-1/3 lg:py-5  order-1 relative '> 
{/* <div> */}
    {/* <img src={myImage} alt="about_me"/> */}
    <img
        src={myImage}
        alt="Image 1"
        className="  w-80 h-80 rounded-md translate-y-6 flex items-center justify-center"
      />
      <img
        src={myImage}
        alt="Image 2"
        className="absolute -translate-y-72 left-17 w-80 h-80 rounded-md rotate-6"
      />
      {/* </div> */}
  </div>

{/* right section */}
  <div className=' lg:w-1/2 order-2 md:pb-0 pb-10 '>

<div className='flex  items-center gap-3 lg:justify-start justify-center'>
<div className='border-2 rounded-lg p-5 py-7  bg-gradient-to-br from-indigo-300 to-indigo-900 animate-pulse w-1/3 '>
<FaAward className='m-auto'/>
<h5 className='flex justify-center'>Experience</h5>
<small className='flex justify-center text-center items-center '>3+ Year Working </small>
</div>

<div className='border-2 rounded-lg p-5 py-7 bg-gradient-to-br from-indigo-300 to-indigo-900 animate-pulse w-1/3 '>
<FiUsers className='m-auto'/>
<h5 className='flex justify-center '>Skills</h5>
<small className='flex justify-center text-center'>7+ SkillSet </small>
</div>

<div className='border-2 rounded-lg p-5 py-7 bg-gradient-to-br from-indigo-300 to-indigo-900  animate-pulse w-1/3'>
<VscFolderLibrary className='m-auto'/>
<h5 className='flex justify-center'>Projects</h5>
<small className='flex justify-center text-center'>80+ Completed </small>
</div>

</div>


<div className='py-4'>
<p>My education has been a journey of self-discovery and growth. My educational details are as follows.My education has been a journey of self-discovery and growth. My educational details are as follows.</p>

<p>My cbnfnfsj education has been a journey of self-discovery and growth. My educational details are as follows.My education has been a journey of self-discovery and growth. My educational details are as follows.</p>

</div>


<div className='flex lg:justify-start justify-center '>
<button className=' btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://drive.google.com/file/d/16MM5oVQQGqWHCTmSM4Sj3PO5NwDU91Ek/view'>Let's Talk</a></button>
</div>


  </div>
</div>
    </section>
  )
}

export default AboutMe