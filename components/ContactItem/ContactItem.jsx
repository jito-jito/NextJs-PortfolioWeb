import React from "react";
import Image from "next/image";


export default function ContactItem( { link, img } ) {


    return(
        <>
            <a className="contactItem" href={link}>
                <figure className='contactItem-image'>
                    <Image 
                        src={img} 
                        alt="" 
                        layout='fill'
                        objectFit='contain'
                    />
                </figure>
            </a>
           

        </>
    )
}