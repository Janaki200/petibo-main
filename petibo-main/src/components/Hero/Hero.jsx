import React from 'react'
import PetImg from "../../assets/Pet.png"
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';



const Hero = () => {
    const [sidebar, setSidebar] = React.useState(false);
    const navigate = useNavigate(); 
    return (
        <main className='md:px-12 md:py-6 bg-primaryDark'>
            <section id='home' className='relative min-h-[650px]
            bg-gradient-to-r from-primary to-secondary w-full
            md:rounded-xl shadow-md'>
                <div className='container'>
                    {/* Navbar  */}
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />
                    {/* Hero section  */}
                    <div className='grid grid-cols-1
                    md:grid-cols-2 lg:grid-cols-3
                    place-items-center min-h-[650px]'>
                        {/* text content section  */}
                        <div className='mt-[100px] md:mt-0 p-4 space-y-4'>
                            <h1 
                            data-aos="fade-up"
                            className='text-5xl font-bold uppercase text-shadow'>A Happy Pet</h1>
                            <p className='text-sm'>Here we are around us !! To serve with petcare services to cherished pets health and petcare services ...
                                A Happy Pet !! </p>
                                <button className='primary-btn hover:bg-primaryDark'  onClick={() => navigate('/pets')} >shop Now</button>
                        </div>
                        {/* image section  */}
                        <div>
                        <img src={PetImg} alt="Pet" className='relative z-10 w-[400px] img-shadow'/>
                        </div>
                        {/* blank div section  */}
                        <div className='md:hidden'></div>
                        </div>
                </div>
                {/* Sidebar section  */}
                {sidebar && (
                    <div className='absolute top-20 left-2 w-full h-screen
                    z-20'>
                        <div className='text-xl font-semibold uppercase bg-secondary py-10
                        m-6 rounded-3xl'>
                            <ul className='flex flex-col items-center gap-4 cursor-pointer'>
                            <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#location">Where to find</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                            </ul>
                        </div>
                    </div>
                )}
            </section>
        </main>
        )
}

export default Hero