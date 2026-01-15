import React from 'react'

function CustomButton({ text, onClick }) {
    return (
        <button className='ctaButton' onClick={onClick}>
           {text}
        </button>
    )
}

export default CustomButton