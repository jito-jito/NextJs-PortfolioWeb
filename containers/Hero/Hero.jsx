import React from "react";
import Image from "next/image";


export default function Hero() {


    return(
        <>
            <section className="page-container main">
                <figure className="main-image">
                    <Image 
                        src="/ilustration-WebDeveloper.png" 
                        layout="fill" 
                        objectFit='contain'
                    />
                </figure>
                <h1 className="main-title">Hola, Soy Sergio Sanhueza Osorio - Frontend Developer</h1>
            </section>

        </>
    )
}