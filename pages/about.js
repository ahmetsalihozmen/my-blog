import React from 'react';
import {Icon} from'react-icons-kit'
import {socialGithub,socialLinkedin,socialTwitter,email} from "react-icons-kit/ionicons"
import Markdown from 'react-markdown'
import Navbar from '../src/components/navbar';

const About = ({post}) => {
    return(
        <div className='tc'>
            <title>Hakkımda</title>
            <Navbar />
            <div className='post-text'>
            <Markdown>{post}</Markdown>
            </div>

            <style jsx>
                {`
                 .post-text{
                  text-align:left;
                  max-width:650px;
                  margin: auto;
                }
                 a:hover , a{
                    color: black;
                    text-decoration:none;
                  }
                  .hero-title{
                    font-size:48px;
                    margin: 30px;
                  }
                `}
            </style>
        </div>
    )

}

About.getInitialProps =async({req,query})=>{

    const md = require('../src/posts/about.md').default
    console.log(md)
    return {post: md};
  };
  

export default About;