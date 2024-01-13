import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Slider from 'react-slick';

export default function NriTowenship() {
    var nriTowenshipSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    var landMarkSlider = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrow: false
    };
    return (
        <>
            <Header />

            <section className='container-fluid homeBanner-main'>
                <div className="container">
                    <div className="home-banner-row row">
                        <div className='p-0 px-lg-3 col-lg-12'>
                            <Slider {...nriTowenshipSlider}>
                                <div>
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/slider/luxury-villas-in-jodhpur-ashapurna-nri-1681709530.webp" alt="" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/slider/european-themed-luuxry-township-in-jodhpur-ashapurna-nri-1681709530.webp" alt="" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/slider/best-gated-society-in-jodhpur-ashapurna-nri-1681709530.webp" alt="" className='img-fluid' />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section class="project-detail-section p-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 d-none d-lg-block">
                            <div class="high-fields-box position-relative overflow-hidden text-start d-md-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                    <div class="d-lg-flex align-items-center flex-shrink-0 h-100 me-1 mobileImgWrapper">
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp" width="156" height="94" alt="Ashapurna NRI" class="img-fluid me-lg-3" />
                                        <img src="/images/icons/vertical-line.svg" width="3" height="121" alt="Line" class="img-fluid d-none d-lg-inline" />
                                    </div>
                                    <div class="high-field-content">
                                        <h1 class="fs-26 fw-600 m-0">Ashapurna NRI</h1>
                                        <p class="text-color px-1 px-md-0 fw-400 fs-15">Main Pali Highway, Jodhpur</p>
                                        <div class="d-flex flex-wrap">
                                            <a target="blank" href="https://goo.gl/maps/vEfdYEQBNgEk4NEf6" class="text-decoration-none d-flex flex-shrink-0 justify-content-center align-items-center m-2 m-lg-1 fs-15">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                    <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">

                                                    </path>
                                                </svg> Get Directions</a>
                                            <span class="d-block text-white fs-14 m-2 m-lg-1 fw-400 w-max-content">Starting from @29* Lakhs</span></div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                                    <a class="cursor-pointer me-lg-4 mx-2 mx-lg-0 text-decoration-none fs-15 golden-color d-flex align-items-center justify-content-center fw-500 brochure-btn"><img src="https://ashapurna.com/images/icons/download-icon-gold.svg" width="20" height="14" alt="Download" class="img-fluid me-2 arrow-gold" />
                                        <img src="https://ashapurna.com/images/icons/download-icon-white.svg" width="20" height="14" alt="Download" class="img-fluid me-2 d-none arrow-white" />Brochure</a>
                                    <a href="tel:9351556747" class="mx-2 mx-lg-0 text-decoration-none text-white d-flex align-items-center justify-content-center fs-15 fw-500 call-btn">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                            </path>
                                        </svg>
                                        9351556747</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 d-none d-md-block d-lg-none">
                            <div class="high-fields-box position-relative overflow-hidden text-start d-lg-flex justify-content-between align-items-center">
                                <div class="d-flex mb-3">
                                    <div class="d-lg-flex align-items-center flex-shrink-0 h-100 me-1 mobileImgWrapper">
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp" width="156" height="94" alt="Ashapurna NRI" class="img-fluid me-lg-3" />
                                        <img src="/images/icons/vertical-line.svg" width="3" height="121" alt="Line" class="img-fluid d-none d-lg-inline" />
                                    </div>
                                    <div class="high-field-content">
                                        <h1 class="fs-26 fw-600 m-0">Ashapurna NRI</h1>
                                        <p class="text-color px-1 px-md-0 fw-400 fs-15">Main Pali Highway, Jodhpur</p></div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between flex-wrap tab-btn-wrapper">
                                    <a target="blank" href="https://goo.gl/maps/vEfdYEQBNgEk4NEf6" class="text-decoration-none d-flex flex-shrink-0 justify-content-center align-items-center m-2 m-lg-1 fs-15">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg> Get Directions
                                    </a>
                                    <span class="d-block text-white fs-14 m-2 m-lg-1 d-flex align-items-center justify-content-center fw-400 w-max-content">Starting from @29* Lakhs</span>
                                    <a class="cursor-pointer me-lg-4 mx-2 mx-lg-0 text-decoration-none fs-15 golden-color d-flex align-items-center justify-content-center fw-500 brochure-btn">
                                        <img src="/images/icons/download-icon-gold.svg" width="20" height="14" alt="Download" class="img-fluid me-2 arrow-gold" />
                                        <img src="/images/icons/download-icon-white.svg" width="20" height="14" alt="Download" class="img-fluid me-2 d-none arrow-white" />Brochure</a>
                                    <a href="tel:9351556747" class="mx-2 mx-lg-0 text-decoration-none text-white d-flex align-items-center justify-content-center fs-15 fw-500 call-btn">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                            </path>
                                        </svg>9351556747</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 d-md-none d-block project-detail-mobile-section">
                            <div class="high-fields-box position-relative overflow-hidden text-start d-md-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                    <div class="d-lg-flex align-items-center flex-shrink-0 h-100 me-2 mobileImgWrapper">
                                        <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp" width="156" height="94" alt="Ashapurna NRI" class="img-fluid me-lg-3" />
                                        <img src="/images/icons/vertical-line.svg" width="3" height="121" alt="Line" class="img-fluid d-none d-lg-inline" />
                                    </div>
                                    <div class="high-field-content">
                                        <h1 class="fs-26 fw-600 m-0">Ashapurna NRI</h1>
                                        <p class="text-color px-1 px-md-0 fw-400 fs-15">Main Pali Highway, Jodhpur</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap mt-lg-0 mt-3 align-items-center justify-content-center justify-content-sm-between">
                                    <a target="blank" href="https://goo.gl/maps/vEfdYEQBNgEk4NEf6" class="text-decoration-none d-flex flex-shrink-0 justify-content-center align-items-center mb-2 fs-15">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg> Get Directions</a>
                                    <span class="d-block text-white fs-14 mb-2 fw-400 w-max-content d-flex justify-content-center align-items-center">Starting from @29* Lakhs</span>
                                    <a class="cursor-pointer me-lg-4 mb-2 text-decoration-none fs-15 golden-color d-flex align-items-center justify-content-center fw-500 brochure-btn">
                                        <img src="/images/icons/download-icon-gold.svg" width="20" height="14" alt="Download" class="img-fluid me-2 arrow-gold" />
                                        <img src="/images/icons/download-icon-white.svg" width="20" height="14" alt="Download" class="img-fluid me-2 d-none arrow-white" />Brochure</a>
                                    <a href="tel:9351556747" class="mb-2 text-decoration-none text-white d-flex align-items-center justify-content-center fs-15 fw-500 call-btn">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                            </path>
                                        </svg>9351556747</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="project-detail-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-xl-8">
                            <div class="detail-overview pe-xl-5">
                                <div>
                                    <h2 class="fs-35 fw-600 blue-color position-relative py-1 my-lg-3">Project Overview</h2>
                                    <p class="text-color fs-14 fw-400 lh-24 mb-3">
                                        <h3 style={{ marginTop: '22px' }}>
                                            <span lang="EN">Luxury Villas in Jodhpur&nbsp;</span>
                                        </h3>
                                        <p class="MsoNormal">
                                            <span lang="EN" style={{ fontSize: '12.6px' }}>Ashapurna NRI is the 38th project of Ashapurna Buildcon Ltd. The project hosts classy Luxury Villas in Jodhpur that come in a package of European architecture&nbsp;</span>
                                            <span lang="EN" style={{ fontSize: '12.6px' }}>
                                                <a href="https://ashapurna.com/villas-in-jodhpur">
                                                    <span style={{ fontWeight: '700' }}>Villas in Jodhpur</span>
                                                </a>
                                            </span>
                                            <span style={{ fontSize: '12.6px' }}>&nbsp;</span>
                                            <span lang="EN" style={{ fontSize: '12.6px' }}>with 5-star luxury amenities like club house full of activities like an auditorium, swimming pool, mini theatre, tennis court, banquet hall, multipurpose room, and many others. The sizes of luxury villas here start from a count of numerous 2 bhk villas, 3 bhk luxury villas to massive 4 bhk luxury villas available for sale in Jodhpur.&nbsp;
                                            </span>It is spread out over 120 acres and is designed and rested in a green and clean environment free from pollution, with more than 10 themed gardens and 50% open green space, and simple access to the city.&nbsp;With these luxurious offerings and world-class facilities under its belt; Ashapurna NRI township can easily be ranked amongst the best townships in Jodhpur making it the perfect residence if you're looking to live life king-size.</p>
                                    </p>
                                </div>
                                <div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h2 class="fs-35 fw-600 blue-color position-relative py-lg-3 py-2 mb-lg-3 mt-lg-2">Amenities</h2>
                                        <a class="cursor-pointer text-decoration-none text-white d-flex align-items-center justify-content-center fs-15 fw-500 brochure-btn2">
                                            <img src="https://ashapurna.com/images/icons/download-icon-gold.svg" width="15" height="10" alt="Download" class="img-fluid me-2 arrow-gold d-none" />
                                            <img src="https://ashapurna.com/images/icons/download-icon-white.svg" width="15" height="10" alt="Download" class="img-fluid me-2 arrow-white" />E-Brochure</a>
                                    </div>
                                    <div class="row mt-3 d-none d-sm-flex">
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg" height="50" alt="RERA" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">RERA</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="APPROVED">APPROVED</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/15817f06-ef1a-459b-becc-0b68c0b42536-1668412016.svg" height="50" alt="AREA" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">AREA</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="120+ Acres">120+ Acres</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/6e5c01b8-441c-432a-b37c-b78eed34e52b-1668412038.svg" height="50" alt="AVAILABILITY" class="img-fluid" />

                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">AVAILABILITY</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="VILLAS/PLOTS">VILLAS/PLOTS</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/3a90ccb6-de25-494b-a44b-2f734cb3c960-1668412081.svg" height="50" alt="CLUB HOUSE" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">CLUB HOUSE</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="30,000 SQ. FT.">30,000 SQ. FT.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/9ec2ad5a-fce6-4693-a679-b1b26e211dae-1668412118.svg" height="50" alt="SWIMMING" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">SWIMMING</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="POOL">POOL</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/6980f039-dcba-4637-afa4-9612f3211341-1668412155.svg" height="50" alt="10+ GARDEN" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">10+ GARDEN</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="LANDSCAPED">LANDSCAPED</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/8d48223a-d97a-4ccf-9f76-a4a2b24bba16-1668412185.svg" height="50" alt="CCTV" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">CCTV</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="SECURITY SYSTEM">SECURITY SYSTEM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/adbf3d07-6cac-451b-adf4-f20b032e7987-1668412285.svg" height="50" alt="VOLLEYBALL" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">VOLLEYBALL</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="GROUND">GROUND</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/6503c45a-1321-4669-8f63-09e8d29ef57f-1668412312.svg" height="50" alt="BASKETBALL" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">BASKETBALL</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="COURT">COURT</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/798767a6-5b64-4865-9c63-202182832ec1-1668412344.svg" height="50" alt="FOOTBALL" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">FOOTBALL</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="GROUND">GROUND</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/9b26c9c0-19a8-4cd6-88e2-9f063e052851-1668412372.svg" height="50" alt="CRICKET" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">CRICKET</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="GROUND">GROUND</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/d33019b7-90c0-4bb1-9025-349fa8bee03f-1668412412.svg" height="50" alt="TENNIS" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">TENNIS</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="COURT">COURT</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/63d97b0a-d3e0-47b6-9dff-2cab3fc1a303-1668412439.svg" height="50" alt="BADMINTON" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">BADMINTON</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="COURT">COURT</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/0c71d894-215f-4c77-b307-7ab3f3860b20-1668412473.svg" height="50" alt="GYMNASIUM" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">GYMNASIUM</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="AREA">AREA</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/0008a870-ff39-4da8-9068-67a49d8ca73c-1668412587.svg" height="50" alt="YOGA" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">YOGA</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="AREA">AREA</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities amenities-more d-flex align-items-center justify-content-center p-2" title="View All">
                                                <div class="text-center">
                                                    <img src="https://ashapurna.com/images/icons/ellips.svg" height="50" class="img-fluid h-auto" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3 d-flex d-sm-none">
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg" height="50" alt="RERA" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">RERA</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="APPROVED">APPROVED</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/15817f06-ef1a-459b-becc-0b68c0b42536-1668412016.svg" height="50" alt="AREA" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">AREA</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="120+ Acres">120+ Acres</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities d-flex align-items-center p-2">
                                                <div class="me-2">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/6e5c01b8-441c-432a-b37c-b78eed34e52b-1668412038.svg" height="50" alt="AVAILABILITY" class="img-fluid" />
                                                </div>
                                                <div class="text-start">
                                                    <h3 class="fw-500 golden-color fs-16 m-0 line-clamp-1">AVAILABILITY</h3>
                                                    <p class="m-0 fs-15 fw-400 text-color line-clamp-1" title="VILLAS/PLOTS">VILLAS/PLOTS</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-4 col-xl-3 mb-3 mb-lg-4">
                                            <div class="amenities amenities-more d-flex align-items-center justify-content-center p-2" title="View All">
                                                <div class="text-center">
                                                    <img src="/images/icons/ellips.svg" height="50" class="img-fluid h-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-xl-4">
                            <div class="area-info px-lg-4 py-2 px-3 my-lg-4 my-3">
                                <div class="row">
                                    <div class="col-6 col-md-4 col-lg-6 my-2">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/icons/area-line.svg" class="img-fluid me-3" />
                                            <div>
                                                <p class="fs-15 fw-500 text-white m-0">Starting Price</p>
                                                <span class="golden-color lh-30 fs-18 fw-600">Starting from @29* Lakhs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-6 my-2">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/icons/area-line.svg" class="img-fluid me-3" />
                                            <div>
                                                <p class="fs-15 fw-500 text-white m-0">Typology</p>
                                                <span class="golden-color lh-30 fs-18 fw-600">VILLAS/PLOTS</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-6 my-2">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/icons/area-line.svg" class="img-fluid me-3" />
                                            <div>
                                                <p class="fs-15 fw-500 text-white m-0">Bedrooms</p>
                                                <span class="golden-color lh-30 fs-18 fw-600">2-3-4-5 BHK</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-6 my-2">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/icons/area-line.svg" class="img-fluid me-3" />
                                            <div>
                                                <p class="fs-15 fw-500 text-white m-0">Status</p>
                                                <span class="golden-color lh-30 fs-18 fw-600">Possession Soon</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-6 my-2">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/icons/area-line.svg" class="img-fluid me-3" />
                                            <div>
                                                <p class="fs-15 fw-500 text-white m-0">RERA No</p>
                                                <span class="golden-color lh-30 fs-18 fw-600">RAJ/P/2022/2004</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-6 my-2">
                                        <div class="d-flex align-items-center">
                                            <img src="/images/icons/area-line.svg" class="img-fluid me-3" />
                                            <div>
                                                <p class="fs-15 fw-500 text-white m-0">IVR Number</p>
                                                <span class="golden-color lh-30 fs-18 fw-600">+91 9351556747</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="project-form overflow-hidden position-relative ">
                                <h3 class="fs-22 golden-color fw-600 py-2 mb-3 mb-lg-4 position-relative">Get in Touch</h3>
                                <form class="career-form">
                                    <div class="form-group mb-3 mb-lg-4">
                                        <div class="position-relative">
                                            <input type="text" placeholder="Name" class="w-100 fs-16 fw-400" value="" /><img src="https://ashapurna.com/images/icons/name-icon.svg" alt="icon" class="img-fluid position-absolute person-icon" />
                                        </div>
                                    </div>
                                    <div class="form-group mb-3 mb-lg-4">
                                        <div class="position-relative">
                                            <input type="number" placeholder="Mobile number" maxlength="10" class="w-100 fs-16 fw-400" value="" />
                                            <img src="https://ashapurna.com/images/icons/mobile-icon.svg" alt="icon" class="img-fluid position-absolute mobile-icon" />
                                        </div>
                                    </div>
                                    <div class="form-group mb-3 mb-lg-4">
                                        <div class="position-relative">
                                            <input type="email" class="w-100 fs-16 fw-400" placeholder="Email" value="" />
                                            <img src="https://ashapurna.com/images/icons/email-icon.svg" alt="icon" class="img-fluid position-absolute mail-icon" />
                                        </div>
                                    </div>
                                    <div class="form-group position-relative mb-3 mb-lg-4">
                                        <textarea type="text" name="message" class="w-100 fs-16 fw-400 resize-none text-dark" placeholder="Message" rows="4">
                                        </textarea>
                                    </div>
                                    <div class="mb-3 mb-lg-4">
                                        <button class="btn fw-500 text-white fs-16 bg-golden-color w-100" type="button">Enquire Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="master-plan-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="py-lg-4 pe-lg-4">
                                <h2 class="fw-600 fs-35 golden-color position-relative py-2 mb-3">Master Plan</h2>
                                <p class="fs-18 fw-400 lh-30 text-white">Depending on the present and future needs of the residents of the Township, the master plan defines how much area will be allocated to different types of asset classes. The land uses mentioned in the Key-plan further divided into subcategories, creating a long list of land-use types needed for the seamless development and functioning of a township.</p>
                            </div>
                        </div>
                        <div class="col-lg-5 d-flex align-items-center">
                            <div class="w-100 project-slider mb-3 mb-lg-0 text-center">
                                <div class="master-plan-img p-3 p-lg-4 text-center w-100" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/master_plan/a44adde8-2a60-41c9-9879-d5824dd4a7ad-1670494677.webp" alt="Master Plan Image" class="img-fluid m-auto cursor-pointer" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='floor-plan-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 class="fw-600 fs-35 blue-color mb-3">Floor Plan</h2>
                            <div>
                                <div className="project-plan-tabbing">
                                    <div class="floor-tabs mx-auto text-center d-block nav" role="tablist">
                                        <div class="d-inline-block mb-lg-3 mx-2 nav-item">
                                            <a role="tab" data-rr-ui-event-key="67" id="react-aria5922596845-4-tab-67" aria-controls="react-aria5922596845-4-tabpane-67" aria-selected="false" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 nav-link" tabindex="-1" href="#">THE GALAXY (60 X 90)</a>
                                        </div>
                                        <div class="d-inline-block mb-lg-3 mx-2 nav-item">
                                            <a role="tab" data-rr-ui-event-key="73" id="react-aria5922596845-4-tab-73" aria-controls="react-aria5922596845-4-tabpane-73" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 nav-link" href="#">THE VENUS (45 X 60)</a>
                                        </div>
                                        <div class="d-inline-block mb-lg-3 mx-2 nav-item">
                                            <a role="tab" data-rr-ui-event-key="77" id="react-aria5922596845-4-tab-77" aria-controls="react-aria5922596845-4-tabpane-77" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 nav-link" href="#">THE MEADOWS (40 X 60)</a>
                                        </div>
                                        <div class="d-inline-block mb-lg-3 mx-2 nav-item">
                                            <a role="tab" data-rr-ui-event-key="78" id="react-aria5922596845-4-tab-78" aria-controls="react-aria5922596845-4-tabpane-78" aria-selected="true" tabindex="0" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 nav-link active" href="#">THE MANSION (30 X 60)</a>
                                        </div>
                                        <div class="d-inline-block mb-lg-3 mx-2 nav-item">
                                            <a role="tab" data-rr-ui-event-key="79" id="react-aria5922596845-4-tab-79" aria-controls="react-aria5922596845-4-tabpane-79" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 nav-link" href="#">THE OAK (30 X 50)</a>
                                        </div>
                                        <div class="d-inline-block mb-lg-3 mx-2 nav-item">
                                            <a role="tab" data-rr-ui-event-key="80" id="react-aria5922596845-4-tab-80" aria-controls="react-aria5922596845-4-tabpane-80" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 nav-link" href="#">THE ORCHID (30 X 30)</a>
                                        </div>
                                        <div class="d-inline-block mb-lg-3 mx-2 nav-item">
                                            <a role="tab" data-rr-ui-event-key="81" id="react-aria5922596845-4-tab-81" aria-controls="react-aria5922596845-4-tabpane-81" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 nav-link" href="#">THE HEAVEN (25 X 50)</a>
                                        </div>
                                        <div class="d-inline-block mb-lg-3 mx-2 nav-item">
                                            <a role="tab" data-rr-ui-event-key="82" id="react-aria5922596845-4-tab-82" aria-controls="react-aria5922596845-4-tabpane-82" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 nav-link" href="#">THE CRESCENT (20 X 40)</a>
                                        </div>
                                        <div class="d-inline-block mb-lg-3 mx-2 nav-item"><a role="tab" data-rr-ui-event-key="83" id="react-aria5922596845-4-tab-83" aria-controls="react-aria5922596845-4-tabpane-83" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 nav-link" href="#">THE NEST (15 X 30)</a>
                                        </div>
                                    </div>

                                    <div className='py-3 tab-content'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="project-advantages">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="advantage-box shadow-sm">
                                <h2 class="fs-35 fw-600 blue-color text-center">Nearby Landmarks</h2>
                                <div class="mt-3 mt-lg-5 mb-5 mb-lg-3">
                                    <Slider {...landMarkSlider}>
                                        <div class="text-center m-auto mb-lg-3 mb-xl-4" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/64fec4c6-8bac-48be-98b6-30a8a8200122-1669354718.svg" height="50" alt="BHAGAT KI KOTHI RAILWAY STATION" class="w-100 mb-3" />
                                            <h3 class="fs-12 fw-500 text-color mb-1">BHAGAT KI KOTHI RAILWAY STATION</h3>
                                            <p class="fs-18 fw-500 golden-color mb-0 text-uppercase">12 KM</p>
                                        </div>

                                        <div class="text-center m-auto mb-lg-3 mb-xl-4" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/64fec4c6-8bac-48be-98b6-30a8a8200122-1669354718.svg" height="50" alt="BHAGAT KI KOTHI RAILWAY STATION" class="w-100 mb-3" />
                                            <h3 class="fs-12 fw-500 text-color mb-1">BHAGAT KI KOTHI RAILWAY STATION</h3>
                                            <p class="fs-18 fw-500 golden-color mb-0 text-uppercase">12 KM</p>
                                        </div>

                                        <div class="text-center m-auto mb-lg-3 mb-xl-4" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/64fec4c6-8bac-48be-98b6-30a8a8200122-1669354718.svg" height="50" alt="BHAGAT KI KOTHI RAILWAY STATION" class="w-100 mb-3" />
                                            <h3 class="fs-12 fw-500 text-color mb-1">BHAGAT KI KOTHI RAILWAY STATION</h3>
                                            <p class="fs-18 fw-500 golden-color mb-0 text-uppercase">12 KM</p>
                                        </div>

                                        <div class="text-center m-auto mb-lg-3 mb-xl-4" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/64fec4c6-8bac-48be-98b6-30a8a8200122-1669354718.svg" height="50" alt="BHAGAT KI KOTHI RAILWAY STATION" class="w-100 mb-3" />
                                            <h3 class="fs-12 fw-500 text-color mb-1">BHAGAT KI KOTHI RAILWAY STATION</h3>
                                            <p class="fs-18 fw-500 golden-color mb-0 text-uppercase">12 KM</p>
                                        </div>

                                        <div class="text-center m-auto mb-lg-3 mb-xl-4" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/64fec4c6-8bac-48be-98b6-30a8a8200122-1669354718.svg" height="50" alt="BHAGAT KI KOTHI RAILWAY STATION" class="w-100 mb-3" />
                                            <h3 class="fs-12 fw-500 text-color mb-1">BHAGAT KI KOTHI RAILWAY STATION</h3>
                                            <p class="fs-18 fw-500 golden-color mb-0 text-uppercase">12 KM</p>
                                        </div>



                                        <div class="text-center m-auto mb-lg-3 mb-xl-4" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/location_advantage/64fec4c6-8bac-48be-98b6-30a8a8200122-1669354718.svg" height="50" alt="BHAGAT KI KOTHI RAILWAY STATION" class="w-100 mb-3" />
                                            <h3 class="fs-12 fw-500 text-color mb-1">BHAGAT KI KOTHI RAILWAY STATION</h3>
                                            <p class="fs-18 fw-500 golden-color mb-0 text-uppercase">12 KM</p>
                                        </div>



                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='project-villa-section gallery-section bg-white'>
                <div className="container">
                    <div className="row mb-3">
                        <div class="col-12">
                            <h2 class="fs-35 fw-600 blue-color text-center m-0 mb-3">Constructions Updates</h2>
                        </div>
                        <div className='col-12 mb-2 mb-lg-4'>
                            <div class="const-plan-tabbing gallery_sec">
                                <div class="const-tabs text-center mx-auto d-block mt-lg-4 nav" role="tablist">
                                    <div class="d-inline-block mx-2 mb-lg-3 nav-item">
                                        <a role="tab" data-rr-ui-event-key="141" id="react-aria5922596845-5-tab-141" aria-controls="react-aria5922596845-5-tabpane-141" aria-selected="false" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 text-uppercase nav-link" tabindex="-1" href="#">November 2023</a>
                                    </div>
                                    <div class="d-inline-block mx-2 mb-lg-3 nav-item">
                                        <a role="tab" data-rr-ui-event-key="137" id="react-aria5922596845-5-tab-137" aria-controls="react-aria5922596845-5-tabpane-137" aria-selected="true" tabindex="0" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 text-uppercase nav-link active" href="#">October 2023</a>
                                    </div>
                                    <div class="d-inline-block mx-2 mb-lg-3 nav-item">
                                        <a role="tab" data-rr-ui-event-key="133" id="react-aria5922596845-5-tab-133" aria-controls="react-aria5922596845-5-tabpane-133" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 text-uppercase nav-link" href="#">September 2023</a>
                                    </div>
                                    <div class="d-inline-block mx-2 mb-lg-3 nav-item">
                                        <a role="tab" data-rr-ui-event-key="125" id="react-aria5922596845-5-tab-125" aria-controls="react-aria5922596845-5-tabpane-125" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 text-uppercase nav-link" href="#">August 2023</a>
                                    </div>
                                    <div class="d-inline-block mx-2 mb-lg-3 nav-item">
                                        <a role="tab" data-rr-ui-event-key="124" id="react-aria5922596845-5-tab-124" aria-controls="react-aria5922596845-5-tabpane-124" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 text-uppercase nav-link" href="#">July 2023</a>
                                    </div>
                                    <div class="d-inline-block mx-2 mb-lg-3 nav-item">
                                        <a role="tab" data-rr-ui-event-key="120" id="react-aria5922596845-5-tab-120" aria-controls="react-aria5922596845-5-tabpane-120" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 text-uppercase nav-link" href="#">JUNE 2023</a>
                                    </div>
                                    <div class="d-inline-block mx-2 mb-lg-3 nav-item">
                                        <a role="tab" data-rr-ui-event-key="113" id="react-aria5922596845-5-tab-113" aria-controls="react-aria5922596845-5-tabpane-113" aria-selected="false" tabindex="-1" class="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2 text-uppercase nav-link" href="#">MAY 2023</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
