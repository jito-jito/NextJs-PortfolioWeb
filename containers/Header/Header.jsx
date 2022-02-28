import React from "react";
import Image from "next/image";


export default function Header() {


    return(
        <>
            <header className="page-container header">
                <h1 className="header-title">Sergio Sanhueza</h1>
                <div className="header-nav-container">
                    <figure className="header-nav-menu">
                        <Image src="/icon-menu.png" width={35} height={35}/>
                    </figure>
                    <nav className="header-nav">
                    
                        <li className="header-nav-item">
                            <a href="">About me</a>
                        </li>
                        <li className="header-nav-item">
                            <a href="">Projects</a>
                        </li>
                        <li className="header-nav-item">
                            <a href="">Skills</a>
                        </li>
                        <li className="header-nav-item">
                            <a href="">Contact</a>
                        </li>
                    </nav>
                </div>
            </header>
        </>
    )
}