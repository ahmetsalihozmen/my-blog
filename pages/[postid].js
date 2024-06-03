import React from 'react';
import Markdown from 'react-markdown';
import { Grid, useTheme } from '@mui/material';
import rehypeRaw from 'rehype-raw'

const Blogpost = ({ post }) => {
  const theme = useTheme();
  const {text, background} = theme.palette;

  return (
    <Grid container height='100%' sx={{ background: background.primary, height: '100%' }} width="100%">
      <Grid item xs={1}/>
      <Grid item xs={10}>
        <div className='tc text'>
          <title>{post?.title}</title>
          <div className='post'>
            <h1 className='post-title'>{post?.title}</h1>
            <div className='post-text'>
              <Markdown rehypePlugins={[rehypeRaw]}>{post?.text}</Markdown>
            </div>
            <div className='post-date'>{post?.date}</div>
          </div>

          <style jsx>{`
            .blog-title {
              margin-bottom: 10%;
            }
            a:hover,
            a {
              color: black;
              text-decoration: none;
            }
            .hero-title {
              font-size: 48px;
              margin: 30px;
            }
            .post {
              max-width: 650px;
              margin: auto;
            }
            .post-date {
              margin-top: 10px;
              margin-bottom: 30px;
              text-align: right;
              color: #cccccc;
            }
            .post-text {
              text-align: left;
              color: ${text};
            }
            .post-title {
              color: ${text};
            }

          `}</style>
        </div>
      </Grid>
      <Grid item xs={1}/>
    </Grid>
  );
};

export async function getStaticPaths() {
  const posts = require('../src/blog-posts').blogPosts

  const paths = posts.map((post) => ({
    params: { postid: post.slug.toString() },
  }));  

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const getPost = require('../src/blog-posts').getPost
  const post = getPost(params.postid);

  if (!post){
    return {
      props: {
        post: null
      }
    }
  }

  return {
    props: {
      post,
    },
  };
   
}

export default Blogpost;
