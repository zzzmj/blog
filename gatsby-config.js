module.exports = {
    siteMetadata: {
        title: `Blog`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        'gatsby-plugin-postcss',
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-prismjs"
                    }
                ]
            }
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "posts",
                "path": "./blog/"
            },
        },
    ]
};