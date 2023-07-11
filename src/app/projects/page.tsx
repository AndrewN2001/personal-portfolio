import Link from 'next/link'

export default function Experiences(){
    return(
        <main className="px-10 bg-gray-800">
            <section id="projects-section" className='min-h-screen flex justify-center items-center'>
                <ul className="grid grid-cols-2">
                    <li className="w-full">
                        <Link className="flex w-96 h-64 justify-center items-center hover:bg-gray-500" href="/portfolio_info">
                            Portfolio
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link className="flex w-96 h-64 justify-center items-center hover:bg-gray-500" href="/postoffice_info">
                            Post Office
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link className="flex w-96 h-64 justify-center items-center hover:bg-gray-500" href="/project3_info">
                            Project 3: Project Name
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link className="flex w-96 h-64 justify-center items-center hover:bg-gray-500" href="/project4_info">
                            Project 4: Project Name
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    )
}