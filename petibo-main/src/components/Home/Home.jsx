import React from 'react';
import Hero from '../Hero/Hero';
import OurServices from '../Our Services/OurServices';
import WhereToBook from '../WhereToBook/WhereToBook';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      {/* <WhereToBook/> */}
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
