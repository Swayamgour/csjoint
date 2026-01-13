// Heading.jsx
import React from "react";
import "../style/heading.css";

function Heading({ h1, t1 }) {
    return (
        <h1 className="headingOfSSb ">
            <span>{h1}</span>
            <span className="highlight">{t1}</span>
        </h1>
    );
}

export default Heading;
