import React from "react";
import Image from "next/image";
import SkillItem from "../../components/SkillItem/SkillItem.jsx";

export default function Skills() {


    return(
        <>
            <section className="page-container skills" ID='skills'>
                <div className="skills-titleContainer">
                    <h1 className="skills-title">Competencias:</h1>
                    <figure className="skills-image">
                        <img 
                            src="/ilustration-WebDevelopment.png"
                            alt="ilustration-web-development"
                        />
                    </figure>
                </div>
                <article className='skills-container'>
                    <h2  className='skills-technologies-title'>
                        Tecnologías
                    </h2>
                    <section className='skills-technologiesContainer'>
                        <SkillItem
                            img="/icon-html5.png"
                            title="Html5"
                        />
                        <SkillItem
                            img="/icon-css3.png"
                            title="CSS3"
                        />
                        <SkillItem
                            img="/icon-javaScript.png"
                            title="JavaScript"
                        />
                        <SkillItem
                            img="/icon-reactJs.png"
                            title="ReactJs"
                        />
                        <SkillItem
                            img="/icon-git.png"
                            title="Git"
                        />
                    </section>
                    <h2  className='skills-tools-title'>
                        Herramientas
                    </h2>
                    <section className='skills-toolsContainer'>
                        <SkillItem
                            img="/icon-notion.png"
                            title="Notion"
                        />
                          <SkillItem
                            img="/icon-figma.png"
                            title="Figma"
                        />
                    </section>
                </article>
            </section>

        </>
    )
}