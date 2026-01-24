import CustomHeader from "../components/CustomHeader";
import "../style/TermsConditions.css";
import Footer from "./Footer";

export default function TermsConditions() {

    const data = {
        heading: 'Terms & Conditions',


    }
    return (
        <>
            <CustomHeader heading={data.heading} />
           
            <Footer />
        </>
    );
}
