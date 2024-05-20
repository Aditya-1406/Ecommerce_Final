import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>About Us</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>Meet the <span className=' text-pink-500'>Developers</span> Of Silox</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn.pixabay.com/animation/2022/09/28/13/39/13-39-31-176_512.gif" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Aditya Garg is a team leader specializing in backend development with a knack for frontend tasks. With years of experience, he's known for his strong leadership and technical expertise, ensuring smooth project execution.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Aditya Garg</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Team Leader</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://content.presentermedia.com/content/animsp/00030000/30117/road_rage_emoji_md_nwm_v2.gif" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Aditya Mittal is a valuable team member specializing in UI/UX design. With a keen eye for aesthetics and user experience, he brings creativity and innovation to every project.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Aditya Mittal</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI/UX Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://clipart-library.com/8300/1l8ZK6CbbUM8.gif" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Abhinav Rawat is a dedicated team member specializing in UI/UX design. With a focus on creating seamless and visually appealing experiences, he brings a blend of creativity and technical skill to his work.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Abhinav Rawat</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI/UX Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media4.giphy.com/media/LrQlr8NQig48u8utK6/giphy.gif?cid=6c09b952tky2ry8n5nnk00dpw2fy3cd0obzaeic36ffnsj72&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Akash Tiwari is a frontend specialist known for his expertise in crafting engaging user interfaces. With a passion for clean design and user-centric experiences, he brings creativity and precision to every project.

</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Akash Tiwari</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Frontend</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial