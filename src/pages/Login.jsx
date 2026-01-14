import React, { useEffect } from 'react'
import '../style/Login.css'
import Heading from '../components/Heading'
import CustomButton from '../components/CustomButton'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()

    useEffect(() => {
        const glow = document.querySelector('.otpglow-circle');
        if (glow) {
            glow.classList.add('animate-glow');
        }
    }, []);

    

    return (
        <div className="screen-wrapper" >
            {/* <h1>kjhgf</h1> */}

            {/* <!-- Content --> */}
            {/* <div className="content-layer"> */}
            <div className="content-bg"></div>

            <div className="container position-relative">
                <div className="otp-box mx-auto">

                    {/* <button >&times;</button> */}

                    {/* <Cross */}
                    <div onClick={() => navigate(-1)} className="otp-close-btn">
                        <RxCross2 />
                    </div>

                    {/* <h1 className="otp-form-title"></h1> */}
                    <div className='d-flex justify-content-center mb-5' >
                        <Heading h1='OTP Verification' />
                    </div>

                    <form className="row g-4 justify-content-center">
                        <div className="col-lg-12">
                            <input type="text" className="form-control custom-input" placeholder="Your Name" />
                        </div>

                        <div className="col-lg-12">
                            <input type="email" className="form-control custom-input" placeholder="Your Email" />
                        </div>

                        <div className="col-lg-12">
                            <input type="text" className="form-control custom-input" placeholder="Your Contact Number" />
                        </div>

                        <div className="col-lg-12 text-center mt-5 d-flex justify-content-center">
                            {/* <button type="button" className="btn btn-otp">SEND OTP</button> */}
                            <CustomButton text='SEND OTP' />
                        </div>
                    </form>

                    <span className="otpglow-circle"></span>

                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Login