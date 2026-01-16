import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import emailjs from "emailjs-com";
import Background from '../components/Background'

function From() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
            },
            "YOUR_PUBLIC_KEY"
        )
            .then(() => {
                alert("Query sent successfully!");
            })
            .catch(() => {
                alert("Something went wrong. Try again.");
            });
    };



    return (
        <section className="enquiry-form-section sectionspace80">
            <Background />
            <div className="container">
                <div className="sct-title">
                    <h2>Enquire with us</h2>
                </div>

                <form className="enquiry-form" onSubmit={handleSubmit}>
                    <div className="row g-4">

                        <div className="col-md-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Contact Number"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-12">
                            <textarea
                                name="message"
                                placeholder="Write Your Message"
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="col-12 text-center d-flex justify-content-center mb-4">
                            <CustomButton text="Submit" />
                        </div>

                    </div>
                </form>
            </div>
        </section>
    );
}

export default From;
