// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "gatsby-image";

import { Icon } from "@iconify/react";
import instagramOutlined from "@iconify/icons-ant-design/instagram-outlined";
import twitterOutlined from "@iconify/icons-ant-design/twitter-outlined";
import linkedinOutlined from "@iconify/icons-ant-design/linkedin-outlined";

import "../scss/aboutPage.scss";

type Data = {
    avatar: {
        childImageSharp: {
            fixed: any;
        };
    };
    site: {
        siteMetadata: {
            author: {
                name: string;
                summary: string;
            };
            social: {
                twitter: string;
                instagram: string;
                linkedIn: string;
                email: string;
            };
        };
    };
};

const AboutPage = ({ data, location }: PageProps<Data>) => {
    const { author, social } = data.site.siteMetadata;
    return (
        <Layout location={location}>
            <SEO title="About" />
            <div className="aboutPage">
                <Image
                    className="avatar"
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author.name}
                />
                <p>
                    I am <strong>{author.name}</strong> from Bangalore, India.
                </p>
                <p>
                    I have multiple areas of interest such as technology, art,
                    travel, football, yoga, etc. This website is intended to be
                    a catalogue of my work as well as an online log of my
                    journey through life.
                </p>
                <p>
                    If you share my interests and/or you would like to work with
                    me you can contact me via the following options. I would
                    love to chat with you.
                </p>
                <div className="follow-links">
                    <a href={`https://twitter.com/${social.twitter}`}>
                        <Icon icon={twitterOutlined} />
                    </a>
                    <a href={`https://linkedin.com/in/${social.linkedIn}`}>
                        <Icon icon={linkedinOutlined} />
                    </a>
                    <a href={`https://instagram.com/${social.instagram}`}>
                        <Icon icon={instagramOutlined} />
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;

export const pageQuery = graphql`
    query {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author {
                    name
                    summary
                }
                social {
                    twitter
                    instagram
                    linkedIn
                }
            }
        }
    }
`;
