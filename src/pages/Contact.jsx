import React from 'react'
import CustomHeader from '../components/CustomHeader'
import From from './From'
import Footer from './Footer'

function Contact() {
    return (
        <>
            <CustomHeader heading={'Contact us'} text={`At CS Joint Services Academy, we believe every aspirant deserves personal guidance and clarity.
                Reach out to us for course details, counselling, or any queries related to SSB preparation.
                Our team is always ready to assist you on your journey to becoming an officer in the Indian Armed Forces.
                `}
                // banner={''}
                banner={'/assets/website/contact_us_banner.png'}

            />
            <From />
            <Footer />
        </>
    )
}

export default Contact