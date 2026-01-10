import React from 'react'
import CustomHeader from '../components/CustomHeader'

function Magnize() {

    const data =
    {
        heading: 'Roger That - Our monthly magazine',
        text: 'Our monthly magazine Roger That is your go- to resource for in -depth insights, real - world perspectives, and expert analysis tailored to the Services Selection Board(SSB) process.Curated with a strong focus on current affairs, the magazine features probable Group Discussion and Lecturette topics, helping aspirants stay informed, articulate, and assessment - ready',
        textTwo: ` We’re not just an academy, we’re a close-knit mentoring community. At CSJSA, every aspirant is personally guided by Lt Cdr Nikhil, whose experience assessing over 12,500 SSB candidates shapes our focused,
                                psychology-driven approach to SSB preparation. Our goal is simple yet powerful: to help every deserving young aspirant realise the dream of becoming a commissioned officer in the Indian Armed Forces.`

    }

    return (
        <>




            {/* <section className="breed-section" style=" background-image: url(/assets/img/about/about-breed.webp);">

                <div className="breed-overlay"></div>

                <div className="breed-content container">
                    <div className="col-12 row mx-auto">
                        <div className="col-xl-10">
                            <h1 className="breed-title"></h1>

                            <p className="breed-subtitle">
                            </p>

                        </div>
                    </div>
                </div>

                <div className="decor-shape1">
                    <img src="/assets/img/shape/Group_11.png" alt="Shape1" />
                </div>
            </section> */}

            <CustomHeader heading={data?.heading} text={data?.text} />

            <section className="container sectionspace80">
                <div className="row col-12 mx-auto">

                    <div className="col-auto">
                        <form action="">
                            <div className="form-group">
                                <select name="" className="form-select thm-select" id="">
                                    <option value="all"> All Resources</option>
                                    <option value="1"> option 1</option>
                                    <option value="2"> option 2</option>
                                    <option value="3"> option 3</option>
                                    <option value="4"> option 4</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 mx-auto row g-4">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card magazine-card">
                            <div className="card-header magazine-card-head">
                                <div className="card-title magazine-card-title">Integrated SSB Virtuosos Club</div>
                            </div>
                            <div className="card-body magazine-card-body">
                                <img src="/assets/img/about/journey-slider.png" className="magazine-card-img" alt="Magazine Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card magazine-card">
                            <div className="card-header magazine-card-head">
                                <div className="card-title magazine-card-title">Integrated SSB Virtuosos Club</div>
                            </div>
                            <div className="card-body magazine-card-body">
                                <img src="/assets/img/about/journey-slider.png" className="magazine-card-img" alt="Magazine Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card magazine-card">
                            <div className="card-header magazine-card-head">
                                <div className="card-title magazine-card-title">Integrated SSB Virtuosos Club</div>
                            </div>
                            <div className="card-body magazine-card-body">
                                <img src="/assets/img/about/journey-slider.png" className="magazine-card-img" alt="Magazine Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card magazine-card">
                            <div className="card-header magazine-card-head">
                                <div className="card-title magazine-card-title">Integrated SSB Virtuosos Club</div>
                            </div>
                            <div className="card-body magazine-card-body">
                                <img src="/assets/img/about/journey-slider.png" className="magazine-card-img" alt="Magazine Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card magazine-card">
                            <div className="card-header magazine-card-head">
                                <div className="card-title magazine-card-title">Integrated SSB Virtuosos Club</div>
                            </div>
                            <div className="card-body magazine-card-body">
                                <img src="/assets/img/about/journey-slider.png" className="magazine-card-img" alt="Magazine Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card magazine-card">
                            <div className="card-header magazine-card-head">
                                <div className="card-title magazine-card-title">Integrated SSB Virtuosos Club</div>
                            </div>
                            <div className="card-body magazine-card-body">
                                <img src="/assets/img/about/journey-slider.png" className="magazine-card-img" alt="Magazine Image" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 row mx-auto mt-5 text-center">
                    <div className="col-sm-4 col-3"></div>
                    <div className="col-sm-4 col-6">
                        <a href="javascript:void(0)" className="thm-btn mx-auto">Load More</a>
                    </div>
                    <div className="col-sm-4 col-3 text-end">
                        <span className="bottom-paginate">1 of 30</span>
                    </div>
                </div>
            </section>








        </>
    )
}

export default Magnize