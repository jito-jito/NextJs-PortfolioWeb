import React from "react";
import Image from "next/image";

export default function PinnedRepo({
    name,
    description,
    languages,
    gitHubUrl,
    homepageUrl
}) {


    return(
        <>
            <article className="card">
               <section className="card-container main">
                    <div className="card-container title" >
                        <figure className="card-container-img">
                            <Image 
                                src="/icon-book.png" 
                                alt="" 
                                layout='fill'
                                objectFit='contain'
                            />
                        </figure>
                        
                        <h2 className="card-container-repoTitle">{name}</h2>
                        <button className="card-container-plublicBtn">Public</button>
                    </div>
                   
                    {/* <div className="card-container date">
                        <figure className="card-container-img">
                            <Image 
                                src="/icon-time.png" 
                                alt="" 
                                layout='fill'
                                objectFit='contain'
                            />
                        </figure>
                        <p>Today</p>
                    </div> */}
               </section>
               <p className="card-description">{description}</p>
               <section className="card-container tecnologies-links">
                    <div className="card-container-tecnologies">
                    { languages.nodes.map((language) => (
                        <div 
                            key={language.name}
                            className="card-container-techItem"
                        >
                            <div style={{ background: `${language.color}`}}></div>
                            <p>{language.name}</p>
                        </div>
                    ))   
                    }
                    </div>
                    <div className="card-container-links">
                        <a href={gitHubUrl} className="card-githubLink">
                            <figure>
                                <Image 
                                    src="/icon-githubCard.png" 
                                    alt="" 
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </figure>
                        </a>
                        {homepageUrl?.length > 0 &&
                            <a href={homepageUrl} className="card-webLink">
                                <figure>
                                    <Image 
                                        src="/icon-url.png"
                                        alt="" 
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </figure>
                            </a>
                        }
                        
                    </div>
               </section>
               
               
            </article>

        </>
    )
}