import React from "react";
import Image from "next/image";


export default function ProjectCard({ img, title, description, technologies, link }) {

    function openProject(e, link) {
        window.open(link)
    }

    return(
        <>
            <article className="projectCard">
                <figure className="projectCard-image">
                    <img src={img} alt="" />
                </figure>
                <section className="projectCard-details">
                    <h3 className="projectCard-title">{title}</h3>
                    <h4 className="projectCard-subTitle">Descripción</h4>
                    <p  className="projectCard-description">{description}</p>
                    <h4 className="projectCard-subTitle">Tecnologías</h4>
                    <div className="projectCard-detailsContainer">
                        <p  className="projectCard-technologies">{technologies}</p>
                        <button className="projectCard-button" onClick={(e) => openProject(e, link)}> ver en la web</button>
                    </div>
                </section> 
            </article>

        </>
    )
}