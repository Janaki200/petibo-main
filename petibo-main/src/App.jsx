import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PetStore from './components/PetStore/PetStore';
import Accessories from './components/Accessories/Accessories';
import ToysPage from './components/Toys/Toys';
import FoodPage from './components/Food/Food';
import BookingOptions from './components/BookingOptions/BookingOptions';
import VeterinaryBooking from './components/VeterinaryBooking/VeterinaryBooking';
import DaycareBooking from './components/DaycareBooking/DaycareBooking';
import Confirmationpage from './components/Confirmationpage/Confirmationpage';

// ✅ Import new auth components
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from './components/Home/Home';
import Daycares from './components/DaycareBooking/Daycares';
import ServiceHistory from './components/DaycareBooking/ServiceHistory';

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Routes>
        {/* Home page */}
        <Route
          path="/home"
          element={
            // <>
            //   <Hero />
            //   <OurServices />
            //   <WhereToBuy />
            //   <Banner />
            //   <Footer />
            // </>
            <Home/>
          }
        />

        {/* Auth routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Feature routes */}
        <Route path="/pets" element={<PetStore />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/toys" element={<ToysPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/booking-options" element={<BookingOptions />} />
        <Route path="/veterinary-booking" element={<VeterinaryBooking />} />
        <Route path="/daycare-booking" element={<DaycareBooking />} />
        <Route path="/confirmationpage" element={<Confirmationpage />} />
        <Route path='/daycares' element= {<Daycares/>}/>
        <Route path='/history' element =  {<ServiceHistory/>}/>
      </Routes>
    </main>
  );
};

export default App;
