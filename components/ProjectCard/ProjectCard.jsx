import React from "react";
import Image from "next/image";


export default function ProjectCard({ img, title, description, technologies }) {


    return(
        <>
            <article className="projectCard">
                <figure className="projectCard-image">
                {/* <Image 
                    src={img} 
                    layout="fill" 
                    objectFit='scale-down'
                /> */}
                <img src={img} alt="" />
                </figure>
                <section className="projectCard-details">
                    <h3 className="projectCard-title">{title}</h3>
                    <h4 className="projectCard-subTitle">Description</h4>
                    <p  className="projectCard-description">{description}</p>
                    <h4 className="projectCard-subTitle">Technologies</h4>
                    <div className="projectCard-detailsContainer">
                        <p  className="projectCard-technologies">{technologies}</p>
                        <button className="projectCard-button"> see in web</button>
                    </div>
                </section> 
            </article>

        </>
    )
}