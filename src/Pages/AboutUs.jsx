import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import axios from 'axios';
import { BaseUrl } from '../Api/BaseUrl';

export default function AboutUs() {
    let [aboutusImgPath, setAboutusImgPath] = useState('')
    let [projectImgPath, setProjectImgPath] = useState('')

    let [abouUsData, setAboutUsData] = useState({})
    let [projectData, setProjectUsData] = useState([])

    let aboutPageData = () => {
        axios.post(BaseUrl + '/about-us')
            .then((res) => res.data)
            .then((finalRes) => {
                let fData = finalRes._data

                //AboutUs
                setAboutusImgPath(fData.about_us_image_path)
                setAboutUsData(fData.aboutUs)


                //Project 
                setProjectImgPath(fData.project_image_path)
                setProjectUsData(fData.areaWeServes)
            })
    }
    useEffect(() => {
        aboutPageData()
    }, [])
    var aboutMainAreaSlider = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: false
    };
    return (
        <>
            <Header />
            <section class="container-fluid position-relative aboutBanners">
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
                                    <h2 class="golden-color fw-700 fs-35 text-center text-capitalize">About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid aboutusMain'>
                <div className="container">
                    <div className="row">
                        {
                            abouUsData !== undefined
                                ?
                                <>
                                    <div class="col-lg-6">
                                        <div class="aboutMainLeft text-center">
                                            <img src={aboutusImgPath + abouUsData.image} class="img-fluid" alt="Ashapurna Buildcon Corporate Office 3d image" />
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="aboutmain-right pt-4 pt-lg-0 ps-0 ps-lg-3">
                                            <span class="text-uppercase golden-color subtitle subtitle-bgtext position-relative pe-3">{abouUsData.title}</span>
                                            <h1 class="blue-color fw-600 fs-35 mb-10">Welcome to Ashapurna </h1>
                                            <div class="text-color aboutusContent fw-400 lh-24 fs-14">
                                                <p className='text-justify'>Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 40 projects and has delivered 36 projects spanning 75,00,000 square feet, housing more than 25,000 smiling and satisfied faces.</p>
                                                <p className='text-justify'>Under the able leadership of Shri Karan Singh Uchiyarda, Ashapurna Buildcon has spread its wings across top residential projects in Jodhpur, hospitality, education, and entertainment domains, and commercial property in Jodhpur. Shri Karan Singh Uchiyarda gave ‘Comforts Residency Palace’, a renowned 3-star hotel, to Jodhpur, Hotel Ashapurna to Jaipur and another 5-star resort-cum-hotel is coming up at Uchiyarda. In education, the company owns and runs an architecture institute named ‘Buddha Institute’ in Udaipur. In the past few years, Ashapurna Buildcon has proven itself to the Real Estate market of Rajasthan and conveyed itself as one of the
                                                    <a href="">Top 10 Real Estate Companies in Rajasthan</a>.
                                                    In its quest to take the idea of lifestyle to the next level, Ashapurna Buildcon has launched premium budget homes that perfectly blend style and practicality.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="aboutmainFeatures px-3">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-3 col-6">
                                                    <div class="aboutFeatureBlock text-center mb-5 mb-md-0">
                                                        <div class="aboutfeatureIcon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                                                            <img src={aboutusImgPath + abouUsData.year_of_experience_image} alt="Years Of Experience" />
                                                        </div>
                                                        <h4 class="golden-color fs-36 fw-700">
                                                            <div style={{ height: '40px' }}>
                                                                <span>{abouUsData.year_of_experience}</span>
                                                                <span>+</span>
                                                            </div>
                                                        </h4>
                                                        <h6 class="text-white fs-16 text-capitalize">{abouUsData.year_of_experience_heading}</h6>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-6">
                                                    <div class="aboutFeatureBlock text-center mb-5 mb-md-0">
                                                        <div class="aboutfeatureIcon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/villas-completed.svg" alt="Projects Completed" />
                                                        </div>
                                                        <h4 class="golden-color fs-36 fw-700">
                                                            <div style={{ height: '40px' }}>
                                                                <span>{abouUsData.project_completed}</span>
                                                                <span>+</span>
                                                            </div>
                                                        </h4>
                                                        <h6 class="text-white fs-16 text-capitalize">{abouUsData.project_completed_heading}</h6>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-6">
                                                    <div class="aboutFeatureBlock text-center mb-0 mb-md-0">
                                                        <div class="aboutfeatureIcon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/happy.svg" alt="Happy Families" />
                                                        </div>
                                                        <h4 class="golden-color fs-36 fw-700">
                                                            <div style={{ height: '40px' }}>
                                                                <span>{abouUsData.villas_completed}</span>
                                                                <span>+</span>
                                                            </div>
                                                        </h4>
                                                        <h6 class="text-white fs-16 text-capitalize">{abouUsData.villas_completed_heading}</h6>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-6">
                                                    <div class="aboutFeatureBlock text-center mb-0 mb-md-0">
                                                        <div class="aboutfeatureIcon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                                                            <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/units.svg" alt="Units" />
                                                        </div>
                                                        <h4 class="golden-color fs-36 fw-700">
                                                            <div style={{ height: '40px' }}>
                                                                <span>{abouUsData.plots_hand_over}</span>
                                                                <span>+</span>
                                                            </div>
                                                        </h4>
                                                        <h6 class="text-white fs-16">{abouUsData.plots_hand_over_heading}</h6>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>


                                </>
                                :
                                ''
                        }
                        <div className="col-lg-12">
                            <div className="aboutMainArea">
                                <h2 class="text-center blue-color fs-35 fw-600 text-capitalize mb-25">Feature Projects</h2>
                                <div className="aboutMainAreaSlider">

                                    <Slider {...aboutMainAreaSlider}>
                                        {
                                            projectData.map((proData, i) => {
                                                return (
                                                    <div className="col-lg-12">
                                                        <div className="ashaBussiCardWrap">
                                                            <div className="ashaTabCont">
                                                                <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                                    <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                                        <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">{proData.current_status}</div>
                                                                        <div class="imgBox">
                                                                            <a href="/residential/ashapurna-sheoganj">
                                                                                <img src={projectImgPath + proData.project_logo_1} alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                                            <div class="d-flex align-items-center mb-2">
                                                                                <div class="rounded">
                                                                                    <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src={projectImgPath + proData.project_logo_2} height="30" alt="Ashapurna Sheoganj" />
                                                                                    </a>
                                                                                </div>
                                                                                <h3 class="fs-16 ms-2 mb-0">
                                                                                    <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">{proData.name}</a>
                                                                                </h3>
                                                                            </div>
                                                                            <p class="fs-13 m-0 p-0">
                                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                                    <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                                                </svg>
                                                                                {proData.address}</p>
                                                                            <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                                                <span>
                                                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                                        <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                                    </svg>
                                                                                    {proData.current_status}</span>
                                                                                <a class="projectTag fs-13 cursor-pointer" href="/residential/ashapurna-sheoganj">See All</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container-fluid missionVisionMain">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="ourMission bg-white py-3 py-lg-0 me-lg-1 mb-3 mb-lg-0">
                                <div class="m-0 align-items-center row">
                                    <div class="p-0 col-lg-4">
                                        <div class="ourmission-image mb-3 mb-lg-0 text-center">
                                            <img src={aboutusImgPath + abouUsData.our_vision_image} alt="Our Vision" class="img-fluid" />
                                        </div>
                                    </div>
                                    <div class="pe-0 col-lg-8">
                                        <div class="ourmissionContent d-flex py-lg-3 py-xl-0 align-items-center h-100">
                                            <div class="ps-2 pe-1">
                                                <h3 class="light-blue-color position-relative fs-22 fw-600 text-uppercase">{abouUsData.our_vision_title}</h3>
                                                <div class="text-color fw-400 mb-0 lh-24 fs-14">
                                                    <div dangerouslySetInnerHTML={{ __html: abouUsData.our_vision_description }}></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="ourMission bg-white py-3 py-lg-0 ms-lg-1 mb-3 mb-lg-0">
                                <div class="m-0 align-items-center row">
                                    <div class="p-0 col-lg-4">
                                        <div class="ourmission-image mb-3 mb-lg-0 text-center">
                                            <img src={aboutusImgPath + abouUsData.our_mission_image} alt="Our Mission" class="img-fluid" />
                                        </div>
                                    </div>
                                    <div class="pe-0 col-lg-8">
                                        <div class="ourmissionContent d-flex py-lg-3 py-xl-0 align-items-center h-100">
                                            <div class="ps-2 pe-1">
                                                <h3 class="light-blue-color position-relative fs-22 fw-600 text-uppercase">{abouUsData.our_mission_title}</h3>
                                                <div class="text-color fw-400 mb-0 lh-24 fs-14">
                                                    <div dangerouslySetInnerHTML={{ __html: abouUsData.our_mission_description }}></div>

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

            <section class="ourAchievementMain">
                <div class="container">
                    <div class="row">
                        <div class="ms-auto col-lg-7 col-md-8">
                            <div class="achievementContent bg-white position-relative p-4">
                                <h3 class="blue-color fw-600 mb-3">{abouUsData.our_achievement_title}</h3>
                                <div class="lh-24 fs-14 text-color">
                                    <div dangerouslySetInnerHTML={{ __html: abouUsData.our_achievement_description }}></div>
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
