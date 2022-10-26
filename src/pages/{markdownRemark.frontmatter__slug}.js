import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
require("prismjs/themes/prism.css")

/**
 * 集聚与汇聚， 交相辉映与相辅相成，克己奉公与刚正不阿，以致和以至，遏制与遏止
 * 33232 13311 33244 42224 14223 32243 12144 12424
 */
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