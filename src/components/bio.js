/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Icon } from '@iconify/react';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import twitterOutlined from '@iconify/icons-ant-design/twitter-outlined';
import linkedinOutlined from '@iconify/icons-ant-design/linkedin-outlined';


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
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
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div>
      <Image fixed={data.avatar.childImageSharp.fixed} alt={author.name} />
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
            <Icon icon={twitterOutlined} />
        </a>
        {` `}
        <a href={`https://linkedin.com/in/${social.linkedIn}`}>
            <Icon icon={linkedinOutlined} />
        </a>
        {` `}
        <a href={`https://instagram.com/${social.instagram}`}>
            <Icon icon={instagramOutlined} />
        </a>
      </p>
    </div>
  );
};

export default Bio;
