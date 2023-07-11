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
              <Link className='transition ease-in-out delay-200 duration-300 bg-gray-100 hover:bg-teal-200 text-black py-2 px-4 rounded-lg' href="/about">
                About
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
            <li>
              <Link className='transition ease-in-out delay-200 duration-300 bg-gray-100 hover:bg-teal-200 text-black py-2 px-4 rounded-lg' href="/contact_me">
                Contact Me!
              </Link>
            </li>
          </ul>
          <h1 className='flex justify-center pt-12 text-xs'>this website was developed by moi :)</h1>
        </div>
      </section>
    </main>
  )
}
