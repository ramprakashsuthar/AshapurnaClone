import React from 'react'
import { Link } from 'react-router-dom/dist'

export default function Header() {
    return (
        <>
            <header className='container-fluid p-0'>
                <nav class="navbar bg-white navbar-light navbar-expand-lg bg-body-tertiary container-fluid ">
                    <div class="container position-relative">
                        <a class="navbar-brand position-absolute" href="#">
                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/ec33214d-e643-4f45-bbb8-50ee61b830ec-1673703981.webp" alt="Ashapurna Logo" height="130px" className='ashaPurnaLogo' />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <div class="justify-content-end flex-grow-1 pe-3 pe-lg-0 align-items-center navbar-nav navSection">
                                    <Link to={'/'} class="nav-link fs-16 fw-400">Home</Link>
                                    <div class="header-dropdown cursor-pointer position-relative">
                                        <a class="nav-link fs-16 fw-400 h-100 w-100">About Us</a>
                                        <div className="header-dropdown-menu py-3 bg-white position-absolute">
                                            <ul className='list-unstyled'>
                                                <li>
                                                    <Link to={'/aboutus'} className='text-nowrap text-color fs-16 fw-400 d-block'>About us</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/ourjourney'}className='text-nowrap text-color fs-16 fw-400 d-block'>Our Journey</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/management'} className='text-nowrap text-color fs-16 fw-400 d-block'>Management Speaks</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/ourteam"} className='text-nowrap text-color fs-16 fw-400 d-block'>Our Team</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/csrsocialresponsability'} className='text-nowrap text-color fs-16 fw-400 d-block'>CSR Social Responsability</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/newsletter'} className='text-nowrap text-color fs-16 fw-400 d-block'>Newsletter</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/nri'} className='text-nowrap text-color fs-16 fw-400 d-block'>NRI Corner</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/whyinvestinjodhpur'} className='text-nowrap text-color fs-16 fw-400 d-block'>Why Invest In Jodhpur?</Link>
                                                </li>
                                                <li>
                                                    <a href="https://devapi.digitaltyari.com/ashapurna/storage/app/public/ashapurna/images/corporate-profile/25yrs-Presentation.pdf" target='_blank' className='text-nowrap text-color fs-16 fw-400 d-block'>Corporate Profile</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="header-dropdown cursor-pointer position-relative">
                                        <a class="nav-link fs-16 fw-400 h-100">Projects</a>
                                        <div className="header-dropdown-menu py-3 bg-white position-absolute">
                                            <ul className='list-unstyled'>
                                                <li>
                                                    <Link to={'/residential'} className='text-nowrap text-color fs-16 fw-400 d-block'>Residential</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/'} className='text-nowrap text-color fs-16 fw-400 d-block'>Commercial</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/'} className='text-nowrap text-color fs-16 fw-400 d-block'>Rental & Lease</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/'} className='text-nowrap text-color fs-16 fw-400 d-block'>Hospitlaty</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/'} className='text-nowrap text-color fs-16 fw-400 d-block'>Education</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/windmills'} className='text-nowrap text-color fs-16 fw-400 d-block'>Windmills</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/nritowenship'} className='text-nowrap text-color fs-16 fw-400 d-block'>NRI Towenship</Link>
                                                </li>
                                                <li>
                                                    <Link to={'/'} className='text-nowrap text-color fs-16 fw-400 d-block'>Upcoming Projects</Link>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to={'/mediaevent'} class="nav-link fs-16 fw-400">Media and Events</Link>
                                    <Link to={'/blog'} class="nav-link fs-16 fw-400" target="_blank">Blogs</Link>
                                    <Link to={'/contactus'} class="nav-link fs-16 fw-400">Contact Us</Link>
                                    <button type="button" class="text-uppercase enquiryBtn rounded-1 mt-0 ms-4 btn btn-primary">enquire</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
