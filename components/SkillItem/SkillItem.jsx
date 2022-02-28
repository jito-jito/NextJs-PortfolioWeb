import React from "react";
import Image from "next/image";


export default function SkillItem({ img, title}) {


    return(
        <>
            <div className='skill-item'>
                <figure className='skill-item-image'>
                    <Image 
                        src={img} 
                        alt={title} 
                        layout="fill"
                        objectFit='contain'
                    />
                    
                </figure>
                <figcaption className='skill-item-title'>{title}</figcaption>
            </div>
           

        </>
    )
}