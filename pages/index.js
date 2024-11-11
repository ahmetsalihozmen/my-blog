import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material';
import PostCard from '../src/components/PostCard';
import Link from 'next/link';

const Home = ({posts}) => {
  const theme = useTheme();
  const { text, background, grey, orange } = theme.palette;


  if (!posts || posts.length === 0) {
    return <Typography variant="h5" color="inherit">No posts available</Typography>;
  }
  return (
    <Grid className='tc'>
      <title>Ahmet Salih Ozmen Blog</title>
      <Grid sx={{
        background: background.primary, height: "900px",
      }}>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
          <Grid id='mainpost' item width="60%"
            sx={{
              '@keyframes moveTopToCenter': {
                '0%': {
                  transform: 'translateY(50%)',
                  opacity: 0
                },
                '100%': {
                  transform: 'translateY(0)',
                  opacity: 1
                }
              },
              animation: 'moveTopToCenter 0.8s ease-out',
            }}
          >
           <Link href={posts[0]?.slug}>
              <Typography sx={{ color: orange, fontWeight: "bold", marginBottom: '40px' }} variant="h2" color="inherit">
                {posts[0]?.title}
              </Typography>
           </Link>
              <Typography sx={{ color: text, fontWeight: "bold" }} variant="h5" color="inherit">
              {posts[0]?.intro}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container padding={5}>
        {
          posts?.slice(1, 5).map((post,) => (
            <Grid display='flex' justifyContent='center' container marginBottom='10px' item xl={3} lg={6} sm={12} key={post.slug}>
              <PostCard post={post} />
            </Grid>
          ))
        }
        </Grid>
      <style jsx>{`
      .post-date{
      margin-top:10px;
      text-align:right;
          color: #262626;
        }
      .post-text{
      text-align:left;
        }
      .post-title{
          margin: 30px;
        }
      `}</style>
    </Grid>
  )
}


export async function getStaticProps() {
  const posts = require('../src/blog-posts').blogPosts
  const lastPosts = posts.reverse().slice(0, 5);

    return {
        props: { posts: lastPosts },
    };
  
}

export default Home;


