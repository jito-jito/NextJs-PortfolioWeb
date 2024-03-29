import Head from 'next/head'

import Header from '../containers/Header/Header.jsx'
import Hero from '../containers/Hero/Hero.jsx'
import About from '../containers/About/About.jsx'
import Projects from '../containers/Projects/Projects.jsx'
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx'
import Skills from '../containers/Skills/Skills.jsx'
import Github from '../containers/Github/Github.jsx'
import Contact from '../containers/Contact/Contact.jsx'
import Footer from '../containers/Footer/Footer'
import { gql, useQuery } from '@apollo/client';



export default function Home(props) {

  const QUERY_GET_DATA= gql`
  {
    user(login: "jito-jito") {
      pinnableItems(first: 6) {
        nodes {
          ... on Repository {
            id
            name
            description
            languages(first: 10) {
              nodes {
                color
                id
                name
              }
            }
            homepageUrl
            url
            updatedAt
          }
        }
      }
      repositories(orderBy: {field: UPDATED_AT, direction: DESC}, first: 5) {
        edges {
          node {
            id
            createdAt
            name
            url
            languages(first: 10) {
              nodes {
                color
                name
                id
              }
            }
          }
        }
      }
    }
  }
  `
  const { loading, error, data } = useQuery(QUERY_GET_DATA);

  return (
    <>
      <Head>
        <meta property="og:title" content="Sergio Sanhueza Portafolio Web" />
        <meta property="og:description" content="portafolio personal" />
        <meta property="og:image" content="/webImage.png" />
        <link rel="shortcut icon" href="/icon-portfolio.png" />
        <title>Sergio Sanhueza</title>
      </Head>
      <Header 
        loadingData={loading}
        error={error}
      />
      <Hero />
      <About />
      <Projects>
        <ProjectCard
          img='/image-project1.png'
          title='Gethired-CodeTracker'
          description='Es una aplicación que trackea el tiempo de desarrollo que una persona gasta utilizando VsCode con el propósito de que los desarroladores puedan llevar control sobre su tiempo de desarrollo. Utiliza un frontend en NextJs, backend con hapi, Base de datos en Mongo db y la extensión en VsCode utilizando TypeScript.'
          technologies='NextJs, SASS, Storybook, Hapi, MongoDb, JavaScript, TypeScript.'
          link='https://get-hired-code-tracker.vercel.app/'
        />

        <ProjectCard
          img='/image-project2.png'
          title='Marvel Comics APP'
          description='Es una aplicación que busca comics de Marvel por los personajes que aparecen en él, permitiendo además guardar la información de los comics que un usuario desee conservar. Utiliza un frontend en ReactJs, Base de datos y Autenticación con firebase.'
          technologies='ReactJs, SASS, Firebase Cloud Store, Firebase Authentication.'
          link='https://marvel-comic-app.vercel.app/'
        />

        <ProjectCard
          img='/image-project3.png'
          title='Generador de Facturas'
          description='Es una aplicación que crea una factura por productos cargados de una base de datos. Para el Frontend y las interacciones de la aplicación utiliza HTML, CSS y JavaScript, también firebase para la persistencia de datos de los productos.'
          technologies='HTML, CSS, JavaScript, Firebase Cloud Store.'
          link='https://jito-jito.github.io/GeneradorDeFacturas/'
        />

      </Projects>
      <Skills/>
      { !loading && !error &&
        <Github 
          pinnedRepos={data.user.pinnableItems}
          activity={data.user.repositories}
        />
      }
      
      <Contact/>
      <Footer/>
    </>
  )
}