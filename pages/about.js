import React from 'react';
import Markdown from 'react-markdown'
import Navbar from '../src/components/navbar';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const About = ({post}) => {
    const theme = useTheme();
    const {background} = theme.palette;
    return(
        <Box sx={{ background: background.primary, height: '100%' }} className='tc'>
            <title>Hakkımda</title>
            <div className='post-text'>
            <Markdown>{post}</Markdown>
            </div>
            <style jsx>
                  {`
                  .post-text{
                    text-align:left;
                    max-width:650px;
                    margin: auto;
                    color: ${theme.palette.text};
                  }
                  .hero-title{
                    font-size:48px;
                    margin: 30px;
                  }
                `}
            </style>
        </Box>
    )

}


export async function getStaticProps({ params }) {
  const md = require('../src/posts/about.md').default
  return {props: {post: md}};
}

// About.getInitialProps =async({req,query})=>{

//     const md = require('../src/posts/about.md').default
//     console.log(md)
//     return {post: md};
//   };
  

export default About;