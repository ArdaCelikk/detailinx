import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./redux/store"
import { LanguageProvider } from './context/LanguageContext';
import './style.css';
import IndexPage from './pages/index/IndexPage';
import ContactUs from './pages/contactus/ContactUs';
import ServicesPage from './pages/services/ServicesPage';
import WorksPage from './pages/works/WorksPage';
import CarGallery from './pages/cars/CarGallery';
import CarDetails from './pages/cars/CarDetails';
import NotFoundPage from './pages/notfound/NotFoundPage';


// store.dispatch(readPagesSettings(settings.pages));




// try {
//   const res = await axios.post("/account/information")
//   if (res.data.succeded) {
//     res.data.user && store.dispatch(setUserInformations(res.data.user))
//     res.data.products && store.dispatch(setProducts(res.data.products))
//     res.data.adminIsLoggedIn && store.dispatch(setAdminInformations({
//       orders: res.data.orders,
//       users: res.data.users,
//       visitors: res.data.visitors,
//       adminIsLoggedIn: res.data.adminIsLoggedIn
//     }))
//   }
// } catch (error) {
//   console.log(error);
//   store.dispatch(setProducts(error.response.data.products))
// }


// const pages = store.getState().settings.pages


const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />
  },
  {
    path: "/iletisim",
    element: <ContactUs />
  },
  {
    path: "/hizmetler",
    element: <ServicesPage />
  },
  {
    path: "/galeri",
    element: <WorksPage />
  },
  {
    path: "/arabalar",
    element: <CarGallery />
  },
  {
    path: "/araba/:id",
    element: <CarDetails />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
