import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import axios from 'axios';
import { BaseUrl } from '../Api/BaseUrl';
// import YourImage from '../image/download';

export default function Home() {
    let [slideImgPath, setSlideImgPath] = useState('')
    let [aboutImgPath, setAboutImgPath] = useState('')
    let [whyImgPath, setWhyImgPath] = useState('')
    let [featureImgPath, setFeatureImgPath] = useState('')
    let [aminityImgPath, setAminityImgPath] = useState('')
    let [projectImgPath, setProjectImgPath] = useState('')
    let [testimonialImgPath, setTestimonialImgPath] = useState('')
    let [mediaImgPath, setMediaImgPath] = useState('')





    let [siderData, setSliderData] = useState([])
    let [aboutData, setAboutData] = useState({})
    let [whyData, setWhyData] = useState([])
    let [featureData, setFeatureData] = useState([])
    let [projectData, setProjectData] = useState([])
    let [testimonialData, setTestimonialData] = useState([])
    let [mediaData, setMedialData] = useState([])







    let homePageData = () => {
        axios.post(BaseUrl + '/home')
            .then((res) => res.data)
            .then((finalRes) => {
                let fData = finalRes._data;

                //Slider Data
                setSlideImgPath(fData.slider_image_path)
                setSliderData(fData.getSliders)

                //Aboutus data
                setAboutImgPath(fData.about_us_image_path)
                setAboutData(fData.aboutUs)

                //why ashapurna
                setWhyImgPath(fData.why_choose_us_image_path)
                setWhyData(fData.getWhyChooseUs)

                //feature
                setFeatureImgPath(fData.project_image_path)
                setFeatureData(fData.getFeaturedProjects)
                setAminityImgPath(fData.amenities_image_path)

                //project
                setProjectData(fData.getProjects)
                setProjectImgPath(fData.project_image_path)

                //testimonial
                setTestimonialImgPath(fData.testimonial_image_path)
                setTestimonialData(fData.getTestimonials)

                //media event
                setMediaImgPath(fData.utsav_camps_image_path)
                setMedialData(fData.getUtsavCamps)
                console.log(fData.getUtsavCamps)


            })
    }

    useEffect(() => {
        homePageData()
    }, [])


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    var projectSlider = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
    };
    var projectBussinessSlider = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: false
    };
    var testimonialSlider
        = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
    };
    var medialSlider
        = {
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
            <div className="container">
                <Slider {...settings}>
                    {siderData.length >= 1 ?
                        siderData.map((items, i) => {
                            return (
                                <div>
                                    <img src={slideImgPath + items.image} alt="" className='img-fluid' />
                                </div>
                            )
                        })

                        :
                        ''
                    }


                </Slider>

                <div class="homeEnquiry d-none d-lg-block bg-white mx-auto">
                    <div class="w-100 homeEnquiryInner ">

                        <form class="searchForm">
                            <div class="justify-content-center align-items-end row">
                                <div class="mb-1 mb-lg-0 col">
                                    <input placeholder="Name" name="searchname" type="text" id="searchname" class="rounded-1 fs-16 form-control form-control-lg" value="" />
                                </div>
                                <div class="mb-1 mb-lg-0 col">
                                    <input placeholder="Email" name="searchemail" type="email" id="searchemail" class="rounded-1 fs-16 form-control form-control-lg" value="" />
                                </div><div class="mb-1 mb-lg-0 col">
                                    <input placeholder="Phone" name="searchphone" maxlength="10" type="number" id="searchphone" class="rounded-1 fs-16 form-control form-control-lg" value="" />
                                </div>
                                <div class="mb-1 mb-lg-0 col">
                                    <select class="rounded-1 fs-16 text-black fs-16 form-select form-select-lg">
                                        <option>Select Property</option>
                                        <option value="48">Ashapurna Mohan Bagh</option>
                                        <option value="47">Ashapurna Girls Hostel Mumbai</option>
                                        <option value="43">Buddha Institutions</option>
                                        <option value="40">Ashapurna Clarks Inn</option>
                                        <option value="38">Ashapurna NRI</option>
                                        <option value="33">Ashapurna Crown Plaza</option>
                                        <option value="41">Hotel Residency Palace</option>
                                        <option value="34">Ashapurna Mall</option>
                                        <option value="7">Ashapurna Heritage</option>
                                        <option value="45">Ashapurna Kundan Villa</option>
                                        <option value="42">Ashapurna Palace</option>
                                        <option value="37">Ashapurna Pachpadra</option>
                                        <option value="35">Ashapurna Corporate Office</option>
                                        <option value="29">Ashapurna Anmol I,II,III</option>
                                        <option value="32">Ashapurna Aangan</option>
                                        <option value="27">Ashapurna Basera II Phase</option>
                                        <option value="31">Ashapurna Sheoganj</option>
                                        <option value="21">Ashapurna Nanomax II</option>
                                        <option value="10">Ashapurna Paradise</option>
                                        <option value="15">Ashapurna Empire</option>
                                        <option value="14">Ashapurna Aangan Prime</option>
                                        <option value="8">Ashapurna Platinum</option>
                                        <option value="6">Ashapurna Tower</option>
                                        <option value="30">Ashapurna City</option>
                                        <option value="17">Ashapurna Nano Plaza</option>
                                        <option value="19">Chandan Vihar</option>
                                        <option value="23">Ashapurna Valley</option>
                                        <option value="26">Ashapurna Golden Valley</option>
                                        <option value="28">Ashapurna Nagar</option>
                                        <option value="24">Ashapurna Nano Avenue</option>
                                        <option value="22">Ashapurna Sanchore</option>
                                        <option value="20">Ashapurna Jalore</option>
                                        <option value="18">Ashapurna Township Uchiyarda</option>
                                        <option value="16">Ashapurna Basera</option>
                                        <option value="9">Ashapurna Enclave</option>
                                        <option value="25">Ashapurna Enclave II</option>
                                    </select>
                                </div>
                                <div class="mb-1 mb-lg-0 col">
                                    <input placeholder="Explain Your Query" name="searchquery" type="text" id="searchquery" class="rounded-1 fs-16 form-control form-control-lg" value="" />
                                </div>
                                <div class="mb-1 mb-lg-0 col-lg-12 col-xl-auto col">
                                    <button type="button" class="bg-golden-color fw-400 w-100 rounded-1 border-0 text-white fs-18 btn btn-primary btn-lg">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

            <section className='container-fluid outerSection about'>
                <div className="container aboutInner">
                    <div className="row">
                        {
                            aboutData !== undefined
                                ?

                                <>
                                    <div className="col-lg-5">
                                        <figure>
                                            <img src={aboutImgPath + aboutData.homepage_image} alt="" className='img-fluid' />
                                        </figure>
                                    </div>
                                </>
                                :
                                ''
                        }

                        <div className="col-lg-7">
                            <aside>
                                <h4>{aboutData.homepage_title}</h4>
                                <h1>{aboutData.homepage_tagline}</h1>
                                <div className="aboutPeras">
                                    <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>
                                    <p>In a relatively short period of time, Ashapurna has grown and gained a trustworthy real estate name in the entire Rajasthan. The company always tried hard to deliver everything best to its customers and built all their categories-Luxury, Mix segments, and affordable homes.</p>
                                </div>

                                <div className="aboutUsFeature">
                                    <div className="row">
                                        <div className="col">
                                            <div className="feature ">
                                                <div className="featureIcon">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/experience-check.png" alt="" className='img-fluid' />
                                                </div>
                                                <div className="featuresNum">
                                                    <span>26</span>
                                                    <span>+</span>
                                                </div>
                                                <p>Years Of Experience</p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="feature ">
                                                <div className="featureIcon">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/property.svg" alt="" className='img-fluid' />
                                                </div>
                                                <div className="featuresNum">
                                                    <span>40</span>
                                                    <span>+</span>
                                                </div>
                                                <p>Project</p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="feature ">
                                                <div className="featureIcon">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/happy.png" alt="" className='img-fluid' />
                                                </div>
                                                <div className="featuresNum">
                                                    <span>26000</span>
                                                    <span>+</span>
                                                </div>
                                                <p>Happy Families</p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="feature ">
                                                <div className="featureIcon">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/measuring-tape.png" alt="" className='img-fluid' />
                                                </div>
                                                <div className="featuresNum">
                                                    <span>36</span>
                                                    <span>+</span>
                                                </div>
                                                <p>Lakh Sq.Ft Delivered</p>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="feature ">
                                                <div className="featureIcon">
                                                    <img src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/units.png" alt="" className='img-fluid' />
                                                </div>
                                                <div className="featuresNum">
                                                    <span>11000</span>
                                                    <span>+</span>
                                                </div>
                                                <p>Units</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid outerSection whyAsha'>
                <div className='container whyAshaInner'>
                    <div className="row">
                        <div className="d-flex align-items-center col-lg-4">
                            <div className="whyAshaLeft">
                                <span className="text-uppercase subtitle position-relative pe-3">WHY US</span>
                                <h1 className="mb-2 text-capitalize">Why Ashapurna Is The Best Choice</h1>
                                <p className="">Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="whyAshaRight">
                                <div className="whyAshaBlockWrap">
                                    <div className="row">
                                        {whyData.length >= 1

                                            ?
                                            whyData.map((whyItem, i) => {
                                                return (
                                                    <div className="col-lg-6">
                                                        <div className="whyAshaBlock">
                                                            <span>
                                                                <img src={whyImgPath + whyItem.image} width="60" alt="Property Care Service" />

                                                            </span>
                                                            <div class="emptyBlock position-absolute"></div>
                                                            <h3 class="fw-600 mt-3 fs-24 mb-15">{whyItem.title}</h3>
                                                            <div class="titleUnderline"></div>
                                                            <p>{whyItem.short_description}</p>
                                                            <div class="readMore">
                                                                <span class="cursor-pointer golden-color">Read More</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                            :
                                            ''
                                        }



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid outerSection ashaProject'>
                <div className='container innerSection ashaProjectInner'>
                    <div className="row">
                        <div className="col-lg-12">
                            <span class="text-uppercase golden-color subtitle position-relative pe-3">OUR WORK</span>
                            <div class="d-flex ashaProjectsHeading flex-wrap justify-content-between align-items-center">
                                <h2 class="text-capitalize fw-600 text-white fs-35">Featured Projects</h2>
                            </div>
                        </div>

                        <Slider {...projectSlider}>
                            {featureData.length >= 1
                                ?
                                featureData.map((featue, i) => {
                                    return (
                                        <div className="ashaPurnaProjectSlider">
                                            <div className="col-lg-12">
                                                <div className="ashaProjectSlider">
                                                    <div className="row mb-4">
                                                        <div className="col-lg-5 col-xl-6 mx-auto">
                                                            <div class="mb-4 mb-xl-0 mx-auto d-flex justify-content-center">
                                                                <div class="position-relative">
                                                                    <img src={featureImgPath + featue.homepage_image} alt="Ashapurna Kundan Villa" className='img-fluid' />
                                                                    <div class="position-absolute top-0 start-0 ms-2 mt-2">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-7 col-xl-6 px-md-3">
                                                            <div className="row">
                                                                <div className="mx-auto col-xl-12 col-lg-12">
                                                                    <div class="ashaProLeft">

                                                                        <div class="d-flex align-items-center">
                                                                            <img src={featureImgPath + featue.project_logo_2} alt="Ashapurna Kundan Villa" height="50" />
                                                                            <h2 class="text-capitalize fw-500 fs-30 mb-0 ms-2">
                                                                                <a href="/residential/ashapurna-kundan-villa">Ashapurna Kundan Villa</a>
                                                                            </h2>
                                                                        </div>
                                                                        <div class=" text-white lh-24 fs-14 line-clamp-4 mt-3 mb-4">Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...</div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div class="row">
                                                                {featue.amenities.slice(0, 3).map((aminity, i) => {
                                                                    return (
                                                                        <div class="col-xl-4 col-md-4 col-sm-4 col-6">
                                                                            <div class="facilityBlocks d-flex align-items-start ">
                                                                                <div class="facilityIcon me-2 me-md-3">
                                                                                    <img src={aminityImgPath + aminity.image} width="36" alt="SWIMMING" />
                                                                                </div>
                                                                                <div class="facilityIconContent">
                                                                                    <h4 class="golden-color mb-1">{aminity.title}</h4>
                                                                                    <span class="text-white">{aminity.sub_title}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}


                                                                <div class="col-12 mb-3">
                                                                    <a class="bgColor text-white rounded py-2 px-3" href="/residential/ashapurna-kundan-villa">See All</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })

                                :
                                ''
                            }

                        </Slider>

                    </div>
                </div>
            </section>

            <section className='container-fluid outerSection ashaBussiness'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-8">
                            <span class="text-uppercase golden-color subtitle position-relative pe-3">PROJECT OVERVIEW</span>
                            <div class="d-flex ashaProjectsHeading flex-wrap justify-content-between align-items-center">
                                <h2 class="text-capitalize fw-600 fs-35 blueColor">Ready & Nearing Completion Projects</h2>
                                <p class="fw-400 textColor lh-24 fs-14">Meticulously crafted and emotionally designed, Ashapurna homes are the perfect place to be in. A lifestyle benchmark in Rajasthan, today and tomorrow, our successful communities are our biggest achievement.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <Slider {...projectBussinessSlider}>
                            {
                                projectData.length >= 1
                                    ?
                                    projectData.map((proj, i) => {
                                        return (
                                            <div className="col-lg-12">
                                                <div className="ashaBussiCardWrap">
                                                    <div className="ashaTabCont">
                                                        <div class="px-1 pb-xl-3 pt-2" tabindex="-1">
                                                            <div class="ourProjectCard p-2 bg-white shadow rounded position-relative mb-3">
                                                                <div class="position-absolute text-white shadow d-flex align-items-center rounded buisnesStatus">Few Units Left</div>
                                                                <div class="imgBox">
                                                                    <a href="/residential/ashapurna-sheoganj">
                                                                        <img src={projectImgPath + proj.project_logo_1} alt="Ashapurna Township Sheoganj Project image" class="img-fluid rounded" height="320" />
                                                                    </a>
                                                                </div>
                                                                <div class="position-absolute bg-white shadow-sm projectCardInner rounded text-start">
                                                                    <div class="d-flex align-items-center mb-2">
                                                                        <div class="rounded">
                                                                            <a class="cursor-pointer" href="/residential/ashapurna-sheoganj"><img src={projectImgPath + proj.project_logo_2} height="30" alt="Ashapurna Sheoganj" />
                                                                            </a>
                                                                        </div>
                                                                        <h3 class="fs-16 ms-2 mb-0">
                                                                            <a class="light-blue-color fw-600 cursor-pointer" href="/residential/ashapurna-sheoganj">{proj.name}</a>
                                                                        </h3>
                                                                    </div>
                                                                    <p class="fs-13 m-0 p-0">
                                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 me-2 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16">
                                                                            <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                                        </svg>
                                                                        {proj.address}</p>
                                                                    <div class="fs-14 d-flex align-items-center justify-content-between projectInnerBottom">
                                                                        <span>
                                                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18 me-1 blue-color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
                                                                                <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                                                                            </svg>
                                                                            {proj.current_status}</span>
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
                                    :
                                    ''
                            }


                        </Slider>
                    </div>
                </div>
            </section>

            <section className='container-fluid outerSection testimonials'>
                <div className='container '>
                    <div className="row">
                        <div class="d-flex align-items-center col-xl-4 col-lg-5">
                            <div class="testimonialLeft">
                                <div class="clearfix">
                                    <span class="text-uppercase golden-color subtitle position-relative pe-3">OUR TESTIMONIALS</span>
                                    <h3 class="text-white mt-2">What They're Saying About Ashapurna</h3>
                                    <p class="text-white pe-4 mt-4 mb-0 mb-md-4">From the heart of South Mumbai to the western suburbs and beyond take your pick from our finest addresses in the city. Select a location to view the property.</p>
                                    <div class="d-none d-lg-block">
                                        <a class="button-golden float-start" href="/testimonials">See All</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-7 col-lg-7 offset-xl-1'>
                            <Slider {...testimonialSlider}>
                                {testimonialData.map((testi, i) => {
                                    return (
                                        <div className='testimonialRight position-relative'>

                                            <div class="testimonialBlock position-relative bg-white pb-5 px-2 px-lg-5">
                                                <div class="d-flex mb-0 mb-md-4">
                                                    <div class="testimonialImage position-relative me-2 me-lg-4">
                                                        <img src={testimonialImgPath + testi.image} class="img-fluid rounded-circle" alt="Mr Damodar Prajapat" />
                                                    </div>
                                                    <div class="testimonialInfo pt-3">
                                                        <h5 class="golden-color text-capitalize mb-1">{testi.name}</h5>
                                                        <span class="text-color d-block mb-1">{testi.position}</span>
                                                    </div>
                                                </div>
                                                <div class="blueColor-2 fw-400 fs-15 lh-24">{testi.message}</div>
                                                <div class="testimonialQuotes position-absolute end-0 bottom-0 me-3 mb-2">
                                                    <span>
                                                        <span>
                                                            <img alt="" />
                                                        </span>
                                                        <img alt="Quotes" src="images/icons/quotes.png" />

                                                    </span>
                                                </div>
                                            </div>


                                        </div>
                                    )
                                })}

                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid outerSection mediaEvent'>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="instagramHeading d-flex flex-wrap justify-content-between align-items-center mb-3">
                                <h2 class="text-capitalize fw-600 blue-color mb-0 fs-35">Media and Event</h2>
                                <div class="d-md-block">
                                    <a class="button-light-blue" href="/media-and-events">See All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-12 '>
                            <Slider {...medialSlider}>

                                {
                                    mediaData.map((media, i) => {
                                        return (
                                            <div class="projects-wrapper pb-2 bg-white h-100" >
                                                <div class="text-center position-relative">
                                                    <img src={mediaImgPath + media.image} class="img-fluid ashapaImg" alt={media.alt_image_text} />
                                                    <div class="projectHeading ps-2 ps-lg-3 position-relative ">
                                                        <h3 class="text-start my-3">
                                                            <a class="light-blue-color fw-600 cursor-pointer fs-17 line-clamp-1" href="">{media.title}</a>
                                                        </h3>
                                                        <ul class="list-unstyled m-0 text-start">
                                                            <li class="fs-14 text-color mb-2 line-clamp-1">
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 fs-15 golden-color me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="15">
                                                                    <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                                </svg>
                                                                <span>{media.location}</span>
                                                            </li>
                                                            <li class="fs-14 text-color mb-2">
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" class="svg-inline--fa fa-clock fa-w-16 fs-15 golden-color me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15">
                                                                    <path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z">
                                                                    </path>
                                                                </svg>
                                                                <span>{media.date}</span>
                                                            </li>
                                                        </ul>
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
            </section>
            <Footer />
        </>
    )
}
