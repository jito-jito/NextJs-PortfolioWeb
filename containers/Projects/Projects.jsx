import React from "react";
import Image from "next/image";


export default function Projects({ children }) {


    return(
        <>
            <section className="page-container projects">
                <h1 className="projects-title">Proyectos:</h1>
                { children }
            </section>

        </>
    )
}