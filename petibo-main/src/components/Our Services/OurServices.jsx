import React from 'react'
import { useNavigate } from 'react-router-dom'
import Pet1 from "../../assets/Pet Accessories.png"
import Pet2 from "../../assets/Toys.png"
import Pet3 from "../../assets/Food.png"

const ServicesData = [
    {
        id: 1,
        Image: Pet1,
        title: "Accessories",
        subtitle: "unleash the fashion",
        aosDelay: "300",
    },
    {
        id: 2,
        Image: Pet2,
        title: "Toys",
        subtitle: "unleash the time",
        aosDelay: "500",
    },
    {
        id: 3,
        Image: Pet3,
        title: "Food",
        subtitle: "prefer good health",
        aosDelay: "700",
    },
];

const OurServices = () => {
    const navigate = useNavigate();

    const handleSeeMore = (title) => {
        if (title === "Accessories") {
            navigate('/accessories');
        } else if (title === "Toys") {
            navigate('/toys');
        } else if (title === "Food") {
            navigate('/food'); // ✅ Added Food navigation
        }
    };

    return (
        <div id="services" className='container my-16 space-y-4'>
            {/* header section  */}
            <div className='text-center max-w-lg mx-auto'>
                <h1 className='text-3xl font-bold text-purple-950'>Our Services</h1>
            </div>

            {/* card section  */}
            <div className='flex flex-wrap justify-center gap-20'>
                {ServicesData.map(({ id, Image, title, subtitle, aosDelay }) => (
                    <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className='p-4 text-center space-y-6'>
                        <img 
                            src={Image} 
                            alt={title} 
                            className='max-w-[300px] mx-auto rounded-lg hover:scale-110 duration-300 img-shadow2' 
                        />
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-semibold text-black/90'>{title}</h1>
                            <p className='text-xl font-thin text-purple-800'>{subtitle}</p>
                            <button 
                                onClick={() => handleSeeMore(title)}
                                className='primary-btn hover:scale-110 hover:bg-primary font-semibold'
                            >
                                See more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurServices
