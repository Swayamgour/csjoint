// Glow.jsx
// import styles from "./Gl";

export default function Glow({ size = 320, top, left, right }) {
    return (
        <span
            className='glow'
            style={{
                width: size,
                height: size,
                top,
                left,
                right,
            }}
        />
    );

}
