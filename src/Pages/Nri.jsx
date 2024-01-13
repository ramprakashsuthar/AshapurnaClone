import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Nri() {
    return (
        <>
            <Header />

            <section class="container-fluid position-relative aboutBanners nri">
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
                                            NRI CORNER</span>
                                    </div>
                                    <h2 class="golden-color fw-700 fs-35 text-center text-capitalize">NRI Corner</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="nriCorner-main ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="nricorner-heading">
                                <h1 class="text-uppercase text-center fs-35 fw-600 blue-color">NRI</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="h-100 partner-formleft my-2">
                                <div class="">
                                    <span class="text-uppercase golden-color subtitle position-relative pe-3">NRI</span>
                                    <h2 class="blue-color fw-600 fs-30 mb-15">NRI Clients <span class="golden-color"> Corner</span>
                                    </h2>
                                    <div class="text-color lh-24 fs-14 pe-lg-4">
                                        <p>A non-resident Indian (NRI) is a citizen of India who holds an Indian passport and has temporarily emigrated to another country for six months or more for employment, residence, education or any other such purpose. A person of Indian origin (PIO) is a person of Indian origin or ancestors but who is not a citizen of India and is the citizen of another country. A PIO might have been a citizen of India and subsequently taken citizenship of another country, or have ancestors born in India or other states. Other terms with vaguely the same meaning are overseas Indian and expatriate India. In common usage, this often includes Indian-born individuals (and also people of other nations with Indian ancestors) who have taken the citizenship of other countries. As per the Ministry of Overseas Indian Affairs, India has the second largest diaspora in the world after overseas Chinese. The overseas Indian community is estimated at 25 million spread across every region of the world.</p>
                                        <h3>Investment destination: India</h3>
                                        <p>In recent times, India has emerged as one of the popular real estate destinations for global investors. Real estate is one of the booming industries in the country and investment in property is promising and set to flourish in the times to come. It is expected to scale new heights with the emergence of fresh localities in tier-I and II cities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="contact-form p-4 position-relative overflow-hidden w-100">
                                    <h2 class="blue-color fs-26 text-capitalize">NRI ENQUIRY</h2>
                                    <p class="text-color lh-30 fs-16">Please fill in the form and we would contact you at the earliest.</p>
                                    <form class="careeruiryModal-form career-form mt-lg-4">
                                        <div class="mb-4">
                                            <div class="outlined-input">
                                                <input type="text" name="nriname" id="nriname" class="w-100" placeholder=" " value="" />
                                                <label>Name</label>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <div class="outlined-input">
                                                <input type="number" name="nriphone" id="nriphone" class="w-100" placeholder=" " maxlength="10" value="" />
                                                <label>Phone</label>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <div class="outlined-input">
                                                <input type="email" name="nriemail" id="nriemail" class="w-100" placeholder=" " value="" />
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <div class="outlined-input">
                                                <textarea name="nrimessage" id="nrimessage" class="w-100 resize-none" placeholder=" " rows="3">
                                                </textarea>
                                                <label>Message</label>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="button-golden btn btn-primary">SUBMIT</button>
                                        </div>
                                    </form>
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
