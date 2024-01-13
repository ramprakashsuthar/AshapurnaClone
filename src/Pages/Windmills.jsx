import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Windmills() {
  return (
    <>
      <Header />

      <section class="container-fluid position-relative aboutBanners windmills">
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
                      WINDMILLS PROJECTS</span>
                  </div>
                  <h2 class="golden-color fw-700 fs-35 text-center text-capitalize">Windmills Projects</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="news-letter">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="team-wrapper">
                <div class="align-items-center windmills-inner row">
                  <div class="col-lg-5">
                    <img src="https://ashapurna.com/images/sections/wind-mill.webp" alt="Windmills Project Image" class="img-fluid" />
                  </div>
                  <div class="col-lg-7">
                    <div class="text-color lh-40">
                      <h1 class="blue-color fw-600">Windmills Projects</h1>
                      <p class="mt-3 mt-md-0 lh-24 fs-14 mb-0">Ashapurna buildcon limited is rapidly growing towards windmill projects because we believe in environment-friendly development that’s why Windmill Project in India are best suited to fulfill our daily electricity needs. Although we all know what is windmills and how it works to generate electricity through nature wind power. Another reason, Why Ashapurna Buildcon Limited is actively working to start our windmill projects because of the geographical location of Rajasthan. Rajasthan is the state where the velocity of winds is high and that’s why these high-velocity winds are useful to move the propeller of windmill so that it can generate electricity.</p>
                    </div>
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
