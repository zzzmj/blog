import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = ({ data }) => {
    return (
        <Layout pageTitle="TECH">
            <ul>
                {data.allMarkdownRemark.edges.map((nodeObj) => {
                    const node = nodeObj.node
                    const { title, slug, date } = node.frontmatter
                    return <li className='hover:underline' key={node.id}>
                        <Link to={`/${slug}`}>
                            <b>{title}</b>
                            <span>{date}</span>
                        </Link>
                    </li>
                })}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "tech"}}}) {
            edges {
              node {
                id
                frontmatter {
                  category
                  date
                  title
                  slug
                }
              }
            }
        }
    }
  
`

export default AboutPage