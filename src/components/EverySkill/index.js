import { useState } from 'react'

import './index.css'

import AOS from "aos";
import "aos/dist/aos.css";

import html2canvas from "html2canvas";

import ImageContainer from './styleone'

const EverySkill = ({skill}) => {

    const certificate = skill.certificate

    const [showCertificate, setShowCertificate]  = useState(false)


    const downloadImage = () => {
        const element = document.getElementById(
            "certificate-container"
        )

        html2canvas(element).then((canvas) => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "certificate.png";
            link.click();
        })
    }


    const CertificatePopup = () => {
        return (
          <div className='certiticate-popup-cont' data-aos="fade-up">
            <div id="certificate-container">
                <img className='certificate-image' src={certificate} alt="about" />
            
            </div>
            <div className='buttons-container-certificate'>
                <button onClick={() => setShowCertificate(false)} className='close-button-certificate'>Close</button>
                <button onClick={downloadImage} className='download-button-certificate'>Download</button>
            </div>
          </div>
        )
      }

return(
    <li>
    {showCertificate && <CertificatePopup />}
        <ImageContainer image={skill.image} className='image-certificate-container html-image'>
            <div className='inline-cont'>
            <button onClick={() => setShowCertificate(true)}>View Certificate</button>
            </div>
        </ImageContainer>
        <p>{skill.name}</p>
    </li>
        
)
}

export default EverySkill