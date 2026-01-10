import React from 'react'

function From() {
    return (
        <section className="enquiry-form-section sectionspace80">
            <div className="container">
                <div className="sct-title">
                    <h2>Enquire with us</h2>
                </div>

                <form className="enquiry-form">
                    <div className="row g-4">

                        <div className="col-md-6">
                            <input type="text" placeholder="Your Name" />
                        </div>

                        <div className="col-md-6">
                            <input type="email" placeholder="Your Email" />
                        </div>

                        <div className="col-md-6">
                            <input type="text" placeholder="Your Contact Number" />
                        </div>

                        <div className="col-md-6">
                            <input type="text" placeholder="Subject" />
                        </div>

                        <div className="col-12">
                            <textarea placeholder="Write Your Message"></textarea>
                        </div>

                        <div style={{marginBottom:'20px'}} className="col-12 text-center">
                            <button type="submit" className="enquiry-submit-btn">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default From