import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Ourteam() {
    return (
        <>
            <Header />

            <section class="container-fluid position-relative aboutBanners outTeam">
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
                                        <span>
                                            OUR TEAM</span>
                                    </div>
                                    <h2 class="golden-color fw-700 fs-35 text-center text-capitalize">Our Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="team-main py-lg-5 py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="team-wrapper mb-60">
                                <h1 class="blue-color fs-35 fw-600 text-center mb-25">Ashapurna Team</h1>
                                <div class="teamContent text-color lh-24 fs-14">
                                    <p className='text-justify'>Shri Karan Singh Uchiyarda, the Founder Chairman &amp; Managing Director of Ashapurna Buildcon, is a man with crystal-clear foresight and strong business acumen. It is his vision that led the company to scale new heights and set new benchmarks of excellence in Jodhpur's real estate scene. Acceptance and popularity of Ashapurna's projects are proof of his passion, skill, and hard work. Besides real estate, Shri Karan Singh Uchiyarda is a known figure in the hospitality sector as well.</p>
                                    <p className='text-justify'>On one hand, Shri Karan Singh Uchiyarda is a respected name in the Jodhpur's business circle, on the other, he is known for giving back to society through his trust Shree Mag Mohan Charitable Trust. His social welfare work includes medical camps, large-scale marriage functions, housing, and other donation for the poor and needy. What's more, in a very unique and commendable CSR initiative, Ashapurna Buildcon provides a free home to a widow in every project which in itself is living proof of Shri Karan Singh Uchiyardas concern towards the less privileged section of society.</p>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <img src="https://ashapurna.com/images/banner/organization-chart3.jpg" class="img-fluid" alt="Our Team Chart" />
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
