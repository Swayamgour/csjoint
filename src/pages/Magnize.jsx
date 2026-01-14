import React, { useEffect, useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import From from './From'
import Footer from './Footer'
import CustomButton from '../components/CustomButton'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Magnize() {

    const data =
    {
        heading: 'Roger That - Our monthly magazine',
        text: 'Our monthly magazine Roger That is your go- to resource for in -depth insights, real - world perspectives, and expert analysis tailored to the Services Selection Board(SSB) process.Curated with a strong focus on current affairs, the magazine features probable Group Discussion and Lecturette topics, helping aspirants stay informed, articulate, and assessment - ready',
        textTwo: ` We’re not just an academy, we’re a close-knit mentoring community. At CSJSA, every aspirant is personally guided by Lt Cdr Nikhil, whose experience assessing over 12,500 SSB candidates shapes our focused,
                                psychology-driven approach to SSB preparation. Our goal is simple yet powerful: to help every deserving young aspirant realise the dream of becoming a commissioned officer in the Indian Armed Forces.`

    }


    const [magazines, setMagazines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [downloadBtn, setDownloadBtn] = useState(true);


    const fetchAllMagazinePdfs = async () => {
        try {
            const res = await axios.get(
                "https://api.ssbwithisv.in/api/allMagazinePdfs"
            );

            return res.data; // success response
        } catch (error) {
            console.error("Error fetching magazine PDFs:", error);
            throw error;
        }
    };





    useEffect(() => {
        const loadMagazines = async () => {
            try {
                const data = await fetchAllMagazinePdfs();
                setMagazines(data.data || data); // depending on API structure
            } catch (error) {
                console.log("Failed to load magazines");
            } finally {
                setLoading(false);
            }
        };

        loadMagazines();
    }, []);

    // console.log(magazines)

    // import axios from "axios";

    const token = localStorage.getItem('accessToken')
    console.log(token)

    const navigate = useNavigate()

    const downloadPdf = async (pdfPath) => {
        if (!token) {
            navigate('/login')

        } else {

            setDownloadBtn(false)
            const url = `https://api.ssbwithisv.in/${pdfPath}`;

            const res = await axios.get(url, {
                responseType: "blob",
            });

            if (res) {
                setDownloadBtn(true)
            }

            const blob = new Blob([res.data], { type: "application/pdf" });
            const link = document.createElement("a");

            link.href = window.URL.createObjectURL(blob);
            link.download = "magazine.pdf";
            link.click();
        }
    };






    return (
        <>

            <CustomHeader heading={data?.heading} text={data?.text} />

            <section className="container sectionspace80">
                <div className="row col-12 mx-auto">

                    <div className="col-auto ms-auto">
                        <form action="">
                            <div className="form-group">
                                <select name="" className="form-select thm-select" id="">
                                    <option value="all"> All Resources</option>
                                    <option value="1"> option 1</option>
                                    <option value="2"> option 2</option>
                                    <option value="3"> option 3</option>
                                    <option value="4"> option 4</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 mx-auto row g-4">
                    {magazines?.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={item._id || index}>
                            <div className="card magazine-card">

                                {/* HOVER DOWNLOAD BUTTON */}
                                <div className="magazine-hover">


                                    <CustomButton text={downloadBtn ? 'Download PDF' : "Loading...."} onClick={() => downloadPdf(item.pdfFilePath)} />
                                </div>

                                <div className="card-header magazine-card-head">
                                    <div className="card-title magazine-card-title">
                                        {item?.pdfTitle}
                                    </div>
                                </div>

                                <div className="card-body magazine-card-body">
                                    <img
                                        src={`https://api.ssbwithisv.in/${item?.magazineFrontImage}`}
                                        className="magazine-card-img"
                                        alt="Magazine Image"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>



            </section>





            <From />
            <Footer />


        </>
    )
}

export default Magnize