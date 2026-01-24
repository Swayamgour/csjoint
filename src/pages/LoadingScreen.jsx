import "../style/LoadingScreen.css";
// import logo from "../assets/logo.png"; // 👉 apna logo yahan daalo

export default function LoadingScreen() {
    return (
        <div className="loading-root">
            <div className="loading-content">
                <img
                    src={'/assets/logo/ISV.png'}
                    alt="SSB with ISV Logo"
                    className="loading-logo"
                />

                <h1 className="loading-text">SSB with ISV</h1>
                <p className="loading-pre">India’s first online SSB mentoring platform with a virtual GTO ground</p>


                {/* Opening PAGE Text below LOGO:-
                First line text - SSB with ISV (Bold faced)
                second line text - */}
            </div>
        </div>
    );
}
