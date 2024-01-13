import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from './Common/Header';
import Home from './Pages/Home';
import Footer from './Common/Footer';
import AboutUs from './Pages/AboutUs';
import OurJourny from './Pages/OurJourny';
import Residential from './Pages/Residential';
import MediaEvents from './Pages/MediaEvents';
import ContactUs from './Pages/ContactUs';
import { RouterProvider, createBrowserRouter } from 'react-router-dom/dist';
import Management from './Pages/Management';
import Ourteam from './Pages/Ourteam';
import CsrSocialResponsability from './Pages/CsrSocialResponsability';
import Newsletter from './Newsletter';
import Nri from './Pages/Nri';
import WhyInvestInJodhpur from './Pages/WhyInvestInJodhpur';
import Windmills from './Pages/Windmills';
import NriTowenship from './Pages/NriTowenship';
import Blog from './Pages/Blog';

let router=createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/aboutus',
    element:<AboutUs/>
  },
  {
    path:'/contactus',
    element:<ContactUs/>
  },
  {
    path:'/ourjourney',
    element:<OurJourny/>
  },
  {
    path:'/mediaevent',
    element:<MediaEvents/>
  },
  {
    path:'/residential',
    element:<Residential/>
  },
  {
    path:'/management',
    element:<Management/>
  },
  {
    path:'/ourteam',
    element:<Ourteam/>
  },
  {
    path:'/csrsocialresponsability',
    element:<CsrSocialResponsability/>
  }
  ,
  {
    path:'/newsletter',
    element:<Newsletter/>
  }
  ,
  {
    path:'/nri',
    element:<Nri/>
  }
  ,
  {
    path:'/whyinvestinjodhpur',
    element:<WhyInvestInJodhpur/>
  }
  ,
  {
    path:'/windmills',
    element:<Windmills/>
  }
  ,
  {
    path:'/nritowenship',
    element:<NriTowenship/>
  }
  ,
  {
    path:'/blog',
    element:<Blog/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
