import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../containers/Header/Header.jsx'
import Hero from '../containers/Hero/Hero.jsx'
import About from '../containers/About/About'
import Projects from '../containers/Projects/Projects.jsx'
import ProjectCard from '../components/ProjectCard/ProjectCard'

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



        />


      </Projects>
      <h1>main page</h1>
    </>
  )
}
