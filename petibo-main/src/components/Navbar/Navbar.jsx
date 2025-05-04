import React, { useEffect, useState } from 'react';
import logoImg from "../../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ sidebar, setSidebar }) => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate(); // To navigate after logout

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setShowNavbar(false);
            } else {
                // if scroll up show the navbar
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    const handleLogout = () => {
        // Clear authentication token or session
        localStorage.removeItem('authToken'); // Remove the auth token
        // Optionally, you could clear other session data here
        
        // Redirect user to login page or home page after logging out
        navigate('/'); // Redirect to login page
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='container'>
                <div className='flex justify-between items-center h-14 md:h-16'>
                    {/* logo section */}
                    <div className='flex items-center space-x-1'>
                        <img src={logoImg} alt="Logo" className='w-10 md:w-12' />
                        <h1 className='text-lg md:text-xl font-bold uppercase'>PAW</h1>
                    </div>
                    {/* NavLinks section */}
                    <ul className='md:flex space-x-8 hidden font-bold'>
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
                    {/* Right side content including Logout */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={handleLogout}
                            className="hidden md:block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded-md transition duration-300"
                        >
                            Logout
                        </button>
                        <div onClick={() => setSidebar(!sidebar)}>
                            <GiHamburgerMenu className='text-2xl cursor-pointer md:hidden' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
