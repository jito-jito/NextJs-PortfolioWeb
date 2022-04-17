import '../styles/globals.scss'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
  
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
  }
});


function MyApp({ Component, pageProps }) {

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
