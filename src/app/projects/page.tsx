export default function Experiences(){
    return(
        <main className="px-10 bg-gray-800">
            <section id="projects-section" className='min-h-screen flex justify-center items-center'>
                <ul className="grid grid-cols-2">
                    <li className="w-full">
                        <button className="border-2 w-96 h-64 hover:bg-gray-500">
                            <h1>Portfolio</h1>
                        </button>
                    </li>
                    <li className="w-full">
                        <button className="border-2 w-96 h-64 hover:bg-gray-500">
                            <h1>Post Office</h1>
                        </button>
                    </li>
                    <li className="w-full">
                        <button className="border-2 w-96 h-64 hover:bg-gray-500">
                            <h1>Project 1: Project Name</h1>
                        </button>
                    </li>
                    <li className="w-full">
                        <button className="border-2 w-96 h-64 hover:bg-gray-500">
                            <h1>Project 2: Project Name</h1>
                        </button>
                    </li>
                </ul>
            </section>
        </main>
    )
}