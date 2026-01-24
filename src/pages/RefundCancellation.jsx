import { head } from "framer-motion/client";
import "../style/RefundCancellation.css";
import CustomHeader from "../components/CustomHeader";
import Footer from "./Footer";

export default function RefundCancellation() {
    const data = {
        heading: "Refund & Cancellation Policy",

    }
    return (
        <>
            <CustomHeader heading={data.heading} />
           
            <Footer />
        </>
    );
}
