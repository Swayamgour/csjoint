import React from 'react'

function CustomButton({ text, onClick }) {
    return (
        <button className='ctaButton' onClick={onClick}>
            <span className='ctaText'>{text}</span>
        </button>
    )
}

export default CustomButton