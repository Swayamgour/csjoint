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
        textTwo: 'The Services Selection Board (SSB) is not an exam, it is a five-day leadership assessment designed to identify officer-like qualities in candidates aspiring to join the Indian Armed Forces. From psychological tests and group tasks to personal interviews, the SSB process evaluates how you think, act, and lead under pressure.'
    }

    return (
        <>
            <CustomHeader heading={data.heading} textTwo={data.textTwo} />
            <Methodology />
            <DaySchedule />
            <TipsToExcel />
            <SelectionMap />

            {/* <From /> */}
            <Footer />



        </>
    )
}

export default SsbPage