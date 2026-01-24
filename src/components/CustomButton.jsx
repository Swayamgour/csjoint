function CustomButton({ text, onClick, disabled }) {
    return (
        <button
            style={{ zIndex: '9999999' }}
            className="ctaButton"
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default CustomButton;