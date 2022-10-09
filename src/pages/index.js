import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
    console.log('data', data)
    return (
        <Layout>
            <p>这是我的主页</p>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
            nodes {
                name
            }
        }
    }
`

export const Head = () => <title>Home Page</title>

export default IndexPage