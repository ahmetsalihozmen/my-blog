import React from 'react';
import {Icon} from'react-icons-kit'
import {socialGithub,socialLinkedin,socialTwitter,email} from "react-icons-kit/ionicons"
import Markdown from 'react-markdown'

const About = ({post}) => {
    return(
        <div className='tc'>
            <title>Hakkımda</title>
            <h1 className='hero-title'><a href='https://ahmetsalihozmen.com'>Ahmet Salih Özmen</a></h1>
            <a  href="mailto:ahmetsalihozm@outlook.com" target="_blank"><Icon className='ma2' size={32} icon={email}/>Email</a>    
            <a  href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank"><Icon className='ma2' size={32} icon={socialLinkedin}/>LinkedIn</a>      
            <a  href="https://github.com/ahmetsalihozmen" target="_blank"><Icon className='ma2' size={32} icon={socialGithub}/>GitHub</a>
            <br/>
            <br/>
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