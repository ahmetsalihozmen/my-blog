import React from 'react';
import {Icon} from'react-icons-kit'
import {socialGithub,socialLinkedin,socialTwitter} from "react-icons-kit/ionicons"
import Link from 'next/link'
import ReactMarkdown from 'react-markdown';

const About = ({post}) => {
    return(
        <div className='tc'>
            <title>About</title>
            <h1 className='hero-title'><a href='https://ahmetozmen.herokuapp.com'>Ahmet Salih Özmen</a></h1>
            <Icon className='ma2' size={32} icon={socialLinkedin}/>
            <a  href="https://www.linkedin.com/in/ahmet-salih-özmen-30b466169" target="_blank">LinkedIn</a>
            <Icon className='ma2' size={32} icon={socialGithub}/>
            <a  href="https://github.com/ahmetsalihozmen" target="_blank">GitHub</a>
            <Icon className='ma2' size={32} icon={socialTwitter}/>
            <a  href="https://twitter.com/vokulfenmah" target="_blank">Twitter</a>
            <br/>
            <br/>
            <ReactMarkdown source={post}></ReactMarkdown>


            <style jsx>
                {`
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
    return {post: md};
  };
  

export default About;