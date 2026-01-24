import React from 'react'
import CustomHeader from '../components/CustomHeader'
import Methodology from '../components/Methodology'
import TipsToExcel from '../components/TipsToExcel'
import SelectionMap from '../components/SelectionMap'
import DaySchedule from '../components/DaySchedule'
import From from './From'
import Footer from './Footer'

function SsbPage() {

    const data = {
        heading: 'What is SSB?',
        textTwo: `The Services Selection Board (SSB) is not an exam. It is a five-day personality assessment board designed to identify shades of officer-like qualities in candidates aspiring to join the Indian Armed Forces in the officer cadre. From psychological tests and group tasks to personal interviews, the SSB process evaluates how you think, act, decide, and lead under pressure.`,
        banner: '/assets/website/Whatisssb_banner.png'
    }

    return (
        <>
            <CustomHeader heading={data.heading} textTwo={data.textTwo} banner={data?.banner} />
            <Methodology />
            <DaySchedule />
            <TipsToExcel />
            <SelectionMap />
            <Footer />



        </>
    )
}

export default SsbPage

// remov index
// hover on any index section and
// then glow state
// NSB Vishakhapatnam
// 33 SSB Bhopal
// 12 SSB Bangalore
// SSB (Kolkata)