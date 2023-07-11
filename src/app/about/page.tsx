import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BsSpotify } from "react-icons/bs"

export default function Experiences(){
    return(
        <main className="flex justify-center min-h-screen bg-gray-800">
            <section className="flex items-center">
                <div className='flex flex-col justify-center items-center'>
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
            </section>
        </main>
    )
}