import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsSpotify} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

export default function Contact(){
    return(
        <main className='px-10 bg-gray-800'>
            <section className='min-h-screen flex text-center px-10 justify-center bg-gray-800'>
                <div className='flex flex-col items-center justify-center'>
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
            </section>
        </main>
    )
}