import {SiTailwindcss} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import {GrMysql} from 'react-icons/gr';

export default function ProjectInfo(){
    return(
        <main className="px-10 bg-gray-800">
            <section className="min-h-screen flex flex-col justify-center items-center">
                <h1 className="w-5/12 text-3xl pt-7 pb-1 text-teal-200 border-b">Project Info</h1>
                <div className="w-5/12 pb-7 pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida rutrum quisque non tellus orci ac auctor augue. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Vitae elementum curabitur vitae nunc. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Magna eget est lorem ipsum dolor sit amet consectetur. Ultricies mi quis hendrerit dolor magna eget. Sit amet mattis vulputate enim nulla aliquet. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Eu lobortis elementum nibh tellus molestie nunc non blandit. Egestas sed sed risus pretium quam vulputate. Volutpat sed cras ornare arcu. Turpis egestas maecenas pharetra convallis. Vivamus at augue eget arcu dictum. Facilisis sed odio morbi quis commodo. Fermentum et sollicitudin ac orci. Id venenatis a condimentum vitae sapien. Aliquet lectus proin nibh nisl condimentum id.
                </div>
                <h1 className="w-5/12 text-3xl pt-7 pb-1 text-teal-200 border-b">Development</h1>
                <div className="w-5/12 pt-5">
                    Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Et malesuada fames ac turpis. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Quam pellentesque nec nam aliquam sem et tortor. Ac feugiat sed lectus vestibulum mattis. Adipiscing vitae proin sagittis nisl. Et tortor at risus viverra. Amet volutpat consequat mauris nunc. Pellentesque nec nam aliquam sem et. Et netus et malesuada fames ac turpis. Sit amet nulla facilisi morbi tempus iaculis. Aliquam sem fringilla ut morbi. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Aliquet lectus proin nibh nisl condimentum id venenatis a. Eu lobortis elementum nibh tellus molestie nunc non. Elit sed vulputate mi sit amet mauris. Ornare massa eget egestas purus viverra accumsan in nisl. Tincidunt dui ut ornare lectus sit amet.
                </div>
                <h1 className="w-5/12 text-3xl pt-7 pb-1 text-teal-200 border-b">Technologies</h1>
                <ul className="flex w-5/12 py-5 gap-3">
                        <li className='px-2 rounded-sm bg-teal-400 flex gap-1 items-center'>
                            <h1>Tailwind</h1>
                            <SiTailwindcss/>
                        </li>
                        <li className='px-2 rounded-sm bg-green-600 flex gap-1 items-center'>
                            <h1>Node.js</h1>
                            <FaNodeJs/>
                        </li>
                        <li className='px-2 rounded-md bg-gradient-to-r from-mysql-blue to-mysql-orange flex gap-1 items-center'>
                            <h1>MySQL</h1>
                            <GrMysql/>
                        </li>
                    </ul>
            </section>
        </main>
    )
}   