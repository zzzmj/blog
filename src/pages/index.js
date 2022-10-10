import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
    console.log('data', data)
    return (
        <Layout>
            <p>心中有火，眼里有光。</p>
        </Layout>
    )
}

// export const query = graphql`
//     query {
//         allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
//             nodes {
//                 name
//             }
//         }
//     }
// `

export const Head = () => <title>Home Page</title>

export default IndexPage