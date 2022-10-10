// Step 1: Import React
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const LifePage = (props) => {
    const { data } = props
    return (
        <Layout pageTitle="LIFE">
            <ul>
                {data.allMarkdownRemark.edges.map((nodeObj) => {
                    const node = nodeObj.node
                    const { title, slug, date } = node.frontmatter
                    return <li key={node.id}>
                        <Link className="no-underline flex justify-between items-center" to={`/${slug}`}>
                            <span className='truncate flex-1'>{title}</span>
                            <span className='width-5 text-gray-500 prose-sm'>{date}</span>
                        </Link>
                    </li>
                })}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "life"}}}) {
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



export default LifePage