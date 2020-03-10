import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export default function Template({data}){
    const post = data.markdownRemark
    return(
        <Layout>
            <SEO title="Service" />
            
            <h1>{post.frontmatter.title}</h1>
            <h4>Posetd by {post.frontmatter.auther} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML = {{__html:post.html}}/>
            <hr/>
            <Link to='/blogs'>Go back</Link>
        </Layout>
    )
}

export const pageQuery = graphql`
query BlogPostQueryByPath($path:String!){
    markdownRemark(frontmatter:{path:{eq: $path}}){
        html
        frontmatter{
            path
            title
            date
            author
        }
    }
}`