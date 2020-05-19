// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

type Data = {
    site: {
        siteMetadata: {
            title: string;
        };
    };
    allMarkdownRemark: {
        edges: {
            node: {
                excerpt: string;
                frontmatter: {
                    title: string;
                    date: string;
                    description: string;
                    slug: string;
                };
            };
        }[];
    };
};

const BlogIndex = ({ data, location }: PageProps<Data>) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All posts" />
            <Bio />
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.frontmatter.slug;
                return (
                    <article key={node.frontmatter.slug}>
                        <header>
                            <h3>
                                <Link to={node.frontmatter.slug}>{title}</Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        node.frontmatter.description ||
                                        node.excerpt
                                }}
                            />
                        </section>
                    </article>
                );
            })}
        </Layout>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        slug
                    }
                }
            }
        }
    }
`;
