import Image from 'next/image'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsSpotify} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-10 bg-gray-800">
      <section id="introduction" className='min-h-screen flex items-center justify-center pb-32'>
        <div>
          <div className="text-center">
            <h2 className='text-6xl pb-5 text-teal-200 font-medium'>Hi, I'm Andrew Nguyen.</h2>
            <h3 className='text-2xl pb-5 text-gray-100'>An Inspiring Software Engineer.</h3>
            <h4 className='text-lg pt-5 text-gray-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </div>
          <ul className='flex justify-center gap-3 pt-10'>
            <li>
              <Link className='transition ease-in-out delay-200 duration-300 bg-gray-100 hover:bg-teal-200 text-black py-2 px-4 rounded-lg' href="/experiences">
                Experience
              </Link>
            </li>
            <li>
              <Link className='transition ease-in-out delay-200 duration-300 bg-gray-100 hover:bg-teal-200 text-black py-2 px-4 rounded-lg' href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className='transition ease-in-out delay-200 duration-300 bg-gray-100 hover:bg-teal-200 text-black py-2 px-4 rounded-lg' href="/skills">
                Skills
              </Link>
            </li>
          </ul>
          <h1 className='flex justify-center pt-12 text-xs'>this website was developed by moi :)</h1>
        </div>
      </section>
      <section id="Introduction" className='min-h-screen flex text-center px-10 justify-between bg-gray-800'>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <h1 className='text-4xl text-teal-200 '>INTRODUCTION</h1>
          <h2 className='pt-10 max-w-lg text-justify'>Nice to see you here! My name is Andrew Nguyen and I'm a fourth year Computer Science student with a Minor in Mathmatics at the University of Houston. </h2>
          <h2 className='pt-5 max-w-lg text-justify'>On my freetime, you'll see me browsing reddit, playing Valorant with friends, going to the gym, or hanging out with friends. I've also been honing my skills in photography as well!</h2>
          <h2 className="pt-5 max-w-lg text-justify">Have any inquiries about internship opportunities or just want to have a coffee? Feel free to send a message or connect with me with the socials below!</h2>
          <div id="social-icons" className="text-4xl flex pt-10 justify-center gap-3">
            <a href="#" target="_blank" rel="noreferrer noopener">
              <AiFillInstagram />
            </a>
            <a href="https://github.com/AndrewN2001" target="_blank" rel="noreferrer noopener">
              <AiFillGithub/>
            </a>
            <a href="https://open.spotify.com/user/8ssuic71rw0hfc3fcug9nzj7v?si=40224709329b4f20" target="_blank" rel="noreferrer noopener">
              <BsSpotify/>
            </a>
            <a href="https://www.linkedin.com/in/andrewnguyenta/" target="_blank" rel="noreferrer noopener">
              <AiFillLinkedin/>
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-1/2'>
          <div className='border-4 rounded-md border-slate-600 px-10 py-20'>
            <h1 className='text-4xl text-teal-200'>CONTACT ME</h1>
            <form className='flex flex-col pt-5'>
              <label htmlFor="name" className='text-left'>Name:</label>
              <input type="text" id="name" name="name" className="bg-slate-600 rounded-md text-slate-300 w-full md:w-96"required/>
              <label htmlFor="email" className='text-left pt-2'>Email Address:</label>
              <input type="text" id="email" name="email" className="bg-slate-600 rounded-md text-slate-300 w-full"required/>
              <label htmlFor="message" className='text-left pt-2'>Message:</label>
              <textarea id="message" name="message" className="bg-slate-600 rounded-md text-slate-300 h-48 w-full resize-none"required/>
            </form>
            <button type="submit" className='transition ease-in-out delay-200 duration-300 bg-gray-100 hover:bg-teal-200 text-black py-2 px-4 rounded-md pt-3 mt-3'>Send</button>
          </div>
        </div>
      </section>
    </main>
  )
}
