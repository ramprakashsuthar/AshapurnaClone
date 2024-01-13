import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Residential() {
    return (
        <>
        <Header/>

            <section class="container-fluid position-relative aboutBanners residentialBanners">
                <div className="container">
                    <div class="row">
                        <div class="px-0 col-lg-12">
                            <div class="d-flex justify-content-center h-100 align-items-center">
                                <div class="aboutBannerContent">
                                    <div class="d-flex align-items-center justify-content-center text-uppercase text-white fs-19 mb-10">
                                        <span class="">
                                            <a class="text-white" href="/">Home</a>
                                        </span>
                                        <span class="mx-1 fs-16">/</span>
                                        <span>About Us</span>
                                    </div>
                                    <h2 class="golden-color fw-700 fs-35 text-center text-capitalize">Ashapurna Projects</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid  projects-section'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center">
                                <h1 class="fs-35 fw-600 blue-color mb-30">Residential Projects</h1>
                            </div>
                            <div class="projects-nav py-lg-3">
                                <ul class="list-unstyled text-center">
                                    <li class="mb-lg-3 mx-2 d-inline-block">
                                        <a class="text-decoration-none text-color d-flex align-items-center px-2 fs-15 active" href="/residential">Residential</a>
                                    </li>
                                    <li class="mb-lg-3 mx-2 d-inline-block">
                                        <a class="text-decoration-none text-color d-flex align-items-center px-2 fs-15 " href="/commercial">Commercial</a>
                                    </li>
                                    <li class="mb-lg-3 mx-2 d-inline-block">
                                        <a class="text-decoration-none text-color d-flex align-items-center px-2 fs-15 " href="/hospitality">Hospitality</a>
                                    </li>
                                    <li class="mb-lg-3 mx-2 d-inline-block">
                                        <a class="text-decoration-none text-color d-flex align-items-center px-2 fs-15 " href="/education">Education</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div class="text-center py-lg-4 d-none">
                                <h2 class="blue-color-2 fs-40 fw-600 mb-20">New Launch</h2>
                            </div>
                            <div className="row">
                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                                    <div className="ashaBussiCardWrap ourProductCard">
                                        <div className="ashaTabCont">
                                            <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                    <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                    <div class="imgBox">
                                                        <a href="/residential/ashapurna-sheoganj">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="rounded">
                                                                <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                                </a>
                                                            </div>
                                                            <h3 class="fs-16 ms-2 mb-0">
                                                                <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                            </h3>
                                                        </div>
                                                        <p class="fs-13 m-0 p-0">
                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                            </svg>
                                                            Sheoganj, Sirohi District, Rajasthan</p>
                                                        <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                </svg>
                                                                Few Units Left</span>
                                                            <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid towenShipsSection py-4 py-lg-5'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center py-lg-4">
                                <h2 class="blue-color-2 fs-40 fw-600 mb-20">Residential Townships</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <section className='container-fluid py-4 py-lg-5'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center py-lg-4">
                                <h2 class="blue-color-2 fs-40 fw-600 mb-20">Residential Flats</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-lg-5 mb-3'>
                            <div className="ashaBussiCardWrap ourProductCard">
                                <div className="ashaTabCont">
                                    <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                        <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                            <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                            <div class="imgBox">
                                                <a href="/residential/ashapurna-sheoganj">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/plots-for-sale-in-sheoganj-1681992470.webp" alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                </a>
                                            </div>
                                            <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                <div class="d-flex align-items-center mb-2">
                                                    <div class="rounded">
                                                        <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-township-sheoganj-logo-1677495034.webp" height="30" alt="Ashapurna Sheoganj" />
                                                        </a>
                                                    </div>
                                                    <h3 class="fs-16 ms-2 mb-0">
                                                        <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">Ashapurna Sheoganj</a>
                                                    </h3>
                                                </div>
                                                <p class="fs-13 m-0 p-0">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                    </svg>
                                                    Sheoganj, Sirohi District, Rajasthan</p>
                                                <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                    <span>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                            <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                        </svg>
                                                        Few Units Left</span>
                                                    <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
