import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
// import emailjs from "emailjs-com";
import Background from '../components/Background'
import axios from "axios";
import toast from 'react-hot-toast';


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

    const [loading, setLoading] = useState(true)



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(false)

        try {
            const response = await axios.post(
                "https://api.ssbwithisv.in/api/send-email",
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data);
            toast.success(" thank you for your enquiry. We will reach out to you soon");
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
            setLoading(true)


        } catch (error) {
            console.error(error);
            toast.error("Failed to send email");
        }
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
                                value={formData.name}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                onChange={handleChange}
                                value={formData.email}

                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Contact Number"
                                onChange={handleChange}
                                value={formData.phone}

                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                onChange={handleChange}
                                value={formData.subject}

                                required
                            />
                        </div>

                        <div className="col-12">
                            <textarea
                                name="message"
                                placeholder="Write Your Message"
                                onChange={handleChange}
                                value={formData.message}

                                required
                            ></textarea>
                        </div>

                        <div className="col-12 text-center d-flex justify-content-center mb-4">
                            <CustomButton text={loading ? "SUBMIT" : "LOADING..."} />
                        </div>

                    </div>
                </form>
            </div>
        </section>
    );
}

export default From;
