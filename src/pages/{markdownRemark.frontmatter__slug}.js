import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import '../styles/markdown.css'
require("prismjs/themes/prism.css")

const BlogPostTemplate = ({ data }) => {
    const { title, date } = data.markdownRemark.frontmatter
    const { html } = data.markdownRemark
    return (
        <Layout pageTitle={title}>
            <div className='text-center pd-6 text-gray-500 prose-sm'>{date}</div>
            <div
                className='mx-auto'
                dangerouslySetInnerHTML={{
                    __html: html
                }} />
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`

export default BlogPostTemplate