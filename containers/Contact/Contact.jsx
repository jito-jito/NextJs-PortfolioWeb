import React from "react";
import Image from "next/image";
import ContactItem from "../../components/ContactItem/ContactItem.jsx";


export default function Contact() {


    return(
        <>
            <section className="page-container contact" id='contact'>
                <h1 className="contact-title">Te gustaría trabajar conmigo?</h1>
                <h2 className="contact-subTitle">envíame un mensage 👇</h2>
                <h2 className="contact-email">sergio.sergio.98@hotmail.com</h2>
                <div className="contact-socialContainer">
                    <ContactItem 
                        link='https://www.linkedin.com/in/sergio-sanhueza/'
                        img='/icon-linkedin.png'

                    />
                    <ContactItem 
                        link='https://github.com/jito-jito'
                        img='/icon-gitHub.png'
                        
                    />
                </div>
                
            </section>

        </>
    )
}