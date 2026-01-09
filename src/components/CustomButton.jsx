import React from 'react'

function CustomButton({ text }) {
    return (
        <button className='ctaButton'>
            <span className='ctaText'>{text}</span>
        </button>
    )
}

export default CustomButton