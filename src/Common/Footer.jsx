import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='container-fluid pb-45 pt-50 bg-light-blue-color'>
                <div className="container">
                    <div className="row">
                        <div class="col-xl-4 col-lg-5 col-md-6">
                            <div class="footerLeftWrapper h-100 mb-4 mb-lg-0 position-relative">
                                <a href="/">
                                    <span className='footerFirstSpan'>
                                        {/* <span>
                                            <img alt="" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2773%27/%3e" />
                                        </span> */}
                                        <img alt="Ashapurna" src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/footer_logo/ffe726b1-c8b0-4798-8c89-ebad0cb7ebf3-1673702923.svg" />
                                    </span>
                                </a>
                                <div class="contactInfo ps-2 ps-lg-4">
                                    <div class="contactInfoBlock d-flex align-items-center mb-3">
                                        <div class="contactIcon d-flex justify-content-center align-items-center text-white fs-20 rounded-1">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                                            </svg>
                                        </div>
                                        <div class="fs-16 ms-2">
                                            <a class="text-decoration-none fw-400 d-block text-white" href="tel:9314041747">9314041747</a>
                                            <a class="text-decoration-none d-block fw-400 text-white" href="tel:0291-2514747, 9610383747">0291-2514747, 9610383747</a>
                                        </div>
                                    </div>
                                    <div class="contactInfoBlock d-flex align-items-center mb-3">
                                        <div class="contactIcon d-flex justify-content-center align-items-center p-3 text-white rounded-1">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open" class="svg-inline--fa fa-envelope-open fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="fs-16 ms-2 me-lg-4">
                                            <a class="text-decoration-none fw-400 d-block text-white" target="_blank" href="mailto:marketing@ashapurna.com">marketing@ashapurna.com</a>
                                        </div>
                                    </div>
                                    <div class="contactInfoBlock d-flex align-items-center mb-3">
                                        <div class="contactIcon d-flex justify-content-center align-items-center p-3 text-white rounded-1">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="fs-16 ms-2 me-lg-4">
                                            <a class="text-decoration-none fw-400 d-block text-white" target="_blank" href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d457918.34401696065!2d73.037212!3d26.278306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35b840646df082cc!2sAshapurna%20Buildcon%20Ltd%20Corporate%20office!5e0!3m2!1sen!2sus!4v1674640627695!5m2!1sen!2sus">-, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD,
                                                OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-8 col-lg-7 col-md-6">
                            <div class="footerRightWrapper ps-2 ps-lg-0 mb-2">
                                <h4 class="fw-500 fs-20 text-white position-relative mb-25">Useful Links</h4>

                                <div class="d-flex align-item-center flex-wrap mb-25">
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Residental Projects</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/commercial">Commercial projects</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/invester-club">Investors Club</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/nri-corner">NRI corner</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/career">Career</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/become-a-partner">Become a Partner</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/testimonials">Our Testimonials</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/privacy-policy">Privacy Policy</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/terms-and-conditions">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                                <h4 class="fw-500 fs-20 text-white position-relative mb-25">Important Links</h4>
                                <div class="d-flex align-item-center flex-wrap">
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/csr-social-responsibility">Social Responsibility</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey cursor-pointer">Corporate Profile</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/why-invest-in-jodhpur">Why invest in jodhpur?</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/rera-disclaimer">RERA Disclaimer</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/emi-calculator">EMI Calculator</a>
                                    </div>
                                    <div class="usefulLinks mb-2">
                                        <a class="text-capitalize fw-400 fs-16 light-grey" href="/referral-scheme">referral Scheme</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="divider">
                                <hr class="dividerLine mx-auto my-0" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="mx-auto d-flex justify-content-center col-xl-3 col-lg-4 col-md-6">
                            <div class="footerSocialWrapper pt-25">
                                <h4 class="fw-700 fs-20 text-white mb-3 text-center">Follow Us On</h4>
                                <div class="d-flex align-items-center flex-wrap">
                                    <div class="sociaBlock d-flex justify-content-center align-items-center me-2">
                                        <a class="blue-color fs-14" title="Facebook" target="_blank" href="https://www.facebook.com/AshapurnaBuildconLtd">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="svg-inline--fa fa-facebook-f fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="sociaBlock d-flex justify-content-center align-items-center me-2">
                                        <a class="blue-color fs-14" title="Instagram" target="_blank" href="https://www.instagram.com/ashapurnabuildconltd/">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="sociaBlock d-flex justify-content-center align-items-center me-2">
                                        <a class="blue-color fs-14" title="Youtube" target="_blank" href="https://www.youtube.com/AshapurnaBuildconLtd">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="sociaBlock d-flex justify-content-center align-items-center me-2">
                                        <a class="blue-color fs-14" title="Twitter" target="_blank" href="https://twitter.com/ashapurnabl">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="sociaBlock d-flex justify-content-center align-items-center me-2">
                                        <a class="blue-color fs-14" title="Pinterest" target="_blank" href="https://in.pinterest.com/ashapurnabuildconltd/">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pinterest-p" class="svg-inline--fa fa-pinterest-p fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path fill="currentColor" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="sociaBlock d-flex justify-content-center align-items-center me-2">
                                        <a class="blue-color fs-14" title="Linkedin" target="_blank" href="https://www.linkedin.com/company/ashapurnabuildconltd/">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div></div>
                        <div class="d-none col-xl-9 col-lg-8 col-md-6">
                            <div class="subscribe-wrapper ps-2 ps-lg-0 pt-25 pe-3">
                                <div class="border bg-white rounded-2 px-3 py-4">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="subscribe-heading position-relative">
                                                <p class="fw-600 blue-color mb-2 mb-lg-0">Get More Update Join Our Newsletter</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-9">
                                            <div class="subscribe-form">
                                                <form class="">
                                                    <div class="input-group">
                                                        <input name="subscribemail" placeholder="Enter Your Email" aria-label="Enter Your Email" type="email" id="subscribemail" class="fs-20 fw-400 rounded-1 inputHolder form-control form-control-lg" />
                                                        <span class="bg-golden-color cursor-pointer input-group-text" id="subscribemail" title="Subscribe Now">
                                                            <span class="text-white fs-4">
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                    <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                                                    </path>

                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid bg-light-golden-color pt-35 pb-20 footer-middle">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center d-flex flex-wrap justify-content-start justify-content-lg-center align-items-center">
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/">real estate developer in jodhpur</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/">top builders in jodhpur</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/residential">top residental projects in jodhpur</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/commercial">Commercial property in jodhpur</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/houses-in-rajasthan">Houses in Rajasthan</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/flats-in-jodhpur">Flats In Jodhpur</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/villas-in-jodhpur">Villas In Jodhpur</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/plots-in-jodhpur">Plots In Jodhpur</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/2bhk-flats-in-jodhpur">2BHK Flats In Jodhpur</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/jda-property-in-jodhpur">JDA Property In Jodhpur</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/property-type">Property Type</a>
                                </div>
                                <div class="m-2 text-capitalize footerLinks position-relative">
                                    <a class="blue-color-2 fw-400" href="/hospitality">Properties in jodhpur</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="divider my-4">
                                <hr class="divider-line-2 mx-lg-auto" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="text-lg-center text-start fw-400 blue-color-2 fs-14 px-2 px-lg-5 lh-30 mb-0">
                                <p>The information on the website regarding the project, except the legal documents, is purely indicative and representational and do not constitute a promise by the company. Further, the Company/Architects reserve the right to add / delete any details / specifications / elevations mentioned, if so warranted.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-dark-golden-color pt-15 pb-15 copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="mb-0 text-black fs-16">Copyright © 2023 Ashapurna Buildcon Limited</p>
                        </div>
                        <div class="col-md-6">
                            <p class="mb-0 text-black copyright-company fs-16 text-md-end">Design and Developed by<a class="text-black" href="https://www.yanatechnology.com/" target="blank">Yana Technology</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
