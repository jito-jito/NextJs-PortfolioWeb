import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../containers/Header/Header.jsx'
import Hero from '../containers/Hero/Hero.jsx'
import About from '../containers/About/About.jsx'
import Projects from '../containers/Projects/Projects.jsx'
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx'
import Skills from '../containers/Skills/Skills.jsx'
import Contact from '../containers/Contact/Contact.jsx'
import Footer from '../containers/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero />
      <About />
      <Projects>
        <ProjectCard
          img='/image-project1.png'
          title='Gethired-CodeTracker'
          description='Es una aplicación que trackea el tiempo de desarrollo que una persona gasta utilizando VsCode con el propósito de que los desarroladores puedan llevar control sobre su tiempo de desarrollo. Utiliza un frontend en NextJs, backend con hapi, y la extensión en VsCode con TypeScript.'
          technologies='NextJs, Storybook, Hapi, JavaScript, TypeScript.'
          link='https://get-hired-code-tracker.vercel.app/'
        />

        <ProjectCard
          img='/image-project2.png'
          title='Marvel Comics APP'
          description='Es una aplicación que busca comics de Marvel por los personajes que aparecen en él, permitiendo además guardar la información de los comics que un usuario desee conservar. Utiliza un frontend en ReactJs, Base de datos y Autenticación con firebase.'
          technologies='ReactJs, SASS, Firebase Cloud Store, Firebase Authentication.'
        />

        <ProjectCard
          img='/image-project3.png'
          title='Generador de Facturas'
          description='Es una aplicación que crea una factura por productos cargados de una base de datos.'
          technologies='HTML, CSS, JavaScript, Firebase Cloud Store.'
          link='https://jito-jito.github.io/GeneradorDeFacturas/'
        />

      </Projects>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}
