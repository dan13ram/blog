require("dotenv").config();
const parseNewLines = function (key) {
  return typeof key === "string" ? key.replace(/\\n/g, "\n") : key;
};
const privateKey = parseNewLines(process.env.FIREBASE_PRIVATE_KEY);
module.exports = {
  siteMetadata: {
    title: `dan13ram`,
    author: {
      name: `Dhanwanthari Ramakrishnan`,
      summary: `Coder & Artist`,
    },
    description: `Personal blog and portfolio`,
    siteUrl: `https://dan13ram.com/`,
    social: {
      twitter: `dan13ram`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dan13ram`,
        short_name: `dan13ram`,
        start_url: `/`,
        //background_color: `#ffffff`,
        //theme_color: `#663399`,
        //display: `minimal-ui`,
        //icon: `content/assets/gatsby-icon.png`
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-flamelink",
      options: {
        firebaseConfig: {
          privateKey,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        },
        environment: "production",
        content: true,
        populate: true,
        navigation: true,
        globals: true,
      },
    },
    `gatsby-plugin-sass`,
  ],
};
